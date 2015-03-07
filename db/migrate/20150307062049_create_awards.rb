class CreateAwards < ActiveRecord::Migration
  def change
    create_table :awards do |t|
      t.string :description
      t.string :year

      t.timestamps
    end
  end
end
