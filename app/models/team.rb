class Team < ApplicationRecord
  belongs_to :user
  has_many :team_members
  has_many :associates, source: :user, through: :team_members
  validates :user_id, :user, :name, presence: true
  validates :name, uniqueness: {scope: :user_id, message: "You cannot own two teams with the same name."}
  
  after_save { |team| TeamMember.create({user_id: team.user_id, team_id: team.id}) }
end
