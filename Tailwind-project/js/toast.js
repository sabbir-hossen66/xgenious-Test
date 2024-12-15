function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");

  toast.className = `flex items-center px-4 py-3 rounded shadow-lg text-white ${type === "success" ? "bg-green-500" : "bg-red-500"}`;
  toast.innerHTML = `
      <span class="mr-3">
        ${type === "success" ? "✔️" : "❌"}
      </span>
      <span>${message}</span>
    `;

  toastContainer.appendChild(toast);

  // Auto-remove toast after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission
  showToast("Message sent successfully!", "success");
  this.reset(); // Reset form fields
});