class Task < ApplicationRecord
  belongs_to :user
  belongs_to :project
  has_many :task_assignments
  validates :project, :user, :name, presence: true
end
