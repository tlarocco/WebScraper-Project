function getWeather(zip) {
    var url = `api.openweathermap.org/data/2.5/weather?zip=${zip}&appid={d8b352beb5877308da1731f43263df5c}`
    
    fetch (url)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            var temp = data.main.temp;
            var condition = data.weather.description;
            var x = document.getElementById('text').innerHTML;
            x.innerHTML = 'temp';
            console.log(data);
        });

}