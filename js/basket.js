let products = JSON.parse(localStorage.getItem("basket"));
let count = 0;
let subtotal=document.getElementById("subtotal");
let cleardata=document.getElementById("cleardata");
for (let product of products) {
  let tdN = document.createElement("td");
  let tdImage = document.createElement("td");
  let tdName = document.createElement("td");
  let tdCount = document.createElement("td");
  let tdProNAME=document.createElement("td") ;
  let tdRemove = document.createElement("td");
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-trash-can";
  // function Clear(){
  // cleardata.onclick=function(){ 
  //  icon.parentElement.parentElement.innerText=" ";
  //   }
  // } 
  // Clear();
  icon.onclick = function (e) {
    updateDiv();
    
    let countPro = Number(this.parentElement.previousElementSibling.previousElementSibling.innerText);
    countPro--;
    tdCount.innerText = countPro; 
    if (countPro >=0 ) {
      var existingItems = JSON.parse(localStorage.getItem("basket"));
      var itemIndex = this.parentElement.tdN; 
      existingItems.splice(itemIndex, 1);
      localStorage.setItem("basket", JSON.stringify(existingItems));
      document.getElementById("ProCount").innerText = existingItems.length;
      this.parentElement.parentElement.remove(); 
  
      ShowEmpty();
      updateDiv();

      
    }
    
    console.log(countPro); 
  }; 
 
  count++; 
  let img = document.createElement("img");
  img.setAttribute("src", product.Src);
  tdImage.append(img);
  tdProNAME.innerText=product.ProName
  tdName.innerText = product.Price;
  tdCount.innerText = product.Count;  
  tdN.innerText =  "$"+(parseInt(product.Count)*parseInt(product.Price.slice(1,3))); 
  tdRemove.append(icon); 
  let tr = document.createElement("tr"); 
  tr.append(tdImage, tdProNAME,tdName, tdCount, tdN, tdRemove); 
  document.querySelector(".table").lastElementChild.append(tr);
 
  
}  
// function PriceBasket(){  
// let basket=JSON.parse(localStorage.getItem("basket"));
// let totalEmaount=basket.reduce((total_p,y)=>y.Count*(total_p+y.Price),0)
// document.getElementById("subtotal").innerText=totalEmaount  
// }
// PriceBasket(); 
function updateDiv() {
  let basket = JSON.parse(localStorage.getItem("basket"));
   let countPro = basket.reduce((total, p) => total + p.Count, 0);
  let totalAmount = basket.reduce((total_price, x) => total_price +(x.Count * ( parseInt(x.Price.slice(1,3)))),0)
  // document.getElementById("Total_Count").innerText = countPro;
  document.getElementById("Total_Counts").innerText = countPro;
  //document.getElementById("TotalPriceSub").innerText = totalAmount;
  document.getElementById("subtotal").innerText = "$" + totalAmount.toFixed(2);

}
updateDiv();  
function ShowEmpty() {
  var exIt = JSON.parse(localStorage.getItem("basket"));
  var al_box = document.getElementById("alert-box");
  var tbl = document.querySelector(".table");
  if (exIt.length == 0) {
    al_box.style.display = "block";
    tbl.style.opacity = "0";
  } else {
    al_box.style.display = "none";
    tbl.style.opacity = "1";
  }
} 
 
 
ShowEmpty();
 