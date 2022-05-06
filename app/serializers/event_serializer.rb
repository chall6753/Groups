class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_id, :name, :location, :start_date, :end_date

  has_many :chats, serializer: ChatSerializer
end
