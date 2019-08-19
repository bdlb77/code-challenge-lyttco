class Session < ApplicationRecord
  has_many :messages
  has_many :replies
  validates :title, presence: true
end
