class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(username: user_params[:username])
    if (@user && @user.is_password?(user_params[:password]))
      login(@user)
    else
      render json: ["There is an error in your credentials."], status: 422
    end
  end

  def destroy
    logout
  end
end
