class AddDetectedLanguageToMessage < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :detected_language, :string
  end
end
