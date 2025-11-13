// main.js – SAKG Landing Page

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("request-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      // هنا مستقبلاً تربط النموذج بـ Backend أو خدمة فورم
      console.log("Form submitted");
      // إذا ما عندك Backend حاليًا، خليه يشتغل طبيعي بدون منع الإرسال:
      // e.preventDefault();
    });
  }
});

// فتح الـ Modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// إغلاق الـ Modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// إغلاق الـ Modal عند الضغط على الخلفية السوداء
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    const modal = event.target;
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// إغلاق الـ Modal بالضغط على Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
    document.body.style.overflow = "auto";
  }
});
