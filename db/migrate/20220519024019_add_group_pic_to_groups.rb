class AddGroupPicToGroups < ActiveRecord::Migration[7.0]
  def change
    add_column :groups, :group_pic_url, :string
    add_column :groups, :cloudinary_public_id, :string
  end
end
