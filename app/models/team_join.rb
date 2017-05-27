class TeamJoin < ApplicationRecord
  validates :team_id, :team_hash, presence: true
  before_validation :set_team_hash
  
  def set_team_hash
    self.team_hash = SecureRandom.urlsafe_base64(12)
  end
end
