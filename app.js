//importing menu
import { menu } from "./1-basic.js"

// get parent element
const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')

//filterbtns
//displaying all items when page loads
window.addEventListener('DOMContentLoaded',()=>{
  displayMenuItems(menu)
  displayMenuButtons();

})


//filter buttons


//displaying menu items
function displayMenuItems(menuItems){
  let displayMenu = menuItems.map((menu)=>{

    return `<article class="menu-item">
    <img src="${menu.img}" alt="${menu.title} class="photo" />
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

function displayMenuButtons(){
  const categories = menu.reduce((values,item)=>{
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
    
  },['all']);
  
  const categoryBtns = categories.map(function (category){
    return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
  }).join('');
  
  btnContainer.innerHTML = categoryBtns;
  
  const filterBtns = document.querySelectorAll('.filter-btn')
  
  filterBtns.forEach((btn)=>{
    btn.addEventListener('click',function(e){
      const category = e.currentTarget.dataset.id;
      
      const menuCategory = menu.filter((menuItem)=>{
        
        if(menuItem.category === category){
          return menuItem;
        }
      });
      
      console.log(menuCategory)
      if(category === 'all'){
      displayMenuItems(menu)
      }else {
      displayMenuItems(menuCategory)
      }
    //   console.log(menuCategory);
    });
  });

  }