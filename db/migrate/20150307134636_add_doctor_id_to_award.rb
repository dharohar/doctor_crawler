class AddDoctorIdToAward < ActiveRecord::Migration
  def change
    add_column :awards, :doctor_id, :integer
  end
end
