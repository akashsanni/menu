
import { menu } from "./1-basic.js"

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    
    sectionCenter.innerHTML = displayMenu;
  });
  


const all = document.querySelector('.all')
all.addEventListener('click',()=>{
    
    let displayMenu = menu.map((item) =>{
            return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
    })
  
    displayMenu = displayMenu.join("");   
    sectionCenter.innerHTML = displayMenu;

});

const breakfast = document.querySelector('.breakfast')
breakfast.addEventListener('click',()=>{
    let displayMenu = menu.map((item) =>{
        if(`${item.category}` === "breakfast")
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article> `;
      
    });
    console.log(displayMenu)
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
})

const lunch = document.querySelector('.lunch')
lunch.addEventListener('click',()=>{
    let displayMenu = menu.map((item) =>{
        if(`${item.category}` === "lunch")
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article> `;
      
    });
    console.log(displayMenu)
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
})
const shakes = document.querySelector('.shakes')
shakes.addEventListener('click',()=>{
    let displayMenu = menu.map((item) =>{
        if(`${item.category}` === "shakes")
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article> `;
      
    });
    console.log(displayMenu)
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
})