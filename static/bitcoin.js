$(document).ready(function () {
    $(function(){
        $("#div1").html("<h1>hello MOTO</h1>");//setter
    });
    function text_click(){
        //console.log($(this));
        alert($(this).text());//getter
                }
            $("p").click(text_click);//registration of the click event
            $("tr").hover(
                function(){
                    $(this).css("background-color","yellow");
                },
                function(){
                    $(this).css("background-color","pink");
                }
            )
            //alert("aaaaaahhhhhhhhhh");
            function handleBitCoinResponse(response, status, xhr){
                console.log(response);
                //$().text=response.xxx

                let bpi=response.bpi
                $("#BitResults").empty();
                renderChart(bpi);
                //$("#BitResults").text(JSON.stringify(bpi));


                for(let i in bpi){
                    console.log(i+" "+bpi[i])
                    $("#BitResults").append(i+" "+bpi[i]+"<br>")
                }
            }
            function bitconButtonClicked(){
                console.log("the button has been clicked!!")

                var url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-03-01"
                $.getJSON(url,handleBitCoinResponse);
            }
            $("#BitCoinButton").click(bitconButtonClicked);

            function renderChart(bpi) {
        Highcharts.chart('container', {
            chart: {
                type: 'line'
            },
            title: {
                text: '30 days Bitcoin Average Price'
            },
            subtitle: {
                text: 'Source: butaire.com'
            },
            xAxis: {
                categories: Object.keys(bpi)
            },
            yAxis: {
                title: {
                    text: 'Price in USD'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                }
            },
            series: [{
                name: 'Btcoin',
                data: Object.values(bpi)
            }, {
                name: 'Baseline',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    }
   }