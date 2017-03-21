class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.integer :project_id
      t.integer :user_id
      t.string :name
      t.text :description
      t.integer :statuses

      t.timestamps
    end
  end
end
