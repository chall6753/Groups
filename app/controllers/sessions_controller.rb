class SessionsController < ApplicationController

    #POST/login
    def create
        byebug
        user = User.find_by(username: params[:username])
        
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: "Incorrect username password combo"}, status: :unauthorized
        end

    end
end
