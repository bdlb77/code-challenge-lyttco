if !@formatted_messages.blank?
  json.array! @formatted_messages do |message|
    json.extract! message, :message, :short_name
    json.reply_to message[:reply_to] if message[:reply_to].present?
    json.sent_at Time.now
  end
else
  json.text "Chat is Empty."
end