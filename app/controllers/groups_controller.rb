class GroupsController < ApplicationController
  before_action :set_group, only: %i[ show update destroy ]

  # GET /groups
  def index
    if current_user
      render json: current_user.created_groups
    else render json: {error: 'not logged in'}
    end
  end

  # GET /groups/1
  def show
    byebug
    render json: @group
  end

  # POST /groups
  def create
    @group = current_user.created_groups.new(group_params)
    
    if @group.save
      render json: @group, status: :created, location: @group
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  def update
    if @group.update(group_params)
      render json: @group
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1
  def destroy
    @group.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      @group = Group.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def group_params
      params.permit(:name, :start_date, :end_date, :location, :description)
    end
end
