class AddDoctorIdToSpecialization < ActiveRecord::Migration
  def change
    add_column :specializations, :doctor_id, :integer
  end
end
