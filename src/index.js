function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    if(losAngelesElement){ 
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = losAngelesTime.format("dddd Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    ); 
    }
    let parisElement = document.querySelector("#paris");
    if(parisElement){ 
    let parisDate = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDate.innerHTML = parisTime.format("dddd Do MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );}
}

updateTime();
setInterval(updateTime, 1000);

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if(cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/",)[1] ;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
           <div class="city" >
            <div> 
           <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
             </div>
            <div class="time">${cityTime.format(
              "hh:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
          </div> 
          <a href="/">⬅️Back</a>`;
}
 
let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", changeCity);