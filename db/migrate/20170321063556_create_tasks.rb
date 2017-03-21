class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.integer :project_id, null: false
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description
      t.integer :statuses

      t.timestamps
    end
    add_index :tasks, :user_id
    add_index :tasks, :project_id
    add_index :tasks, :name
  end
end
