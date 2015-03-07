class AddDoctorIdToEducation < ActiveRecord::Migration
  def change
    add_column :educations, :doctor_id, :integer
  end
end
