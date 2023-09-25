Rails.application.routes.draw do
  resources :urls
  resources :users # default BREAD

  get "/login" => "sessions#new"
  post "/login" => "sessions#create"

  get "/logout" => "sessions#destroy"

  get "/u/:short_url" => "urls#visit"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "urls#index"
end
