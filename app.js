//importing menu
import { menu } from "./1-basic.js"

// get parent element
const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelectorAll('.btn-container')

//displaying all items when page loads
window.addEventListener('DOMContentLoaded',()=>{
  displayMenuItems(menu)
  // displayMenuButtons()
})

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map((menu)=>{

    return `<article class="menu-item">
    <img src="${menu.img}" alt="${menu.img} class="photo" />
    <div class="item-info">
      <header>
        <h4>${menu.title}</h4>
        <h4 class="price">${menu.price}</h4>
      </header>
      <p class="item-text">
        ${menu.desc}
      </p>
    </div>
</article>`
  })
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu;
};

// function displayMenuButtons(){

// }

btnContainer.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const category =e.currentTarget.dataset;
    console.log(category);
  })
});