class Session < ApplicationRecord
  has_many :messages
  validates :title, presence: true
end
