class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.string :description
      t.string :period

      t.timestamps
    end
  end
end
