Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    resources :users
    resources :teams
    delete :team_members, to: 'team_members#destroy'
    resources :team_members, only: [:show, :index, :create]
    resource :session, only: [:create, :destroy]
  end

  root 'root#index'
end
