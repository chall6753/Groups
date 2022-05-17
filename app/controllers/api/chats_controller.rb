class Api::ChatsController < ApplicationController
  before_action :set_chat, only: %i[ show update destroy ]

  # GET /chats
  def index
    @chats = Chat.all.order(updated_at: :desc)
    render json: @chats
  end

  # GET /chats/1
  def show
    render json: @chat
  end

  # POST /chats
  def create
    
    @chat = current_user.chats.new(chat_params)
    
    if @chat.save
      render json: @chat, status: :created
    else
      render json: @chat.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chats/1
  def update
    if @chat.update(chat_params)
      render json: @chat
    else
      render json: @chat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chats/1
  def destroy
    @chat.destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chat
      @chat = Chat.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def chat_params
      
      params.permit(:user_id, :group_id, :event_id, :comment)
    end
end
