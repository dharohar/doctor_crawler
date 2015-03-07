desc "Extract links for profile pages of doctors"
task :fetch_links => :environment do 
	require 'nokogiri'
	require 'open-uri'
	
	startPage = ENV['start']
	endPage = ENV['end']

	file = File.open('C:/Users/dharohar.rathore/Documents/Projects/doctor_crawler/lists/generated_links.txt','w') 
	commonPath = 'C:/Users/dharohar.rathore/Documents/Projects/doctor_crawler/lists/list'

	for page in startPage..endPage
		filepath = commonPath + ".htm"
		if (page.to_i!=1)
			filepath = commonPath + page + ".htm"
		end
		
		f = File.open(filepath)
		doc = Nokogiri::HTML(f)
		link = doc.css('.doc-details-block .doc-name')
		link.each do |l|
			puts l['href']
			file.write(l['href'] + "\n")
		end
		f.close
	end
	file.close
	
end