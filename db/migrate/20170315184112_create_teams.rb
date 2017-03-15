class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description

      t.timestamps
    end
    add_index :teams, :user_id
    add_index :teams, :name
    add_index :teams, [:user_id, :name], unique: true
  end
end
