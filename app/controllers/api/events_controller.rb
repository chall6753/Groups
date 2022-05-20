class Api::EventsController < ApplicationController
  before_action :set_event, only: %i[ show update destroy ]

  # GET /events
  def index
    @events = Event.all
    
    render json: @events
  end

  def show
    event = Event.find(params[:id])
    render json: event
  end

  # GET /your_groups_events
  def show_your_groups_events
    your_groups = current_user.memberships
    your_groups_events = []
    your_groups.each do |group|
      group.events.each do |event|
        your_groups_events << event
      end
    end
    
    render json: your_groups_events
  end

  # POST /events
  def create
    user = current_user
    @event = user.created_events.new(event_params)

    if @event.save
      
      render json: @event, status: :created
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.permit(:user_id, :group_id, :name, :start_date, :end_date, :description, :location)
    end
end
