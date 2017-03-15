class TeamMember < ApplicationRecord
  belongs_to :user
  belongs_to :team
  validates :user_id, :user, :team_id, :team, presence: true
  validates :user_id, uniqueness: {scope: :team_id}
end
