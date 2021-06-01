class CreateStory < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :name
      t.string :description
      t.string :user_id
    end
  end
end
