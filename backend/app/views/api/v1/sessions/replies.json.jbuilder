json.array! @messages do |message|
  json.extract! message, :identifier, :text, :created_at, :updated_at
end