@task_assignments.each do |task_assignment|
  json.set! task_assignment.id do
    json.id task_assignment.id
    json.user_id task_assignment.user_id
    json.task_id task_assignment.task_id
  end
end
