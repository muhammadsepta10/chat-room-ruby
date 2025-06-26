import "@hotwired/turbo-rails"
import "controllers"
import "channels"

document.addEventListener("turbo:load", () => {
  console.log("🚀 turbo:load aktif");

  const textarea = document.querySelector("textarea");
  const form = document.querySelector("form");

  if (textarea && form) {
    console.log("✅ textarea dan form ditemukan");
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.requestSubmit();
      }
    });
  }
});
