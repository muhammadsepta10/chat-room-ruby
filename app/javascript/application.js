import "@hotwired/turbo-rails"
import "controllers"
import "channels"

document.addEventListener("turbo:load", () => {
  console.log("🚀 turbo:load aktif");

  const form = document.getElementById("message-form");
  const textarea = form?.querySelector("textarea");
  const messages = document.getElementById("messages");

  if (messages) {
    messages.scrollTo({
        top: messages.scrollHeight,
        behavior: "smooth"
    });
  }

  if (form && textarea) {

    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.requestSubmit();
      }
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const content = textarea.value;

      if (!content.trim()) return;

      const formData = new FormData(form);

      const response = await fetch("/messages", {
        method: "POST",
        headers: {
          "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content,
        },
        body: formData,
      });

      if (response.ok) {
        textarea.value = "";
      } else {
        alert("Gagal mengirim pesan");
      }
    });
  }
});


