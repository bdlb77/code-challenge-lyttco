json.message do
  json.extract! @message, :text, :identifier
end