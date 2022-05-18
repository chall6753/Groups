class Api::PicturesController < ApplicationController

    #create /api/pictures
    def create
        picture = current_user.pictures.create(upload_picture_params)
       
        render json: picture, status: :created
    end

    #get /api/pictures/:group_id
    def show
        pics = Group.find(params[:id]).pictures
        render json: pics
    end
    private 

    def upload_picture_params
        params.permit(:thumbnail, :cloudinary_public_id, :group_id)
    end
end
