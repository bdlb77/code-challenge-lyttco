json.array! @sorted_messages do |message|
  json.extract! message, :message, :short_name
  json.reply_to message[:reply_to] if message[:reply_to].present?
  json.sent_at  message.created_at
end
