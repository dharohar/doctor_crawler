class AddDoctorIdToExperience < ActiveRecord::Migration
  def change
    add_column :experiences, :doctor_id, :integer
  end
end
