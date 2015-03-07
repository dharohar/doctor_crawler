class AddDoctorIdToService < ActiveRecord::Migration
  def change
    add_column :services, :doctor_id, :integer
  end
end
