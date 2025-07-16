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

updateTime();
setInterval(updateTime, 1);
