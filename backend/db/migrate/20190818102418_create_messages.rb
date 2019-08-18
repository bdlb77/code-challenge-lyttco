class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages, id: false do |t|
      t.integer :identifier
      t.string :text
      t.references :session, foreign_key: true

      t.timestamps
    end
  end
end
