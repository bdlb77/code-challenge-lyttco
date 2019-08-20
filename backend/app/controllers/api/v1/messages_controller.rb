class Api::V1::MessagesController < ApplicationController
  before_action :set_language, only: [:create]
  def show
    @message = Message.find params[:identifier]
  end

  def create
    @session = Session.find params[:session_id]
    @message = Message.new(message_params)
    @message.session = @session
    @locale = @wl.language_iso(@message.text)

    @message.detected_language = @locale

    if @message.save     
      render :show, status: :created
    else
      render_error
    end

  end



  private

  def set_language
    @wl = WhatLanguage.new(:english, :german, :spanish)
  end

  def render_error
    render json:  { errors: @messages.errors.full_messages },
                  status: :unprocessable_entity # 422
  end
  def message_params
    params.require(:message).permit(:text)
  end
end
