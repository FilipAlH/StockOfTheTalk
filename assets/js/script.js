// Aar //

// baseURL = "https://apewisdom.io/api/v1.0/filter/{filter}";

// document.baseURL;

// .content {
//     background-image: url("./assets/images/stock-trading.jpg");
//   }

// Aar //

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  // End of sidebar.

//base on trending [A,B,C]
//create a loop that remove '$' sign and add %2C starting from second object in the Array and then concatenate all in a string

// let inputString = ""
// x = redditStocks.toString();
// y = x.replaceAll(",", "%2C");
// z = y.replaceAll("$", "")
// console.log(z);



let submission = $('.submit')
submission.on("click", triggerAfterSearch)
//modal event listener
let modal = $('.modal-trigger')
$(document).ready(function(){
  $('.modal').modal();
});

function triggerAfterSearch() {
  let stocks = $('#search').val()
  console.log(stocks)
  let apiBaseURL = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='
  let apiTrending = apiBaseURL + stocks;
  console.log(apiTrending)

  fetch(apiTrending, {
      headers: {
          'x-api-key': 'hlmDV4j1kk48BXW9xYHEs7rKzXxcuv393FCkJ8sP',
          'Content-Type': 'application/json'
      }
  }).then(function (response) {
      if (response.status != 200) {
        return
      } else {
        return response.json()
      }
  }).then (function(data) {
    console.log(data)
    if (data.result = "error") {
      console.log("error")
      modal.trigger("click")
    } else return data
  }) .then(function (data) {
      console.log(data)
      callReddit(stocks)
  })
}

//Reddit API call
function callReddit(stocks) {
  fetch("https://www.reddit.com/r/" + stocks + "/new.json?limit=10")
  .then (function (result) {
    if (result.status != 200) {
        return
    } else {
      return result.json()
    }
}) .then (function(data) {
    let list = $('.genericList')
    list.empty()
    console.log(data)
    for (i = 0; i < 10; i++) {
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
})
}

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

