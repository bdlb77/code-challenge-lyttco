class Api::V1::SessionsController < ApplicationController
  def replies
    @session = Session.find params[:id]
    @messages = @session.messages
    bot_reply(@messages)
  end

  private

  def bot_reply(messages)
    binding.pry
  end
end
