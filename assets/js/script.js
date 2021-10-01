// Aar //

baseURL = "https://apewisdom.io/api/v1.0/filter/{filter}";

document.baseURL;

.content {
    background-image: url("./assets/images/stock-trading.jpg");
  }


// Aar //

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  // End of sidebar.

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

//  same generic list creator and appending function

function listConstructor(x){
  let ulist=document.querySelector(".genericList");
 
  let list=document.createElement("li");
  list.classList.add("collection-item");
  list.innerHTML=x;
  ulist.appendChild(list);
  }
  
  // call function example
  listConstructor("alpha");
  listConstructor("uranium");
  listConstructor("sigma");
  listConstructor("beta");


//Reddit API call with modal if nothing comes up
let modal = $('.btnmodal')
let stock = "AAPL"

function callReddit(stock) {
  fetch("https://www.reddit.com/r/" + stock + "/new.json?limit=10")
  .then (function (result) {
    if (result.status != 200) {
        modal.trigger("click")
        return
    } else {
      return result.json()
    }
}).then (function(data) {
  console.log(data)
})
}

callReddit(stock)


