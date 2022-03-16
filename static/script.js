bod = document.getElementById("output")
nor = document.getElementById("norfolk")

nor.onclick = function(e){
    e.preventDefault()
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=36.850769&lon=-76.285873&exclude=current,minutely,hourly,alerts&units=metric&appid=2fdc6ef6dda95ae4b993aa0c65287d99")
    .then(response => response.json() )
    .then( data=> {

        e.preventDefault()
        nor.style.display="none";

        console.log(data)

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date("March 15, 2022");
        let n2 = d.getDay()

        for (let i of data['daily']){
            let num = Math.round(i['feels_like']['day'] * 1.8 + 32)
            let weather = i['weather'][0]['main']
            
            if (n2 > 5){
                n2 = -1
            }
            n2++
            let day = weekday[n2];

            switch (weather){
                case "Clouds":
                    weather = "☀️"
                    break;
                case "Rain":
                    weather = "🌧️"
                    break;
                case "Clear":
                    weather = "☁️"
                    break;
            }

            bod.innerHTML+=`<div><h3>${day}</h3>${num} <br> <span class="emoji">${weather}</span></div>`
        }


    } )
}
