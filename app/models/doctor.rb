class Doctor < ActiveRecord::Base
	has_many :locations
	has_many :services
	has_many :specializations
	has_many :educations
	has_many :experiences
	has_many :awards
	has_many :memberships
	has_many :registrations
end
