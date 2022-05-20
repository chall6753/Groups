class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_id, :name, :location, :description, :start_date, :end_date
  
  belongs_to :group
  has_many :chats do
    object.chats.order(updated_at: :desc)
  end
end
