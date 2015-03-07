class CreateRegistrations < ActiveRecord::Migration
  def change
    create_table :registrations do |t|
      t.string :title
      t.string :year

      t.timestamps
    end
  end
end
