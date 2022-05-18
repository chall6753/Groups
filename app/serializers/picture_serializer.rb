class PictureSerializer < ActiveModel::Serializer
  attributes :id, :thumbnail, :cloudinary_public_id
end
