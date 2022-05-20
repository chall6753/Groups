class User < ApplicationRecord
  has_secure_password
  has_many :created_events, class_name: 'Event'
  has_many :user_groups 
  has_many :memberships, through: :user_groups, source: :group
  has_many :created_groups, class_name: 'Group'
  has_many :chats
  has_many :pictures

  validates :username, presence: true

end
