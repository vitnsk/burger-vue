


  const burg ={
    data() {
    return{
      currency: "$",
  productsData:[
    {
      image: "/images/1.png",
      title: "Бургер чеддер & бекон",
      text: " Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер,майонез, кетчуп, сырный соус",
      price: 8,
      basePrice: 8,
      grams: 360
    },{
      image: "/images/2.png",
      title: "BBQ с беконом и курицей",
      text: " Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лукмаринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      grams: 390
    },{
      image: "/images/3.png",
      title: "Дабл биф бургер",
      text: " Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
      price: 10,
      basePrice: 10,
      grams: 420
    },{
      image: "/images/4.png",
      title: "Баварский бургер",
      text: " Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      price: 7,
      basePrice: 7,
      grams: 300
    },{
      image: "/images/5.png",
      title: "Бекон чизбургер",
      text: "  Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 220
    },{
      image: "/images/6.png",
      title: "Индиана бургер",
      text: "  Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 320
    },{
      image: "/images/7.png",
      title: "Вегги бургер",
      text: "  Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrice: 8,
      grams: 280
    },{
      image: "/images/8.png",
      title: "Плаксивый Джо",
      text: " Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зеленьг",
      price: 7,
      basePrice: 7,
      grams: 380
    },{
      image: "/images/9.png",
      title: "Двойной чиз бургер",
      text: " Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 11,
      basePrice: 11,
      grams: 400
    },{
      image: "/images/10.png",
      title: "Фрешбургер",
      text: " Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      price: 9,
      basePrice:9,
      grams: 300
    },{
      image: "/images/11.png",
      title: "Цуккини бургер",
      text: " Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 320
    },{
      image: "/images/12.png",
      title: "Двойной бургер чеддар",
      text: " Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 360
    }
  ]}
},
methods:{

  changeCurrency(){
    let newCurrency = "$";
    let coefficient = 1;

    if (this.currency === "$") {
      newCurrency = "₽";
      coefficient = 80;
    } else if (this.currency === "₽") {
      newCurrency = "BYN";
      coefficient = 3;
    } else if (this.currency === 'BYN') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (this.currency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
    }
    this.currency = newCurrency;

this.productsData.forEach((item)=> {
  item.price = +(item.basePrice * coefficient).toFixed(1);
})
}
}
  }
  Vue.createApp(burg).mount('#app');
  
  


document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item>a")
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let buttons = document.getElementsByClassName("product-button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");

document.getElementById("order-action").onclick = function () {
    let hasError = false;
    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });
    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!")
    }
}
