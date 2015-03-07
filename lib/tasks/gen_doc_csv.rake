desc "Populate DB from doctor links"
task :gen_csv => :environment do 
	require 'nokogiri'
	require 'open-uri'

	File.readlines('C:/Users/dharohar.rathore/Documents/Projects/doctor_crawler/lists/generated_links.txt').each do |line|
		f = File.open(line.strip)
		doc = Nokogiri::HTML(f)
		
		name = doc.at_css('h1').text
		profile_image_path = doc.at_css('.doc_avatar')['data-originalsrc'].strip
		qual_array = doc.at_css('.doctor-qualifications').text.strip.split('-')
		qualifications = qual_array[0]
		if qualifications != nil
			qualifications = qualifications.gsub(/\s+/, "")
		end
		
		specialization = qual_array[1]
		if specialization != nil
			specialization = specialization.gsub(/\s+/, "")
		end
		
		description = doc.at_css('#summaryText')['data-summary'].strip
		clinic_title = doc.at_css('#infoTab .grey').text
		clinic_name = ""
		clinic_locality = doc.at_css('.black').text.gsub(/\s+/, "")
		clinic_city = doc.at_css('.clinic-locality span').text.gsub(/\s+/, "")
		clinic_address = doc.at_css('.clinic-street-address span').text.strip
		clinic_timings = doc.at_css('.clinic-timings-session').text.strip
		clinic_fee = doc.at_css('.clinic-fees p').text.strip
		education = doc.css('.qualification-row').text.strip.gsub(/\s+/, "")
		experience = doc.css('.organization-row').text.strip.gsub(/\s+/, "")
		awards_and_recognitions = doc.css('.award-row').text.strip.gsub(/\s+/, "")
		puts awards_and_recognitions
		memberships = doc.css('.membership-row').text.strip.gsub(/\s+/, "")
		f.close
		end
	end

end