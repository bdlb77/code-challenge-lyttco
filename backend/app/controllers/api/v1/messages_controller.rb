class Api::V1::MessagesController < ApplicationController
  before_action :set_language, only: [:create]
  def show
    @message = Message.find(params[:identifier])
  end

  def create
    @message = Message.new
    @message_text = params[:text]
    @session = Session.find(params[:session_id])
    @message.session = @session
    @locale = @what_language.language_iso(@message_text)
    @message.detected_language = @locale
    if %i[en de es].include?(@locale) && @message.save
      render :show, status: :created
    else
      render_error
    end
  end



  private

  def set_language
    @what_language = WhatLanguage.new(:english, :german, :spanish, :french, :romanian, :hebrew, :russian, :italian, :portugeuse)
  end

  def render_error
    render json: { errors: 'Unfortunately We don\'t have support for your language yet.' },
                  status: :unprocessable_entity # 422
  end

end
