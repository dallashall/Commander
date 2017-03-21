class TaskAssignment < ApplicationRecord
  belongs_to :user
  belongs_to :task
  validates :user, :task, presence: true
end
