

fetch('https://www.reddit.com/r/AAPL.json')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json)
      })