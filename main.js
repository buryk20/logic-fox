
import './src/assets/scss/main.scss';


import { formSubmit } from './src/js/formSubmit.js';
formSubmit();

import { headerMenu } from './src/js/headerMenu.js';
headerMenu();

const screenWidth = window.innerWidth;

console.log(screenWidth);


const baseUrl = 'https://dev.api.logicpower.ua/user/catalog/product/list/all';
const pageSize = 20; // Задайте необходимое значение для pageSize
const pageNum = 1;   // Задайте необходимое значение для pageNum

const url = new URL(baseUrl);
url.searchParams.append('pageSize', pageSize);
url.searchParams.append('pageNum', pageNum);

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Обработка полученных данных
    console.log(data);
    localStorage.setItem("product", JSON.stringify(data.data.items));
  })
  .catch(error => {
    // Обработка ошибок
    console.error('Ошибка:', error);
  });

const dataProduct = JSON.parse(localStorage.getItem("product"));

console.log(dataProduct);

displayProducts(dataProduct)

function displayProducts(products) {
    const productsContainer = document.getElementById("products-container");
    let html = "";

    products.forEach(product => {
      html += `<div>
                <h2>${product.name.ru}</h2>
                <p>Цена: ${product.prices[0].money.amount}</p>
                <p>Описание: ${product.description}</p>
              </div>`;
    });

    productsContainer.innerHTML = html;
  }