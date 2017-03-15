class CreateTeamMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :team_members do |t|
      t.integer :team_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :team_members, :user_id
    add_index :team_members, :team_id
    add_index :team_members, [:user_id, :team_id], unique:true
  end
end
