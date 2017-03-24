@tasks.each do |task|
  json.set! task.id do
    json.id task.id
    json.project_id task.project_id
    json.user_id task.user_id
    json.name task.name
    json.description task.description
    json.status task.status
    json.team_id task.project.team.id
  end
end
