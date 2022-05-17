Rails.application.routes.draw do
  resources :chats
  resources :list_items
  resources :lists
  resources :events
  resources :groups
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  
  post "/login", to: 'sessions#create'
  get "logout", to: 'sessions#destroy'
  post "/signup", to: 'users#create'
  get '/currentUser', to: 'sessions#auth'
  post "/users/join_group", to: "users#join_group"

 

  # Defines the root path route ("/")
  # root "articles#index"
end
