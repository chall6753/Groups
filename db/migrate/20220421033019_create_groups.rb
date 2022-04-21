class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.datetime :start_date
      t.datetime :end_date
      t.string :location
      t.text :description

      t.timestamps
    end
  end
end
