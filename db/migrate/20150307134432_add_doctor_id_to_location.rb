class AddDoctorIdToLocation < ActiveRecord::Migration
  def change
    add_column :locations, :doctor_id, :integer
  end
end
