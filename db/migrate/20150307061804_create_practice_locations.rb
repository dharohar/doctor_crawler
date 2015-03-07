class CreatePracticeLocations < ActiveRecord::Migration
  def change
    create_table :practice_locations do |t|
      t.string :name
      t.string :address
      t.string :fee

      t.timestamps
    end
  end
end
