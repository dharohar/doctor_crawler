class AddLocationIdToTiming < ActiveRecord::Migration
  def change
    add_column :timings, :location_id, :integer
  end
end
