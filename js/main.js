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
