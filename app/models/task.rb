class Task < ApplicationRecord
  belongs_to :user
  belongs_to :project
  has_many :task_assignments, dependent: :delete_all
  validates :project, :user, :name, presence: true
end
