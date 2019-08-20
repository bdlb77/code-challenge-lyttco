class CreateReplies < ActiveRecord::Migration[5.2]
  def change
    create_table :replies do |t|
      t.string :message
      t.string :short_name
      t.bigint :reply_to
      t.references :session, foreign_key: true

      t.timestamps
    end
  end
end
