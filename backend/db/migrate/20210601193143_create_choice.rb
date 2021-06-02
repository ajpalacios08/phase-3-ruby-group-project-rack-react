class CreateChoice < ActiveRecord::Migration[5.2]
  def change
    create_table :choices do |t|
      t.string :text
      t.integer :to_scene_id
      t.integer :from_scene_id
    end
  end
end
