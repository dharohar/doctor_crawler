class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.string :title

      t.timestamps
    end
  end
end
