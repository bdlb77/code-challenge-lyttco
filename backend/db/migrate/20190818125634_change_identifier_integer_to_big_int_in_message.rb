class ChangeIdentifierIntegerToBigIntInMessage < ActiveRecord::Migration[5.2]
  def change
    change_column :messages, :identifier, :bigint
  end
end
