





//base on trending [A,B,C]
//create a loop that remove '$' sign and add %2C starting from second object in the Array and then concatenate all in a string
let redditStocks = ["$AAPL", "$AMZN", "$FB"]
let inputString = ""
x = redditStocks.toString();
y = x.replaceAll(",", "%2C");
z = y.replaceAll("$", "")
console.log(z);

let apiBaseURL = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='
let apiTrending = apiBaseURL + z;
console.log(apiTrending)

fetch(apiTrending, {
    headers: {
        'x-api-key': 'DTMmToV3kA9HZks7xTrGv3dngq8nXgoJ26jPMmGu',
        'Content-Type': 'application/json'
    }
}).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)
})
fetch('https://www.reddit.com/r/javascript/hot.json')
  .then(function(res) {
    return res.json();   // Convert the data into JSON
  })
  .then(function(data) {
    console.log(data);   // Logs the data to the console
  })
  .catch(function(err) {
    console.log(err);   // Log error if any
  });






//then 3 top rated get put in to yahoo finance api and we fetch the data we need to 
//diplay the top 3 stocks on webpage.
// fetch('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL',{
// headers:{'x-api-key': 'DTMmToV3kA9HZks7xTrGv3dngq8nXgoJ26jPMmGu',
// 'Content-Type':'application/json'}
// }).then(function(response) {
//     return response.json()
// }).then(function(data) {
//     console.log(data)
// })





