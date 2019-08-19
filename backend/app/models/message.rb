class Message < ApplicationRecord
  self.primary_key = :identifier
  belongs_to :session
  
  before_validation :set_identifier
  
  validates :text, presence: true
  validates :identifier, presence: true
  validates :identifier, uniqueness: true
  def set_identifier
    self.identifier = "#{Time.now.to_i}#{rand(100..999)}".to_i if identifier.nil?
  end
  
end
