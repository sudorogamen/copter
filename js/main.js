//массив продуктов
const products = [
  {
    id: "1",
    category: "quadcopter",
    series: "Mavic",
    model: "DJI Mavic 2",
    prices: ["362 000", "400 000"],
    photo: ["img/products/quadcopters/quadcopter0001-front-view.jpg"],
    maximumFlightTime: "46 мин",
    info: "DJI Mavic 3 — мощный флагманский дрон с камерой, оснащенный камерой Hasselblad с CMOS-матрицей 4/3 для упрощения создания изображения профессионального уровня. Устройство предлагает всенаправленное распознавание препятствий для оптимального опыта полета, максимальное время полета до 46 минут и максимальную дальность передачи сигнала 15 км. Каждое из обновлений DJI Mavic 3 устанавливает новые стандарты аэросъемки.",
  },
  {
    id: "2",
    category: "quadcopter",
    series: "Air",
    model: "DJI AIR 2S",
    prices: ["129 000", "150 000"],
    photo: ["img/products/quadcopters/quadcopter0002-front-view.jpg"],
    maximumFlightTime: "31 мин",
    info: "DJI Air 2S с 1-дюймовой CMOS-матрицей, мощным арсеналом функций, компактным корпусом и массой менее 600 г — идеальный дрон для аэрофотосъемки в любом месте и в любое время. Возьмите этот универсальный дрон с собой, чтобы запечатлеть мир в потрясающих деталях.",
  },
  {
    id: "3",
    category: "quadcopter",
    series: "Mini",
    model: "DJI Mini 2",
    prices: ["49 000", "70 000"],
    photo: ["img/products/quadcopters/quadcopter0003-front-view.jpg"],
    maximumFlightTime: "31 мин",
    info: "Крохотный, но мощный, DJI Mini 2 поможет вам создавать 4K-видео c 4-кратным зумом и потрясающие панорамные снимки.",
  },
  {
    id: "4",
    category: "quadcopter",
    series: "Inspire",
    model: "DJI Inspire 2",
    prices: ["1 239 000", "1 400 000"],
    photo: ["img/products/quadcopters/quadcopter0004-front-view.png"],
    maximumFlightTime: "31 мин",
    info: "Мы оснастили Inspire 2 новой технологией обработки изображения - CineCore 2.1, записывающей видео с разрешением 6K при 4,44 Гбит/с в CinemaDNG*1 и 5.2К при 2,08 Гбит/с в Adobe, Apple ProRes*2 и H.265/H.264 при 100 Мбит/с. CineCore 2.1 поддерживает серийную съемку (10 одновременных JPEG + DNG снимков и непрерывную DNG съемку*3 при 20 кадрах/с (разрешением 24 Мп) - при использовании камеры Zenmuse X7.",
  },
  {
    id: "5",
    category: "quadcopter",
    series: "Mavic",
    model: "DJI Mavic 3",
    prices: ["364 000", "400 000"],
    photo: ["img/products/quadcopters/quadcopter0001-folded-view.jpg"],
    maximumFlightTime: "46 мин",
    info: "DJI Mavic 3 — мощный флагманский дрон с камерой, оснащенный камерой Hasselblad с CMOS-матрицей 4/3 для упрощения создания изображения профессионального уровня. Устройство предлагает всенаправленное распознавание препятствий для оптимального опыта полета, максимальное время полета до 46 минут и максимальную дальность передачи сигнала 15 км. Каждое из обновлений DJI Mavic 3 устанавливает новые стандарты аэросъемки.",
  },
  {
    id: "6",
    category: "quadcopter",
    series: "Air",
    model: "DJI AIR 2S",
    prices: ["129 000", "150 000"],
    photo: ["img/products/quadcopters/quadcopter0002-folded-view.jpg"],
    maximumFlightTime: "31 мин",
    info: "DJI Air 2S с 1-дюймовой CMOS-матрицей, мощным арсеналом функций, компактным корпусом и массой менее 600 г — идеальный дрон для аэрофотосъемки в любом месте и в любое время. Возьмите этот универсальный дрон с собой, чтобы запечатлеть мир в потрясающих деталях.",
  },
  {
    id: "7",
    category: "quadcopter",
    series: "Mini",
    model: "DJI Mini 2",
    prices: ["49 000", "70 000"],
    photo: ["img/products/quadcopters/quadcopter0003-folded-view.jpg"],
    maximumFlightTime: "31 мин",
    info: "Крохотный, но мощный, DJI Mini 2 поможет вам создавать 4K-видео c 4-кратным зумом и потрясающие панорамные снимки.",
  },
  {
    id: "8",
    category: "quadcopter",
    series: "Inspire",
    model: "DJI Inspire 2",
    prices: ["1 239 000", "1 400 000"],
    photo: ["img/products/quadcopters/quadcopter0004-folded-view.jpg"],
    maximumFlightTime: "31 мин",
    info: "Мы оснастили Inspire 2 новой технологией обработки изображения - CineCore 2.1, записывающей видео с разрешением 6K при 4,44 Гбит/с в CinemaDNG*1 и 5.2К при 2,08 Гбит/с в Adobe, Apple ProRes*2 и H.265/H.264 при 100 Мбит/с. CineCore 2.1 поддерживает серийную съемку (10 одновременных JPEG + DNG снимков и непрерывную DNG съемку*3 при 20 кадрах/с (разрешением 24 Мп) - при использовании камеры Zenmuse X7.",
  },
  {
    id: "9",
    category: "quadcopter",
    series: "Mavic",
    model: "DJI Mavic 3",
    prices: ["367 000", "400 000"],
    photo: ["img/products/quadcopters/quadcopter0001-above-view.jpg"],
    maximumFlightTime: "46 мин",
    info: "DJI Mavic 3 — мощный флагманский дрон с камерой, оснащенный камерой Hasselblad с CMOS-матрицей 4/3 для упрощения создания изображения профессионального уровня. Устройство предлагает всенаправленное распознавание препятствий для оптимального опыта полета, максимальное время полета до 46 минут и максимальную дальность передачи сигнала 15 км. Каждое из обновлений DJI Mavic 3 устанавливает новые стандарты аэросъемки.",
  },
  {
    id: "10",
    category: "quadcopter",
    series: "Air",
    model: "DJI AIR 2S",
    prices: ["129 000", "150 000"],
    photo: ["img/products/quadcopters/quadcopter0002-above-view.jpg"],
    maximumFlightTime: "31 мин",
    info: "DJI Air 2S с 1-дюймовой CMOS-матрицей, мощным арсеналом функций, компактным корпусом и массой менее 600 г — идеальный дрон для аэрофотосъемки в любом месте и в любое время. Возьмите этот универсальный дрон с собой, чтобы запечатлеть мир в потрясающих деталях.",
  },
  {
    id: "11",
    category: "quadcopter",
    series: "Mini",
    model: "DJI Mini 2",
    prices: ["49 000", "70 000"],
    photo: ["img/products/quadcopters/quadcopter0003-above-view.jpg"],
    maximumFlightTime: "31 мин",
    info: "Крохотный, но мощный, DJI Mini 2 поможет вам создавать 4K-видео c 4-кратным зумом и потрясающие панорамные снимки.",
  },
  {
    id: "12",
    category: "quadcopter",
    series: "Inspire",
    model: "DJI Inspire 2",
    prices: ["1 239 000", "1 400 000"],
    photo: ["img/products/quadcopters/quadcopter0004-above-view.jpg"],
    maximumFlightTime: "31 мин",
    info: "Мы оснастили Inspire 2 новой технологией обработки изображения - CineCore 2.1, записывающей видео с разрешением 6K при 4,44 Гбит/с в CinemaDNG*1 и 5.2К при 2,08 Гбит/с в Adobe, Apple ProRes*2 и H.265/H.264 при 100 Мбит/с. CineCore 2.1 поддерживает серийную съемку (10 одновременных JPEG + DNG снимков и непрерывную DNG съемку*3 при 20 кадрах/с (разрешением 24 Мп) - при использовании камеры Zenmuse X7.",
  },
];
let filteredProducts = products;

