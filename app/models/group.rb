class Group < ApplicationRecord
  has_secure_password
  belongs_to :user
  has_many :chats, dependent: :destroy
  has_many :pictures, dependent: :destroy
  
  has_many :user_groups, dependent: :destroy
  has_many :members, through: :user_groups, source: :user
  has_many :events, dependent: :destroy

  validates :name, :location, :description, presence: true
end
