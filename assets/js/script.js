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

