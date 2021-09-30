
// Sidebar Element

// document.addEventListener('DOMContentLoaded', function() {
//     let elems = document.querySelectorAll('.sidenav');
//     let instances = M.Sidenav.init(elems, options);
//   });

  // Initialize collapsible (uncomment the lines below if you use the dropdown letiation)
  // let collapsibleElem = document.querySelector('.collapsible');
  // let collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

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

