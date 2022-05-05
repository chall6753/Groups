class GroupSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :start_date, :end_date, :location, :can_modify_group

  def can_modify_group
    if current_user
      can_modify = current_user.id == self.object.user_id
    else 
      can_modify = false
    end
  end

end


