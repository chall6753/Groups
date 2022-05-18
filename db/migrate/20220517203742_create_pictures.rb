class CreatePictures < ActiveRecord::Migration[7.0]
  def change
    create_table :pictures do |t|
      t.string :thumbnail
      t.string :cloudinary_public_id

      t.timestamps
    end
  end
end