//функция рендера карт
function renderCard(products) {
  const cardList = document.querySelector(".js-products-list");
  cardList.innerHTML = "";

  //функция создания элемента
  function createCard(item) {
    //создание элемента
    let li = document.createElement("li");
    li.innerHTML = ` <div class="product-image">
                  <img src=${item.photo} alt="" class="image-card" />
                </div>
                <div class="product-description">
                  <h3 class="product-title">${item.model}</h3>
                </div>
                <div class="product-price">
                  <span class="price">${item.prices[0]}</span><span>₽</span>
                </div>
                <button type="button" class="buy-button">В корзину</button>`;
    li.classList.add("js-product-item");
    return li;
  }

  //пробегаем по массиву и собираем элементы в контейнер
  products.forEach((product) => {
    let item = createCard(product);
    cardList.append(item);
  });
  addItemInCart();
}

//функция фильтрации по серии товара
function seriesFilter(products) {
  let selectsList = document.querySelector("#js-prise-select");
  let seriesList = document.querySelector(".series-list");
  let series = document.querySelectorAll(".series-item");
  let activeSeries = null;
  seriesList.addEventListener("click", (e) => {
    // проверяем событие нажатия на элемент фильтра
    if (e.target == seriesList) {
      return;
    } else {
      //обновляем значение активного фильтра
      if (e.target.getAttribute("value") == "All") {
        activeSeries = null;
      } else {
        activeSeries = e.target.getAttribute("value");
      }
      //добаляем актиному элемкету класс
      series.forEach((item) => {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
      //фильтруем и перерендерим массив
      let filteredProductsSeries = products.filter((product) => {
        if (activeSeries && product.series !== activeSeries) {
          return false;
        } else {
          return true;
        }
      });
      filteredProducts = filteredProductsSeries;
      renderCard(filteredProducts);
      selectsList.value = "def";
      document.querySelector(".input-search").value = "";
    }
  });
}

//функция фильтрации по серии товара
function optionsFilter(products) {
  let selectsList = document.querySelector("#js-prise-select");
  let activeOption = null;
  //Обрабатываем событие выбора фильтра
  selectsList.addEventListener("change", (e) => {
    //определяем сортировку
    if (selectsList.value === "def") {
      activeOption = null;
    } else {
      activeOption = selectsList.value;
    }
    //сортируем и перерендерим мссив
    let filteredProductsOption = filteredProducts.toSorted((a, b) => {
      if (activeOption) {
        const priceA = parseInt(a.prices[0].replace(/\s/g, " ", 10));
        const priceB = parseInt(b.prices[0].replace(/\s/g, " ", 10));
        if (selectsList.value === "up") {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      } else {
        return;
      }
    });
    renderCard(filteredProductsOption);
  });
}

function searchItems(product) {
  let search = document.querySelector(".input-search");
  search.addEventListener("input", (e) => {
    let searchItems = filteredProducts;
    searchItems = searchItems.filter((item) => {
      let inpyt = e.target.value.replace(/\s/g, "").toUpperCase().trim();
      let itemText = item.model.replace(/\s/g, "").toUpperCase();
      if (!itemText.includes(inpyt) && inpyt) {
        return false;
      } else {
        return true;
      }
    });
    if (
      document
        .querySelector(".products-container")
        .querySelector(".emptySearch")
    ) {
      document
        .querySelector(".products-container")
        .querySelector(".emptySearch")
        .remove();
    }
    if (searchItems.length < 1) {
      console.log("asdkahs");
      let emptySearch = document.createElement("div");
      emptySearch.classList.add("emptySearch", 'error-card-render');
      emptySearch.innerHTML = `Нет товаров по запросу: "${e.target.value}" `;
      document.querySelector(".products-container").append(emptySearch);
    }
    console.log(searchItems);
    renderCard(searchItems);
    searchItems = filteredProducts;
  });
}

function emptyCart() {
  if (
    !document
      .querySelector(".shoping-container")
      .querySelector(".shoping-list")
      .querySelector("li")
  ) {
    document
      .querySelector(".shoping-container")
      .querySelector(".shoping-list").innerHTML = `
  <li class="null-item">
    Корзина пуста
  </li>`;
  }
}

function openCart() {
  let cartButton = document.querySelector(".shopping-cart");
  let cartsRow = document.querySelector(".shoping-container");

  window.addEventListener("click", (e) => {
    if (
      e.target == cartButton ||
      (e.target.closest(".shoping-container") != cartsRow &&
        cartsRow.classList.contains("active"))
    ) {
      if (!cartsRow.classList.contains("active")) {
        cartsRow.classList.add("active");
        cartsRow.style.left = "0";
        document.querySelector("main").style.overflow = "hidden";
        document.querySelector("main").style.pointerEvents = "none";
      } else {
        cartsRow.classList.remove("active");
        cartsRow.style.left = "-100%";
        document.querySelector("main").style.overflow = "visible";
        document.querySelector("main").style.pointerEvents = "initial";
      }

      emptyCart();
    } else {
      return;
    }
  });
}

function addItemInCart() {
  let cartsRow = document.querySelector(".shoping-list");
  let buyButtons = document.querySelectorAll(".buy-button");
  function reCreateItem(item) {
    let li = item.closest("li");
    let src = li.querySelector(".image-card").src;
    let model = li.querySelector(".product-title").innerHTML;
    let price = li.querySelector(".price").innerHTML;
    return [src, model, price];
  }
  function createCartItem(item) {
    let li = document.createElement("li");
    li.innerHTML = ` <div class="cart-product-image">
                <img src=${item[0]} alt="" class="cart-item-image" />
              </div>
              <div class="cart-product-description">
                <h3 class="cart-product-title">${item[1]}</h3>
              </div>
              <div class="cart-product-price">
                <span class="cart-price">${item[2]}</span><span>₽</span>
              </div>
               <div class="cart-count-row" >
                <button class="count-button minus">-</button>
                <span class="cart-count">1</span> 
                <button class="count-button plus">+</button>
              </div>
              `;
    li.classList.add("cart-product-item");
    return li;
  }
  buyButtons.forEach((item) => {
    item.addEventListener("click", (e) => {
      let newItem = true;
      if (cartsRow.querySelector(".null-item")) {
        cartsRow.querySelector(".null-item").remove();
      }

      if (cartsRow.querySelector(".cart-product-item")) {
        let items = cartsRow.querySelectorAll(".cart-product-item");
        items.forEach((it) => {
          if (
            it.querySelector(".cart-product-title").innerHTML ===
            e.target.closest("li").querySelector(".product-title").innerHTML
          ) {
            newItem = false;

            it.querySelector(".cart-count").innerHTML =
              parseInt(it.querySelector(".cart-count").innerHTML) + 1;
          }
        });
      }
      if (newItem) {
        let li = createCartItem(reCreateItem(item));
        cartsRow.append(li);
        cardCountEdit(li);
      }
      shopEffetc(reCreateItem(item), e.target.closest("li"));
    });
  });
}

function shopEffetc(item, e) {
  let counts = document.querySelector(".shopping-cart").querySelector("span");
  let effectContainer = document.querySelector(".shop-effect");
  function createEffectCard(item) {
    //создание элемента
    let li = document.createElement("li");
    li.innerHTML = ` <div class="product-image">
                  <img src=${item[0]} alt="" class="image-card" />
                </div>
                <div class="product-description">
                  <h3 class="product-title">${item[1]}</h3>
                </div>
                <div class="product-price">
                  <span class="price">${item[2]}</span><span>₽</span>
                </div>
                <button type="button" class="buy-button">В корзину</button>`;
    li.classList.add("cart-product-item", "js-effect-item");
    return li;
  }
  let li = createEffectCard(item);
  effectContainer.append(li);
  li.style.left = e.offsetLeft - 10 + "px";
  li.style.top = e.offsetTop + "px";
  let card = document.querySelector(".shopping-cart");
  li.style.left = card.offsetLeft + 10 + "px";
  li.style.top = card.offsetTop + 20 + "px";
  li.style.width = 10 + "px";
  li.style.height = 10 + "px";
  counts.innerHTML = parseInt(counts.innerHTML) + 1;

  setTimeout(() => {
    li.remove();
  }, 650);
}

function cardCountEdit(item) {
  let countSum = document.querySelector(".shopping-cart").querySelector("span");
  item.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.classList.contains("plus")) {
        countSum.innerHTML = parseInt(countSum.innerHTML) + 1;
        e.target.closest("div").querySelector("span").innerHTML =
          parseInt(e.target.closest("div").querySelector("span").innerHTML) + 1;
      } else {
        if (
          parseInt(e.target.closest("div").querySelector("span").innerHTML) > 1
        ) {
          countSum.innerHTML = parseInt(countSum.innerHTML) - 1;
          e.target.closest("div").querySelector("span").innerHTML =
            parseInt(e.target.closest("div").querySelector("span").innerHTML) -
            1;
        } else {
          setTimeout(() => {
            e.target.closest("li").remove();
            emptyCart();
          }, 100);
          countSum.innerHTML = parseInt(countSum.innerHTML) - 1;
          e.target.closest("div").querySelector("span").innerHTML =
            parseInt(e.target.closest("div").querySelector("span").innerHTML) -
            1;
        }
      }
    });
  });
}

