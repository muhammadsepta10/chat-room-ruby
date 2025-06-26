import consumer from "channels/consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    console.log("🟢 Connected to MessageChannel");
  },

  received(data) {
    console.log("📩 Received data:", data);
    const messages = document.getElementById("messages");
    messages.insertAdjacentHTML("beforeend", data);

    // ⬇️ Scroll otomatis ke bawah
    messages.scrollTo({
      top: messages.scrollHeight,
      behavior: "smooth"
    });

  }
});
