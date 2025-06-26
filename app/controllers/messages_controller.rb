class MessagesController < ApplicationController
  def index
    @messages = Message.all
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      rendered = render_to_string(partial: "message", locals: { message: @message })
      ActionCable.server.broadcast("message_channel", rendered)
      render plain: "OK"
    else
      render plain: "Gagal", status: :unprocessable_entity
    end
  end


  private

  def message_params
    params.require(:message).permit(:content)
  end
end