//функция диопозона товаров
function priceRange(){
  let form = document.querySelector(".filter-price-inputs")
  form.addEventListener('input', e => {
    let range = []
    let inputs = document.querySelectorAll(".filter-price-input")
    let error = form.querySelector('p')
    error.style.display = 'none'
  inputs.forEach((item) => {
    range.push(item.value)
  })
       if(parseInt(range[0]) > parseInt(range[1])){
         error.style.display = 'block'
        }else{
          let min =  parseInt(range[0])? parseInt(range[0]) : -100000000000;
          let max = parseInt(range[1])? parseInt(range[1]) : 100000000000;
         let filteredProductss =  filteredProducts.filter((item) => {
           let itemPrice =  parseInt(item.prices[0].replace(/\s/g, ''))
           console.log(min,max,itemPrice)
           console.log(min>itemPrice)
           if(min > itemPrice || itemPrice > max){
             return false
           }
           return true
          });
          if (
            document
              .querySelector(".products-container")
              .querySelector(".emptyCardInRange")
          ) {
            document
              .querySelector(".products-container")
              .querySelector(".emptyCardInRange")
              .remove();
          }
          if(filteredProductss == 0){
              let emptySearch = document.createElement("div");
              emptySearch.classList.add("emptyCardInRange", "error-card-render");
              emptySearch.innerHTML ="Нет товаров в этом диапозоне";
              document.querySelector(".products-container").append(emptySearch);
            
          }
   
          renderCard(filteredProductss)
        }
  })
  
  
  }





//вызываем все функции после прогрузки окна браузера
window.addEventListener("DOMContentLoaded", () => {
  renderCard(products);
  seriesFilter(products);
  optionsFilter(products);
  searchItems(products);
  openCart();
  priceRange()
});
