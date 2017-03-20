@projects.each do |project|
  p project
  json.set! project.id do
    json.team_id project.team_id
    json.user_id project.user_id
    json.name project.name
    json.description project.description
    json.id project.id
  end
end
