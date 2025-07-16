function updateTime() {
  let nairobiElement = document.querySelector("#nairobi");
  let nairobiDateElement = nairobiElement.querySelector(".date");
  let nairobiTimeElement = nairobiElement.querySelector(".time");
  let nairobiTime = moment().tz("Africa/Nairobi");

  nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do,YYYY");
  nairobiTimeElement.innerHTML = `${nairobiTime.format(
    "h:mm:ss:SSS"
  )} <small>${nairobiTime.format("A")}</small>`;

  let dakarElement = document.querySelector("#dakar");
  let dakarDateElement = dakarElement.querySelector(".date");
  let dakarTimeElement = dakarElement.querySelector(".time");
  let dakarTime = moment().tz("Africa/Dakar");

  dakarDateElement.innerHTML = dakarTime.format("MMMM Do,YYYY");
  dakarTimeElement.innerHTML = `${dakarTime.format(
    "h:mm:ss:SSS"
  )} <small>${dakarTime.format("A")}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone === moment().tz.guess();
  }

  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do,YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss:SSS"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
