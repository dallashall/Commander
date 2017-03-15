class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.integer :user_id, null: false
      t.integer :team_id, null: false
      t.string :name, null: false
      t.text :description

      t.timestamps
    end
    add_index :projects, :user_id
    add_index :projects, :name
    add_index :projects, [:user_id, :name], unique: true
  end
end
