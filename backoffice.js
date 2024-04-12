const URL = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};

const handleSubmit = (event) => {
  console.log("EVENT", event);
  event.preventDefault();

  const newProduct = {
    name: document.getElementById("name").value,
    brand: document.getElementById("brand").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price").value,
    imageUrl: document.getElementById("imageUrl").value,
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",

      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZThmZTdmMzA0NjAwMWFlNTlmNjQiLCJpYXQiOjE3MTI5MDg1NDIsImV4cCI6MTcxNDExODE0Mn0.HTyHbwm_i3j_HHEEo7RLX_c4Ig9ZFkUweIyzetZx1jE",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella fetch");
      }
    })
    .then((createdProduct) => {
      alert(
        "Hai creato il prodotto con id: " +
          createdProduct._id +
          "  con successo!"
      );

      event.target.reset();
    })
    .catch((err) => console.log(err));
};

const resetButton = document.getElementById("resetButton");
const form = document.getElementById("form");
resetButton.addEventListener("click", function () {
  form.reset();
});
