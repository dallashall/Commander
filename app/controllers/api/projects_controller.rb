class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors, status: 422
    end
  end
  
  def update
    @project = current_project
    if @project && @project.update_attributes(project_params)
      render :show
    else
      render json: @project.errors ? @project.errors.full_messages : ["Project not found."], status: 402
    end
  end
  
  def show
    @project = current_project
  end
  
  def destroy
    @project = current_project
    if @project
      @project.destroy
    end
    render :show
  end

  def current_project
    Project.find_by(id: params[:id])
  end
end
