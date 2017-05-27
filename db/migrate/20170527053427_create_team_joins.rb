class CreateTeamJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :team_joins do |t|
      t.integer :team_id
      t.string :team_hash

      t.timestamps
    end
  end
end
