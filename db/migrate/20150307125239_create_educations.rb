class CreateEducations < ActiveRecord::Migration
  def change
    create_table :educations do |t|
      t.string :degree
      t.string :college

      t.timestamps
    end
  end
end
