class Api::TeamsController < ApplicationController
  before_action :deny_if_not_owner, except: [:create, :index, :show]

  def create
    @team = Team.new(team_params)
    if @team.save
      render :show
    else
      render json: @team.errors.full_messages
    end
  end

  def update
    @team = selected_team
    if @team && @team.update_attributes(team_params)
      render :show
    else
      render json: @team.errors.full_messages
    end
  end
  
  def destroy
    @team = selected_team
    if @team
      @team.destroy
      render json: ["Team deleted."]
    else
      render json: ["Team not found."], status: 422
    end
  end

  def show
    @team = selected_team
  end

  def index
    @teams = current_user.teams
  end

  private

  def selected_team
    @team = Team.find_by(id: params[:id])
  end

  def team_params
    data = params.require(:team).permit(:name, :description, :user_id)
    data[:user_id] = current_user.id
    data
  end

  # def is_team_member?
  #   !!TeamMember.find_by(user_id: current_user.id, team_id: params[:id])
  # end

  def deny_if_not_owner
    render(json: ["Cannot modify teams owned by other users."], status: 402) if current_user.id != selected_team.user_id
  end
end
