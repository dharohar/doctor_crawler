class AddDoctorIdToRegistration < ActiveRecord::Migration
  def change
    add_column :registrations, :doctor_id, :integer
  end
end
