class Group < ApplicationRecord
  belongs_to :user
  
  has_many :members, class_name: 'User'
  
end
