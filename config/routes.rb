Rails.application.routes.draw do
  resources :pictures

  namespace :api do
    get 'uploads/prepare'
    resources :chats
    resources :list_items
    resources :lists
    resources :events
    resources :groups
    resources :users
    resources :pictures
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    get '/your_groups_chats', to: 'chats#show_your_groups_chats'
    get '/your_groups_events', to: "events#show_your_groups_events"
    post "uploads/prepare", to: "uploads#prepare"
    post "/login", to: 'sessions#create'
    get "/logout", to: 'sessions#destroy'
    post "/signup", to: 'users#create'
    get '/currentUser', to: 'sessions#auth'
    post "/users/join_group", to: "users#join_group"
  end
 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
