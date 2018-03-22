        $(document).ready(function () {
        function handleWeatherResults(response,status,xhr){
                console.log(response)
                let forecast=response.query.results.channel.item.forecast;
                $("#weather_results").empty();
                for(let i of forecast){
                    console.log(i.date +' '+i.day +' '+i.high +' '+i.low +' '+i.text +' '+'<br>')
                    $("#weather_results").append(i.date +' '+i.day +' '+i.high +' '+i.low +' '+i.text +' '+'<br>')
                }

                //$("#weather_results").text(JSON.stringify(forecast,['date','day','high','low','text']));
            }
            function weatherClicked(){
                console.log('button has been clicked');
                let city = "Chicago";
                var url =
               "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"
               + city +
               "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

                $.getJSON(url,handleWeatherResults);
            }
            $("#weather_buttin").click(weatherClicked);

}
)