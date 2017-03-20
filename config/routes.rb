Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    resources :users
    get 'teams/:id/projects', to: 'teams#projects'
    resources :teams
    delete :team_members, to: 'team_members#destroy'
    resources :team_members, only: [:show, :index, :create]
    delete :projects, to: 'projects#destroy'
    resources :projects, only: [:show, :index, :create]
    resource :session, only: [:create, :destroy]
  end

  root 'root#index'
end
