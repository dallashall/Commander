Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    resources :users
    resources :teams
    resources :team_members, only: [:show, :index, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root 'root#index'
end
