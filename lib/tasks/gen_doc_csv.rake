desc "Populate DB from doctor links"
task :populate_db => :environment do 
	require 'nokogiri'
	require 'open-uri'

	File.readlines('/home/dharohar/work/workspace/projects/doctor_crawler/lists/generated_links.txt').each do |line|
		f = File.open(line.strip)
		doc = Nokogiri::HTML(f)
		
		name = node_to_text(doc.at_css('h1'))
		puts "fetching data for: " + name
		profile_image_path = doc.at_css('.doc_avatar')['data-originalsrc'].strip
		description = doc.at_css('#summaryText')['data-summary'].strip
		doctor_instance = Doctor.new(name:name, profile_image_path:profile_image_path, description:description)
		# .gsub(/\s+/, "")

		locations = doc.css('.clinic-block')
		locations.each do |loc|
			loc_name = node_to_text(loc.at_css('.grey'))
			loc_address = node_to_text(loc.at_css('.clinic-street-address span'))
			loc_fee = node_to_text(loc.at_css('.clinic-fees p'))
			location_instance = Location.new(name:loc_name, address:loc_address, fee:loc_fee)

			loc_timings = loc.css('.clinic-timings-wrapper')
			loc_timings.each do |timing|
				days = node_to_text(timing.at_css('.clinic-timings-day'))
				loc_sessions = timing.at_css('.clinic-timings-session')
				loc_sessions.css('br').each{ |br| br.replace(", ") } if !loc_sessions.blank?
				sess = loc_sessions.text.strip if !loc_sessions.blank?
				timing_instance = Timing.new(day:days, session:sess)
				location_instance.timings << timing_instance
			end
			doctor_instance.locations << location_instance
		end 
		services = doc.css('.service-cell')
		services.each do |ser|
			service_instance = Service.new(desc:ser.text.strip)
			doctor_instance.services << service_instance
		end

		specializations = doc.css('.specialty-row')
		specializations.each do |spec|
			specialization_instance = Specialization.new(desc:spec.text.strip)
			doctor_instance.specializations << specialization_instance
		end

		educations = doc.css('.qualification-row')
		educations.each do |edu|
			degree = node_to_text(edu.at_css('.qualification-degree'))
			college = node_to_text(edu.at_css('.qualification-details'))
			education_instance = Education.new(degree:degree, college:college)
			doctor_instance.educations << education_instance
		end

		experiences = doc.css('.organization-row')
		experiences.each do |ex|
			period = node_to_text(ex.at_css('.exp-tenure'))
			# det = ex.at_css('.exp-details').text.strip
			det = node_to_text(ex.at_css('.exp-details'))
			experience_instance = Experience.new(period:period, detail:det)
			doctor_instance.experiences << experience_instance
		end
		awards_and_recognitions = doc.css('.award-row')
		awards_and_recognitions.each do |award|
			award_desc = award.text.strip.rpartition("-").first.strip
			award_year = award.text.strip.rpartition("-").last.strip
			award_instance = Award.new(desc:award_desc, year:award_year)
			doctor_instance.awards << award_instance
		end
		memberships = doc.css('.membership-row')
		memberships.each do |mem|
			mem_title = mem.text.strip
			mem_instance = Membership.new(title:mem_title)
			doctor_instance.memberships << mem_instance
		end
		registrations = doc.css('.registration-row')
		registrations.each do |reg|
			reg_number = reg.at_css('.exp-tenure').text.strip
			reg_detail = reg.at_css('.exp-details').text.strip
			reg_instance = Registration.new(number:reg_number, detail:reg_detail)
			doctor_instance.registrations << reg_instance
		end
		f.close
		
		if Doctor.find_by(name:name).nil?
			doctor_instance.save
			if doctor_instance.save
				puts "sucessfully saved: " + name
			else
				puts "doctor not saved, some error occurred"
			end
		else
			puts "Doctor not added because doctor already present in DB"
		end
		
	end

end

def node_to_text (node)
	str = node || ""
	str = str.text.strip if !str.blank?
end