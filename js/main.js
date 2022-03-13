// AOS.init();
$('.slick').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  arrows: true,
});

$('.carousel').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  arrows: true,
});

$(function () {

  $('.news').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    arrows: false
  });

  $('#btn-open-navbar, #btn-close-navbar, .overlay').click(function () {
    $('.overlay, .sidebar').toggleClass('active');
    console.log(1)
  })
});

// basket js start 
if (localStorage.getItem("basket") == null) {
  localStorage.setItem("basket", JSON.stringify([]));
}
let addBasketAll = document.querySelectorAll(".addBasket");
for (let addBasket of addBasketAll) {
  addBasket.onclick = function (e) {
    e.preventDefault();
    if (localStorage.getItem("basket") == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let name = this.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
    let src = this.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.getAttribute("src");
    let proname=this.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
    let data_id = this.parentElement.parentElement.parentElement.parentElement.getAttribute("data-id");
    let existingPro = basket.find(p => p.Id == data_id);
    let price = this.parentElement.previousElementSibling.firstElementChild.innerText;
    if (existingPro === undefined) {
      basket.push({
        Id: data_id,
        Name: name,
        ProName:proname,
        Src: src,
        Price: "$"+ price,
        Count: 1
      })
    } else {
      existingPro.Count += 1;
    }
    console.log(basket)
    localStorage.setItem("basket", JSON.stringify(basket));
    CountBasket();
  };
}

function CountBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  document.getElementById("ProCount").innerText = basket.reduce((x, y) => {
    return x + y.Count
  }, 0);
}
CountBasket();