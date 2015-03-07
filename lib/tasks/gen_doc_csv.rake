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

		educations_nodeset = doc.css('.qualification-row')
		educations = []
		educations_nodeset.each do |ser|
			educations << ser.text.strip
			# puts "**"+ser+"**"
		end
		educations.each do |ser|
			# educations << ser.text.strip
			puts "**"+ser+"**"
		end
		experiences = doc.css('.organization-row').text.strip
		awards_and_recognitions = doc.css('.award-row').text.strip
		memberships = doc.css('.membership-row').text.strip
		f.close
	end

end