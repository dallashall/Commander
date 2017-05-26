class Api::UserMailer < ApplicationMailer

  def add_member_to_team(email, team)
    @email = email
    @team = team
    mg_client = Mailgun::Client.new ENV['mailgun_api_key']
    message_params = {from: ENV['email'],
                      to: @email,
                      subject: 'Sample Mail using Mailgun API',
                      text: "I'd like for you to join my team, #{@team.name}, on TaskCommander."}
    mg_client.send_message ENV['domain'], message_params
  end
end
