var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

var elements = [];

function createProduct(product){
  var that = this;
  this.ele = document.createElement("div");
  this.ele.classList.add("product");
  this.nameEle = document.createElement("div");
  this.priceEle = document.createElement("div");
  this.imageEle = document.createElement("img");
  this.imageEle.src = product.image;
  this.ele.appendChild(this.imageEle);
  this.nameEle.innerHTML = "Name: " + product.name;
  this.priceEle.innerHTML = "Price: $" + product.price;
  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.priceEle);
  
  this.ele.addEventListener("mouseover", function(){
    that.ele.style.borderColor = product.color;
  });
  this.ele.addEventListener("mouseout", function(){
    that.ele.style.borderColor = "";
  });
  this.ele.addEventListener("click", function(){
    that.popUp();
  });
  document.body.appendChild(this.ele);
  
 }

createProduct.prototype.popUp = function(){
  var that = this;
  this.popUpEle = document.createElement("div");
  this.popUpEle.classList.add("popUp");
  this.popUpEle.addEventListener("click", function(){
    that.clickOff();
  });
  
  this.popUpEle.appendChild(this.nameEle);
  this.popUpEle.appendChild(this.priceEle);
  this.popUpEle.appendChild(this.imageEle);
  document.body.appendChild(this.popUpEle);
};

createProduct.prototype.clickOff = function () {
  var that = this;
  that.popUpEle.classList.remove("popUp");
  this.ele.appendChild(this.imageEle);
  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.priceEle);
};

for(var i=0; i<products.length; i++){
  elements.push(new createProduct(products[i]));
}