class CreateTimings < ActiveRecord::Migration
  def change
    create_table :timings do |t|
      t.string :start_day
      t.string :end_day
      t.string :start_time
      t.string :end_time

      t.timestamps
    end
  end
end
