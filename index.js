// const API_TOKEN_URL =
//   "https://chubbnetlogin.chubblatinamerica.com/SecurityProxy/api/v1.0/oauth2/token";

// async function postData(url = "", data = {}) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       Accept: "*/*",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   });
//   return response;
// }

// const aa = postData(API_TOKEN_URL, {
//   client_id: "APIPROFESORES",
//   client_secret: "U5QH$Q5C",
//   grant_type: "client_credential",
//   scope: "SEMI"
// }).then((response) => {
//   console.log(response);
//   if (response.ok) {
//     console.log(response);
//   } else {
//     console.log("Respuesta de red OK pero respuesta HTTP no OK");
//   }
// });

// console.log(aa);

//mamadas del Isra//

//obtener value de cada campo//
const card = document.querySelector(".card_Container");
const card2 = document.querySelector(".card_Loading");
const intentar = document.getElementById("incompleto");
const nombre = document.getElementById("name");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone").value;
const cp = document.getElementById("cp").value;
const estado = document.getElementById("Estado").value;
const municipio = document.getElementById("Municipio").value;
const car_typer = document.getElementById("cars_type").value;
const marca_auto = document.getElementById("Marca_auto").value;
const submarca = document.getElementById("Submarca").value;
const modelo = document.getElementById("modelo").value;
const vehiculos = document.getElementById("Catalogo_coches").value;
const start_date = document.getElementById("start").value;
const end_date = document.getElementById("end").value;
const moneda = document.getElementById("MXN").value;

function click1() {
  console.log(nombre.value);
  card.style.display = "none";
  card2.style.display = "block";

  setTimeout(() => {
    intentar.style.display = "block";
  }, 4000);
}
