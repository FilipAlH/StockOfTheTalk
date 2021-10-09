
// Or with jQuery
$(document).ready(function () {
  $('.sidenav').sidenav();
});

// End of sidebar.
let stockData = $("#pinnedcontent");


let divElement = $('.list');
let results = document.querySelector(".stock-content");
document.body.querySelector("#content")
let submission = $('.submit')

submission.on("click", function(event){
  event.preventDefault()
  triggerAfterSearch($('#search').val())
})
//modal event listener
let modal = $('.modal-trigger')
$(document).ready(function () {
  $('.modal').modal();
});


//removes background and calls the fetches
function triggerAfterSearch(stock) {
  divElement.css("background-image", "none")
  divElement.css("opacity", "1")
  let stocks = stock.toUpperCase();
  let stockArray = []
  stockArray.push(stocks)
  console.log(stockArray)
  
  // sam feature for rendering the fav stocks
  function renderFavStocks(){
    let retrieved = []
    if (localStorage.getItem("stockArray")){
      let stored = localStorage.getItem("stockArray")
      let split = stored.split(",")
      let combined = retrieved.concat(split)
      console.log(combined)
      for(i = 0; i < combined.length; i++) {
        if (stockArray.indexOf(combined[i]) === -1) {
          stockArray.push(combined[i])
        }
      }
    }

    localStorage.setItem("stockArray", stockArray)
    console.log(stockArray)

    stockData.empty()

    for(let i = 0; i < stockArray.length; i++){
      stockData.append(`<form><button type="submit" class="storedButton" id="storedButton">${stockArray[i]}</button></form>`);
    }
  }
  renderFavStocks()

  let apiBaseURL = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='
  let apiTrending = apiBaseURL + stocks;
  console.log(apiTrending)

  fetch(apiTrending, {
    headers: {
      'x-api-key': 'aVnUVtehXO852x4lmNcEl4OEakPE0TEf7M6s0TmK',
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    if (response.status != 200) {
      return
    } else {
      return response.json()
    }
  }).then(function (data) {
    console.log(data)
    if (!data.quoteResponse.result[0]) {
      console.log("error")
      modal.trigger("click")
    } else 
    return data
  }).then(function (data) {
    console.log(data.quoteResponse.result[0])
    console.log(data);
    results.innerHTML = ""

    results.innerHTML += `<div>
    <h3>Company: ${data.quoteResponse.result[0].longName}</h3> <br>
    <p>Symbol: ${data.quoteResponse.result[0].symbol}</p>
    <p>Exchange: ${data.quoteResponse.result[0].fullExchangeName} - Real Time Price. Currency in ${data.quoteResponse.result[0].currency}</p>
    <h3>Direction: ${data.quoteResponse.result[0].regularMarketPrice.toFixed(2)}(${data.quoteResponse.result[0].regularMarketChange.toFixed(2)}) (${data.quoteResponse.result[0].regularMarketChangePercent.toFixed(2)} %)</h3>
    <p>Market Volume: ${data.quoteResponse.result[0].regularMarketVolume}
    <p>Daily High: ${data.quoteResponse.result[0].regularMarketDayHigh.toFixed(2)}
    <p>Daily Low: ${data.quoteResponse.result[0].regularMarketDayLow.toFixed(2)}
     
    </div>`;
    
    
    callReddit(stocks)
  })
  
 
}

//Reddit API call
function callReddit(stocks) {
  fetch("https://www.reddit.com/r/" + stocks + "/new.json?limit=5")
    .then(function (result) {
      if (result.status != 200) {
        return
      } else {
        return result.json()
      }
    }).then(function (data) {
      if (data) {
        let list = $('.genericList')
        list.empty()
        console.log(data)
        for (i = 0; i < 5; i++) {
          let thumbnail = data.data.children[i].data.thumbnail
          let title = data.data.children[i].data.title
          let link = data.data.children[i].data.permalink

          if (thumbnail != "self") {
            listConstructor(`<img src="${thumbnail}"><br>
          <p>${title}</p>
          <a href="https://reddit.com${link}">Read more!</a>
          `)
          } else {
            listConstructor(`
          <p>${title}</p>
          <a href="https://reddit.com${link}">Read more!</a>
          `)
          }
        }
      } else {
        let list = $('.genericList')
        list.empty()
        listConstructor(`<p> Oops, It looks like there is no Reddit community for this stock!</p>`)
      }
    })
   
}

//  same generic list creator and appending function
function listConstructor(x) {
  let ulist = document.querySelector(".genericList");
  let list = document.createElement("li");
  list.classList.add("collection-item");
  list.innerHTML = x;
  list.setAttribute("style", "width: 100%; border-radius: 5px; margin: 3px;")
  ulist.appendChild(list);
}

//jqueryUI autocomplete - now works!
$(function () {
  let stocknames = [
    "AAPL",
    "AMC",
    "MSFT",
    "FB",
    "TSLA",
    "JPM",
    "NVDA",
    "V",
    "BAC",
    "JNJ",
    "BABA",
    "WMT",
    "MA",
    "PG",
    "NKE",
    "AMZN"
  ];
  $('#search').autocomplete({
    source: stocknames,
  });
});

stockData.on("click", function(event){
  event.preventDefault()
  fromSave = event.target.innerText
  console.log(fromSave)
  triggerAfterSearch(fromSave)
})
