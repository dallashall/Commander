Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    get 'users/task_assignments', to: 'users#task_assignments'
    resources :users

    get 'teams/:id/projects', to: 'teams#projects'
    resources :teams

    delete :team_members, to: 'team_members#destroy'
    resources :team_members, only: [:show, :index, :create]

    delete :projects, to: 'projects#destroy'
    get 'projects/:id/tasks', to: 'projects#tasks'
    resources :projects, only: [:show, :index, :create, :update, :destroy]

    resource :session, only: [:create, :destroy]
    
    resources :tasks
    resources :task_assignments
  end

  root 'root#index'
end
