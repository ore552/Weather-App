//js//

//Let us creating IIFE

(function () {
    //Let us create an object that will hold loads of objects
    // let city = document.querySelector(".searchbar");
    // console.log(city.value);

    let weather = {
        //Let us put our api in
        // "apiKey" : "3b2d0f0ccdb13e95b01040acd0652b7f",
        "apiKey" : "e3c7a53c3c94013b9122a3dda06051db",
        //Let us create a function the object way
        fetchAPI : function(city) {
            // Let us fetch the data
            fetch("https://api.openweathermap.org/data/2.5/weather?q="
            +city+
            "&units=metric&appid="
            +this.apiKey)

            .then((response) => response.json())
            .then((data) => { 
                console.log(data);
                this.displayWeather(data)});
        },

        displayWeather : function(data) {
            const{name} = data;
            const{icon, description} = data.weather[0];
            const{temp, humidity, temp_max, temp_min, feels_like} = data.main;
            const{speed} = data.wind;

            //Let us insert the data using doms
            document.querySelector(".city_span").innerHTML = `${name}`
            document.querySelector(".temp").innerHTML = `Temperature in ${temp}<sup>o</sup>C `
            document.querySelector(".description").innerHTML = `It is ${description}`
            document.querySelector(".temp_max").innerHTML = `The max temperature will be ${temp_max}<sup>o</sup>C`
            document.querySelector(".temp_min").innerHTML = `The min temperature will be ${temp_min}<sup>o</sup>C`
            document.querySelector(".feels_like").innerHTML = `The temperature feels like ${feels_like}<sup>o</sup>C`
            document.querySelector(".humidity").innerHTML = `The humidity is ${humidity}%`
            document.querySelector(".wind").innerHTML = `The wind speed is ${speed}km/h`
        },

        search : function () {
            this.fetchAPI(document.querySelector(".searchbar").value) 
        }
    }

    document.querySelector(".btn").addEventListener("click",() => {
        weather.search()
    }  )
})();

//Let us
//Let us
//Let us