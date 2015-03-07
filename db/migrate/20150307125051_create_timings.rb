class CreateTimings < ActiveRecord::Migration
  def change
    create_table :timings do |t|
      t.string :day
      t.string :session

      t.timestamps
    end
  end
end
