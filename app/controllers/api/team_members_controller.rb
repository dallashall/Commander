class Api::TeamMembersController < ApplicationController
  # before_action :render_error_if_not_owner, except: [:index, :show]

  def index
    @team_members = TeamMember.where(team_id: team_id_params)
  end

  def show
    @team_member = selected_team_member
  end

  def destroy
    @team_member = TeamMember.find_by(team_member_params)
    if @team_member
      @team_member.destroy
      render :show
    else
      render json: ["Failed to remove user."]
    end
  end

  def create
    @team_member = TeamMember.new(team_member_params)
    if @team_member.save
      render :show
    else
      render json: @team_member.errors.full_messages, status: 422
    end
  end

  private

  def selected_team_member
    TeamMember.find_by(id: params[:id])
  end

  def team_member_params
    params.require(:teamMember).permit(:user_id, :team_id, :id)
  end

  def team_id_params
    params.require(:teamId)
  end

  def is_team_owner?
    !!current_user.owned_teams.find(team_member_params.team_id)
  end

  def render_error_not_owner
    render json: ["You cannot change memberships of teams you do not own."]
  end
end
