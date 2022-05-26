class ChatSerializer < ActiveModel::Serializer
  attributes :id, :comment, :updated_at, :user 
    
  belongs_to :user
  belongs_to :group
  belongs_to :event

end
