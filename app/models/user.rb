class User < ApplicationRecord
  has_many :team_members
  has_many :teams, through: :team_members
  has_many :associates, -> { distinct }, through: :teams
  has_many :owned_teams, foreign_key: :user_id, class_name: :team
  has_many :projects
  
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  attr_reader :password
  before_validation :set_session_token

  def gen_token
    SecureRandom.urlsafe_base64
  end

  def set_session_token
    self.session_token ||= gen_token
  end

  def reset_session_token!
    self.session_token = gen_token
    self.save
  end

  def password=(password)
    @password = password;
    self.password_digest = BCrypt::Password.create(password);
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
