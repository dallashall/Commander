class Api::UsersController < ApplicationController
  def create
    @user = User.new(username: user_params[:username], password: user_params[:password])
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
    api_key = ENV['mailgun_api_key']
    domain = ENV['domain']
    api_url = "https://api:#{api_key}@api.mailgun.net/v2/#{domain}"
    email = new_member_params[:email]
    team_join = TeamJoin.create(team_id: new_member_params[:team_id])
    p "==================="
    p team_join.team_id
    p email
    p "==================="
    res = RestClient.post api_url+"/messages",
      :from => email,
      :to => email,
      :subject => "You've been invited to join a team on TaskCommander",
      :html => <<-HTML
        Log in or sign up to <a href="https://taskcommander.herokuapp.com/#/login/#{team_join.team_hash}">join the team!</a>
      HTML

    p res.body
    render json: ["Mission accomplished"]
  end

  def delete
    @user = current_user
    if @user
      @user.destroy
    end
  end

  def new_member_params
    params.require(:new_team_member).permit(:email, :team_id)
  end
end
