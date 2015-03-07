class Location < ActiveRecord::Base
	has_many :timings
	belongs_to :doctor
end
