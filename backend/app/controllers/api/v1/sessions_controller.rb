class Api::V1::SessionsController < ApplicationController
  before_action :set_session, only: [:replies, :show]
  def replies
    @messages = @session.messages

    bot_reply(@messages) unless @messages.blank?
    @sorted_messages = @formatted_messages&.sort { |a, b| b.created_at <=> a.created_at } || []
  end

  def show
  end

  def create
    @session = Session.new(title: "Session Number: #{Session.count + 1}")
    if @session.save
      render :show
    else
      render json: { message: 'Session could not be created' },
             status: :unprocessable_entity
    end
  end
  # def session
  #   render json: { text: 'Cookie created' }
  # end

  private

  def set_session
    @session = Session.find(params[:id])
  end

  def bot_reply(messages)
    @formatted_messages = []
    first_message = messages.first
    # set language from text
    @locale = first_message.detected_language
    salutation = Reply.find_by(short_name: "#{@locale}.salutation")
    available = Reply.find_by(short_name: "#{@locale}.available")
    if salutation.nil?
      salutation = Reply.create!(
        message: I18n.t('salutation', locale: @locale),
        short_name: "#{@locale}.salutation",
        reply_to: first_message.identifier,
        session: @session
      )
      @formatted_messages << salutation
      if available.nil?
        @formatted_messages <<
          Reply.create!(
            message: I18n.t('available_languages', locale: @locale),
            short_name: "#{@locale}.available",
            session: @session
          )
      end
    else
      @formatted_messages.push(salutation, available)
    end
    coming_soon_messages(messages[1..-1]) if messages.length > 1
    @formatted_messages
  end

  def coming_soon_messages(messages)
    messages.each do |mes|
      # skip creating new message if message already has a reply
      reply = Reply.find_by(reply_to: mes.identifier)
      if reply.nil?
        @formatted_messages <<
        Reply.create!(
          message: I18n.t('response', locale: @locale), 
          short_name: "#{@locale}.response",
          reply_to: mes.identifier,
          session: @session
        )
      else
        @formatted_messages << reply
      end
    end
  end
  @formatted_messages
end