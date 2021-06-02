class CreateScene < ActiveRecord::Migration[5.2]
  def change
    create_table :scenes do |t|
      t.string :text
      t.integer :story_id
    end
  end
end
