class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def login(user)
    if user_params[:team_hash]
      team = TeamJoin.find_by(team_hash: user_params[:team_hash])
      team.destroy if TeamMember.create(user_id: user.id, team_id: team.id)
    end
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
    params.require(:user).permit(:username, :password, :team_hash)
  end

  def project_params
    data = params.require(:project).permit(:team_id, :name, :description, :id)
    data[:user_id] = current_user.id
    data
  end
end
