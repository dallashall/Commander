json.id @task.id
json.project_id @task.project_id
json.user_id @task.user_id
json.name @task.name
json.description @task.description
if @task.statuses.empty?
  json.statuses {}
else
  json.set! :statuses do
    @task.statuses.each do |status|
      json.set! status, true
    end
  end
end
