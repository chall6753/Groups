class FallbackController < ActionController::Base

    def index
        byebug
        render file: 'public/index.html'
    end
end
