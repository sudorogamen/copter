//массив продуктов
const products = [
  {
    id: "1",
    category: "quadcopter",
    series: "Mavic",
    model: "DJI Mavic 3",
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

//вызываем все функции после прогрузки окна браузера
window.addEventListener("DOMContentLoaded", () => {
  renderCard(products);
  seriesFilter(products);
  optionsFilter(products);
});
