class User < ApplicationRecord
  has_secure_password
  has_many :user_groups 
  has_many :memberships, through: :user_groups, source: 'Group'
  has_many :created_groups, class_name: 'Group'
end
