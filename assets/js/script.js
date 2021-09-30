
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
  