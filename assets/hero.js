document.querySelectorAll(".send-whatsapp-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".artwork-card");
    const title = card.getAttribute("data-title");
    const desc = card.getAttribute("data-desc");
    const image = card.querySelector("img").src;

    const message = `Hello, I'm interested in "${title}"\n\n${desc}\n\nImage: ${image}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "94764855395"; // Replace with your number

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  });
});

// contsct us
document
  .getElementById("send-whatsapp-btn")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const text = `Hello, I'm ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  });

// whatsapp-contact

document.querySelector(".whatsapp-contact").addEventListener("click", () => {
  const phone = "94764855395"; // Your phone number
  const message = encodeURIComponent(
    "Hello I would like to inquire about your services."
  );
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
});
