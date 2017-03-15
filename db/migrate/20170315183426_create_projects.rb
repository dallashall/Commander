class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.integer :team_id
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end