const phoneNumber = "919108601385";

const messages = {
  cibil:
    "Hello Credhope Advisory, I would like to check my CIBIL score and understand my credit status.",
  plans:
    "I would like to know more about your credit improvement plans.",
  floating:
    "I would like to discuss my credit profile and improvement options."
};

function openWhatsApp(type) {
  const message = encodeURIComponent(messages[type]);
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}
