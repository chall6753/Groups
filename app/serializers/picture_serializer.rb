class PictureSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail, :cloudinary_public_id, :group_id, :user_id

 
end
