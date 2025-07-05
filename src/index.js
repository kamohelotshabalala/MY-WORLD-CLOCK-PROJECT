function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los-Angeles");
    losAngelesDate.innerHTML = losAngelesTime.format("dddd Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss[<small>]A[</small>]"
    ); 

    let parisElement = document.querySelector("#paris");
    let parisDate = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDate.innerHTML = parisTime.format("dddd Do MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
}
updateTime();
setInterval(updateTime, 1000);

