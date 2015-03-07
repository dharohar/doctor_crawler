class CreateEducations < ActiveRecord::Migration
  def change
    create_table :educations do |t|
      t.string :degree
      t.string :college
      t.string :year

      t.timestamps
    end
  end
end
