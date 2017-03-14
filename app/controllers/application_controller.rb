class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    render "api/users/show"
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    render json: ["Logout successful!"]
  end

  def current_user
    @current_user = User.find_by(session_token: session[:session_token]);
  end

  def logged_in?
    !!current_user
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
