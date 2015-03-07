desc "Populate DB from doctor links"
task :populate_db => :environment do 
	require 'nokogiri'
	require 'open-uri'

	File.readlines('C:/Users/dharohar.rathore/Documents/Projects/doctor_crawler/lists/generated_links.txt').each do |line|
		f = File.open(line.strip)
		doc = Nokogiri::HTML(f)
		
		name = doc.at_css('h1').text
		profile_image_path = doc.at_css('.doc_avatar')['data-originalsrc'].strip
		description = doc.at_css('#summaryText')['data-summary'].strip
		# .gsub(/\s+/, "")

		locations = doc.css('.clinic-block')
		locations.each do |loc|
			loc_name = loc.at_css('.grey')
			loc_address = loc.at_css('.clinic-street-address span')
			loc_fee = loc.at_css('.clinic-fees p')

			loc_timings = loc.css('.clinic-timings-wrapper')
			loc_timings.each do |timing|
				days = timing.at_css('.clinic-timings-day').text.strip
				loc_sessions = timing.at_css('.clinic-timings-session')
				loc_sessions.css('br').each{ |br| br.replace(", ") }
				sess = loc_sessions.text.strip			
			end
		end 
		services = doc.css('.service-cell')

		specializations = doc.css('.specialty-row')

		educations = doc.css('.qualification-row')
		educations.each do |edu|
			degree = edu.at_css('.qualification-degree').text.strip
			college = edu.at_css('.qualification-details').text.gsub("-", "").strip
		end

		experiences = doc.css('.organization-row')
		experiences.each do |ex|
			period = ex.at_css('.exp-tenure').text.strip
			det = ex.at_css('.exp-details').text.strip
		end
		awards_and_recognitions = doc.css('.award-row')
		awards_and_recognitions.each do |award|
			award_desc = award.text.strip.rpartition("-").first.strip
			award_year = award.text.strip.rpartition("-").last.strip
		end
		memberships = doc.css('.membership-row')
		memberships.each do |mem|
			mem_title = mem.text.strip
		end
		registrations = doc.css('.registration-row')
		registrations.each do |reg|
			reg_number = reg.at_css('.exp-tenure').text.strip
			reg_detail = reg.at_css('.exp-details').text.strip
		end
		f.close
	end

end