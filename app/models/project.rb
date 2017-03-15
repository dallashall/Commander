class Project < ApplicationRecord
  belongs_to :team
  belongs_to :user
  validates :user_id, :user, :team_id, :team, :name, presence: true
  validates :name, uniqueness: { 
    scope: :team_id,
    message: "You cannot have multiple projects with the same name under the same team."
  }
end
