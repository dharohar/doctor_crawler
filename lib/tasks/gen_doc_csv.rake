desc "Generate CSV from doctor links"
task :gen_csv => :environment do 
	require 'nokogiri'
	require 'open-uri'
	require 'mechanize'

	require "csv"
	CSV.open("/home/dharohar/work/workspace/projects/doctors_crawler/docData.csv", "wb", {:col_sep => "-----"}) do |csv|
		csv << ["name", "profile_image_path", "qualifications", "specialization", "description", "clinic_title", "clinic_name", "clinic_locality", "clinic_city", "clinic_address", "clinic_timings", "clinic_fee", "education", "experience", "awards_and_recognitions", "memberships"]
	end

	File.readlines('/home/dharohar/work/workspace/projects/doctors_crawler/doclinks.txt').each do |line|
		f = File.open(line.strip)
		doc = Nokogiri::HTML(f)
		# link = doc.css('.doc-details-block .doc-name')
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
		# mech = Mechanize.new
		# more_link_node = doc.at_css('#moreSummary')
		# puts more_link_node
		# mech.click(more_link_node['href'])
		# next_link = Mechanize::Page::Link.new(more_link_node)
		# puts next_link
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
		CSV.open("/home/dharohar/work/workspace/projects/doctors_crawler/docData.csv", "a+", {:col_sep => "-----"}) do |csv|
  		csv << [name, profile_image_path, qualifications, specialization, description, clinic_title, clinic_name, clinic_locality, clinic_city, clinic_address, clinic_timings, clinic_fee, education, experience, awards_and_recognitions, memberships]
		end
	end
	# file.close


	# url = "https://www.practo.com/delhi"
	# doc = Nokogiri::HTML(open(url))
	# puts doc.at_css('title').text
end