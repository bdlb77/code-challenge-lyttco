class Message < ApplicationRecord
  self.primary_key = :identifier
  belongs_to :session

  validates :text, presence: true
  validates :identifier, presence: true
  validates :identifier, uniqueness: true
end
