class User < ApplicationRecord
  has_many :team_members
  has_many :teams, through: :team_members
  has_many :associates, -> { distinct }, through: :teams
  has_many :owned_teams, foreign_key: :user_id, class_name: :team
  has_many :projects
  has_many :tasks
  has_many :task_assignments
  has_many :owned_tasks, through: :task_assignments, source: :task
  
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  attr_reader :password
  before_validation :set_session_token
  after_create :generate_new_user_template

  def generate_new_user_template
    if self.id > 15
      team = Team.create(name:"Example Team", description: "This is an example of a team.", user_id: self.id)
      project = Project.create(name: "Example Project", description:"This is an example of a project.", user_id: self.id, team_id: team.id)
      task1 = Task.create(user_id: self.id, project_id: project.id, name: "Create your first team!", description: "Click the 'Teams' menu, and select 'New Team'.")
      p task1
      task2 = Task.create(user_id: self.id, project_id: project.id, name: "Create your first project!", description: "Click the 'Projects' menu, and select 'New Project'.")
      task3 = Task.create(user_id: self.id, project_id: project.id, name: "Create your first task!", description: "Choose a project from the 'Projects' menu. Then click 'Create New Task'.")
      [task1, task2, task3].each {|task| TaskAssignment.create(task_id: task.id, user_id: self.id)}
    end
  end

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
