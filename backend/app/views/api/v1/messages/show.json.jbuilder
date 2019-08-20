json.message do
  json.extract! @message, :identifier, :detected_language
  json.time_stamp @message.created_at
end