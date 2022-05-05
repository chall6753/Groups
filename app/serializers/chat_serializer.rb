class ChatSerializer < ActiveModel::Serializer
  attributes :id, :comment, :updated_at 
    
  
  belongs_to :user
  belongs_to :group

  
end