class Event < ApplicationRecord
  belongs_to :user
  belongs_to :group

  has_many :chats, dependent: :destroy
end
