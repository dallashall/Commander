class Api::TaskAssignmentsController < ApplicationController
  def create
    @task_assignment = TaskAssignment.new(task_assignment_params)
    if @task_assignment.save
      render :show
    else
      render json: @task_assignment.errors.full_messages, status: 422
    end
  end
  
  def index
    @task_assignments = TaskAssignment.where(task_id: task_assignment_params[:task_id])
  end
  
  def show
    @task_assignment = selected_task_assignment
  end
  
  def update
    @task_assignment = selected_task_assignment
    if @task_assignment.update_attributes(task_assignment_params)
      render :show
    else
      render json: @task_assignment.errors.full_messages, status: 422
    end
  end

  def destroy
    @task_assignment = selected_task_assignment
    if @task_assignment
      @task_assignment.destroy
      render :show
    else
      render json: ["Failed to delete"], status: 422
    end
  end

  def selected_task_assignment
    TaskAssignment.find_by(id: params[:id])
  end
  
  def task_assignment_params
    params.require(:task_assignment).permit(:user_id, :task_id)
  end
end
