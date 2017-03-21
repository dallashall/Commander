class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end
  
  def index
    @tasks = Task.where(project_id: task_params[:project_id])
  end
  
  def show
    @task = selected_task
  end
  
  def update
    @task = selected_task
    if @task.update_attributes(task_params)
      render :show
    else
      render json: @task.errors.full_messages
    end
  end
  
  def destroy
    @task = selected_task
    if @task.destroy
      render :show
    else
      render json: ["Failed to delete"]
    end
  end

  def selected_task
    Task.find_by(id: params[:id])
  end

  def task_params
    data = params.require(:task).permit(:project_id, :name, :description, statuses: [])
    data[:user_id] = current_user.id
    data
  end
  
end
