class Api::UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  

  # POST /users
  def create
    user = User.new(user_params)
    
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # POST /users/join_group
  def join_group
      group = Group.find_by(id: params[:group_id])
        
    if group &.authenticate(params[:password])
        current_user.user_groups.create(group_id: params[:group_id])
        render json: {message: 'joined group'}, status: :created
    else
        render json: {errors: "Incorrect password"}, status: :unauthorized
    end
     
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
    end
end
