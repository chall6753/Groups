class SessionsController < ApplicationController

    #POST/login
    def create
        user = User.find_by(username: params[:username])
        
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: "Incorrect username password combo"}, status: :unauthorized
        end
    end

    def auth
        user = current_user
        if user
            render json: user
        else
            render json: {error: 'no on logged in'}, status: :not_found
        end
    end

    def destroy
        session.delete :user_id
    end


end
