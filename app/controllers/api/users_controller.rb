class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params);
    if @user.save
      login(@user)
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def task_assignments
    @tasks = current_user.owned_tasks
    render '/api/tasks/index.json.jbuilder'
  end

  def new_member
    Api::UserMailer.add_member_to_team(new_member_params[:email], new_member_params[:team])
    render json: ["Mission accomplished"]
  end

  def delete
    @user = current_user
    if @user
      @user.destroy
    end
  end

  def new_member_params
    params.require(:new_team_member).permit(:email, :team)
  end
end
