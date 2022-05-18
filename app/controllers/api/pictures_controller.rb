class Api::PicturesController < ApplicationController

    #create /api/pictures
    def create
        picture = current_user.pictures.create(upload_picture_params)
        byebug
        render json: picture, status: :created
    end

    private 

    def upload_picture_params
        params.permit(:thumbnail, :cloudinary_public_id, :group_id)
    end
end
