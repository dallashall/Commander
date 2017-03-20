Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    resources :users
    get 'team_members/projects', to: 'team_members#projects'
    resources :teams
    delete :team_members, to: 'team_members#destroy'
    resources :team_members, only: [:show, :index, :create]
    delete :projects, to: 'projects#destroy'
    resources :projects, only: [:show, :index, :create]
    resource :session, only: [:create, :destroy]
  end

  root 'root#index'
end
