json.message do
  json.extract! @message, :text, :identifier, :detected_language
  json.time_stamp @message.created_at
end