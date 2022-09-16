import jsonData from './data.json'assert { type: "json" };
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
      data: {
        labels: [
                jsonData[0].day,
                jsonData[1].day,
                jsonData[2].day,
                jsonData[3].day,
                jsonData[4].day,
                jsonData[5].day,
                jsonData[6].day],
          datasets: [{
              data: [
                jsonData[0].amount,
                jsonData[1].amount,
                jsonData[2].amount,
                jsonData[3].amount,
                jsonData[4].amount,
                jsonData[5].amount,
                jsonData[6].amount
              ],
              backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',           
            
            ],
              borderRadius:['5'],
                  
          }]
    },
      options: {
      onHover: (event, chartElement) =>{
        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
        if(chartElement.length === 1){
          event.native.target.style.cursor = 'pointer';
        };
       if(chartElement.length === 0){
          event.native.target.style.cursor = 'default';
        };
      },
      plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.dataset.label || '';
              
                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
            },
        }
        
    },
      },
          scales: {
            
            x: {
             
              grid: {
                color: 'hsl(33, 100%, 98%)',
                drawBorder: false, 
                       
              },
              
          },
            y: {display: false, 
     
            },
            
            
          },
         
      }, 
    plugins: []
  } 
);

  //totalizador
  let sum = 0;
  for(let i = 0; i < jsonData.length; i++ ){
    
    sum +=jsonData[i].amount;
    let total = document.getElementById('summation').innerHTML = sum;

  
  }
