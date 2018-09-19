  $.ajax({
    url: `https://api.football-data.org/v1/competitions/467/leagueTable?apikey=adc3eb05d56047139e748eed349d7d2c`,
    success: function (data) {

      console.log(data);
      console.log(data.leagueCaptiony);

      
      // var ctx = document.getElementById("myPieChart");
      // var myChart = new Chart(ctx, {
      //   type: 'pie',
      //   data: {
      //     labels: ["Time", "Update"],
      //     datasets: [{
      //       label: '# of Votes',
      //       data: [data.A[0].points],
      //       backgroundColor: [
      //       'rgba(255, 99, 132, 0.2)',
      //       'rgba(54, 162, 235, 0.2)',
      //       'rgba(255, 206, 86, 0.2)',
      //       'rgba(75, 192, 192, 0.2)',
      //       'rgba(153, 102, 255, 0.2)',
      //       'rgba(255, 159, 64, 0.2)'
      //       ],
      //       borderColor: [
      //       'rgba(255,99,132,1)',
      //       'rgba(54, 162, 235, 1)',
      //       'rgba(255, 206, 86, 1)',
      //       'rgba(75, 192, 192, 1)',
      //       'rgba(153, 102, 255, 1)',
      //       'rgba(255, 159, 64, 1)'
      //       ],
      //       borderWidth: 1
      //     }]
      //   },
      //   options: {
      //     scales: {
      //       yAxes: [{
      //         ticks: {
      //           beginAtZero:true
      //         }
      //       }]
      //     }
      //   }
      // });
        

    },
  })
