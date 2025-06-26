class MessagesController < ApplicationController
  def index
    @messages = Message.all
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      ActionCable.server.broadcast(
        "message_channel",
        render_to_string(partial: "message", locals: { message: @message })
      )
      redirect_to root_path  # <--- ini penting
    else
      render :index
    end
  end




  private

  def message_params
    params.require(:message).permit(:content)
  end
end
