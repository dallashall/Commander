class AddColumnTo < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :status, :integer, default: 1
  end
end
