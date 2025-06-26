import consumer from "channels/consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    console.log("🟢 Connected to MessageChannel");
  },

  received(data) {
    console.log("📩 Received data:", data);

    const messages = document.getElementById("messages");
    if (messages) {
      messages.insertAdjacentHTML("beforeend", data);
      messages.scrollTop = messages.scrollHeight;
    } else {
      console.log("🚨 Element #messages tidak ditemukan");
    }
  }
});
