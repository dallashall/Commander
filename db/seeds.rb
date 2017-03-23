# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo_user = User.create({username: "Demo User", password: "12345678"})

names = %w(Bob Sally Jane John Jon Dylan Dillon May Gene Samson Carl Brad Drew Kat)
names.each do |name, idx|
  User.create({username: name, password: "superSecretPassword#{idx}"})
end

teams = %w(A/V Planners Catering TV Media)

Team.create({name: "A-Team", user_id: 8});

TeamMember.create({user_id: User.find_by(username: "Demo User").id, team_id: Team.find_by(name: "A-Team").id})

teams.each do |team, idx|
  new_team = Team.new(name: team, user_id: User.find_by(username: "Demo User").id)
  new_team.save
  names.sample(5).each { |name| TeamMember.create(user_id: User.find_by(username: name).id, team_id: new_team.id) }
end

Project.create(user_id: 1, team_id: 2, name: "Upgrade A/V Carts", description: "Clients are demanding up-to-date tech in our spaces.")
Project.create(user_id: 1, team_id: 2, name: "Test Project 2", description: "Testing the things")
Project.create(user_id: 1, team_id: 2, name: "Test Project 3", description: "Testing the things")

Task.create(user_id: 2, project_id: 1, name: "Purchase Screens", status: 1, description: '70\" UHD TVs\nFind the lowest price, and purchase 10 screens')
Task.create(user_id: 2, project_id: 1, name: "Purchase Adapters", status: 2, description: 'Research the 5 most popular adapters for A/V carts, and purchase a set for each cart (10)')

TaskAssignment.create(user_id: 1, task_id: 1)
TaskAssignment.create(user_id: 3, task_id: 2)
