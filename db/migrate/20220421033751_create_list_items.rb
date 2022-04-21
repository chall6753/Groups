class CreateListItems < ActiveRecord::Migration[7.0]
  def change
    create_table :list_items do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :list, null: false, foreign_key: true
      t.string :name
      t.text :note
      t.boolean :completed

      t.timestamps
    end
  end
end
