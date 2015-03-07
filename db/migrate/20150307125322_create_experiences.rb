class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.string :period
      t.string :detail

      t.timestamps
    end
  end
end
