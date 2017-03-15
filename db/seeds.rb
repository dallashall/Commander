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