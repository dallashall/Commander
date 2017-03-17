@team_members.each do |team_member|
  json.set! team_member.id do
    json.id team_member.id
    json.set! :username, team_member.user.username
    json.user_id team_member.user_id
    json.team_id team_member.team_id
  end
end