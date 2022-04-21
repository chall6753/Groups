class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :group, null: false, foreign_key: true
      t.string :name
      t.datetime :start_date
      t.datetime :end_date
      t.text :description
      t.string :location

      t.timestamps
    end
  end
end
