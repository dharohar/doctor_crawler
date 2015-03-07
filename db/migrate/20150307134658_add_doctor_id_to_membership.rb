class AddDoctorIdToMembership < ActiveRecord::Migration
  def change
    add_column :memberships, :doctor_id, :integer
  end
end
