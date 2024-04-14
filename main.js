const URL = "https://striveschool-api.herokuapp.com/api/product/";

window.addEventListener("DOMContentLoaded", () => {
  fetch(URL, {
    method: "GET",

    headers: {
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
    .then((products) => {
      const row = document.getElementById("products-row");
      console.log(row);

      console.log(products);

      products.forEach((product) => {
        const col = document.createElement("div");
        col.classList.add("col");
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
                <img src=${product.imageUrl} class="card-img-top" alt="...">
                <div class="card-body position-relative border border-2 border-black cardHeight">
                    <p class="card-text">${product.name}</p>
                    <span class="badge text-bg-success "> ${product.price}€ </span>
                    <a class="ancorStyle " href="./details.html?appId=${product._id}">VISUALIZZA DETTAGLI</a>
                </div>`;

        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
