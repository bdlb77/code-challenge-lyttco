class Reply < ApplicationRecord
  belongs_to :session

  validates :message, presence: true
  validates :short_name, presence: true

end
