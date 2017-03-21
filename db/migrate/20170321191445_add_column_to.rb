class AddColumnTo < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :statuses, :integer, array: true, default: []
  end
end
