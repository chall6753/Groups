class AddGroupIdToPictures < ActiveRecord::Migration[7.0]
  def change
    add_column :pictures, :group_id, :string
    add_column :pictures, :user_id, :string
  end
end
