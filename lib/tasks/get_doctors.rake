desc "Extract links for profile pages of doctors"
task :fetch_links => :environment do 
	require 'nokogiri'
	require 'open-uri'
	# rake fetch_links start=1 end=3 city=delhi
	startPage = ENV['start']
	endPage = ENV['end']
	city = ENV['city']

	file = File.open('/home/dharohar/work/workspace/projects/doctor_crawler/lists/generated_links.txt','w') 
	# commonPath = 'C:/Users/dharohar.rathore/Documents/Projects/doctor_crawler/lists/list'
	commonPath = '/home/dharohar/work/workspace/projects/doctor_crawler/lists/' + city + '/list'

	for page in startPage..endPage
		filepath = commonPath + ".html"
		if (page.to_i!=1)
			filepath = commonPath + page + ".html"
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