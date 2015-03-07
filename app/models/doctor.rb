class Doctor < ActiveRecord::Base
	has_many :services
	has_many :practice_locations
	has_many :educations
	has_many :specializations
	has_many :experiences
	has_many :awards
	has_many :memberships
	has_many :registrations
end
