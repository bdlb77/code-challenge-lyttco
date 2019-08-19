class Api::V1::MessagesController < ApplicationController

  def show
    @message = Message.find params[:identifier]
  end

  def create
    @session = Session.find params[:session_id]
    @message = Message.new(message_params)
    @message.session = @session

    if @message.save     
      render :show, status: :created
    else
      render_error
    end

  end



  private


  def render_error
    render json:  { errors: @messages.errors.full_messages },
                  status: :unprocessable_entity # 422
  end
  def message_params
    params.require(:message).permit(:text)
  end
end
