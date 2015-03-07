class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :profile_image_path
      t.string :description

      t.timestamps
    end
  end
end
