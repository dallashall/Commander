json.id @team.id
json.name @team.name
json.description @team.description
json.set! :owner do
  json.username @team.user.username
  json.id @team.user.id
end
