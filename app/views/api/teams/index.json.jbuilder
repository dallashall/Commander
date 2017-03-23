json.teams do
  @teams.each do |team|
    json.set! team.id do
      json.id team.id
      json.name team.name
      json.description team.description
      json.set! :owner do
        json.username team.user.username
        json.id team.user_id
      end
    end
  end
end

json.my_teams do
  @my_teams.each do |team|
    json.set! team.id do
      json.id team.id
      json.name team.name
      json.description team.description
      json.set! :owner do
        json.username team.user.username
        json.id team.user_id
      end
    end
  end
end