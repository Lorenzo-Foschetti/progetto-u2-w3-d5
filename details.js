const p = new URLSearchParams(window.location.search);
const id = p.get("appId");
const URL = "https://striveschool-api.herokuapp.com/api/product/" + id;
console.log(id);

window.addEventListener("DOMContentLoaded", () => {
  fetch(URL, {
    method: "GET",

    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZThmZTdmMzA0NjAwMWFlNTlmNjQiLCJpYXQiOjE3MTI5MDg1NDIsImV4cCI6MTcxNDExODE0Mn0.HTyHbwm_i3j_HHEEo7RLX_c4Ig9ZFkUweIyzetZx1jE",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Error ");
      }
    })
    .then((products) => {
      const container = document.getElementById("container");

      console.log(products);
      const div = document.createElement("div");

      div.innerHTML = `  
    <img src=${products.imageUrl}  style: height = "200px" alt="...">
    <div> 
    <h3>${products.name}</h3> 
    <p>${products.description}</p>
    <span class="badge text-bg-success"> €${products.price} </span>
    <a href="./details.html?appId=${products._id}"</a>
 
  
    </div> `;

      container.appendChild(div);
    })
    .catch((err) => {
      console.log(err);
    });
});
