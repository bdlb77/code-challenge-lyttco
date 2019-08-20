class RemoveTextFromMessages < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :text, :string
  end
end
