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

  API_KEY = ENV['mailgun_api_key']
  DOMAIN = ENV['domain']
  API_URL = "https://api:#{API_KEY}@api.mailgun.net/v2/#{DOMAIN}"
  email = new_member_params[:email]
  
  def new_member
    RestClient.post API_URL+"/messages",
      :from => email,
      :to => email,
      :subject => "This is subject",
      :text => "Text body",
      :html => "<b>HTML</b> version of the body!"
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
