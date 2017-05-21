class NewTeamMemberMailer < ApplicationMailer
  def add_member_to_team(email, team)
    @email = email
    @team = team
    mail(to: @email, subject: "I'd like for you to join my team, #{@team.name}, on TaskCommander.")
  end
end
