let container = document.getElementById("container")
let dataAr = document.getElementById("date-Ar")
let dataEn = document.getElementById("date-En")
let today = document.getElementById("day")
let timeSalah = document.getElementById("time-salah")
let btnDataAr = document.getElementById("btn-dataAr")
let btnDataEn = document.getElementById("btn-dataEn")



fetch("http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2")

.then(Response =>Response.json())
.then(json => {
    dataEn.innerHTML = `${json.data[0].date.gregorian.date}`

    dataAr.innerHTML = `${json.data[0].date.gregorian.date}`

})

