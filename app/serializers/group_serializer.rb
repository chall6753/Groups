class GroupSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :description, :start_date, :end_date, :location, :can_modify_group, :is_member


  has_many :members
  def can_modify_group
    if current_user
      can_modify = current_user.id == self.object.user_id
    else 
      can_modify = false
    end
  end

  def is_member
    if object.members.find_by(id: current_user.id)
      
      isMember = true
    else
      isMember = false
    end
  end
end


