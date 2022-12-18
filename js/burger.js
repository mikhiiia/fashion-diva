// function burgerMenu(selector) {
//     let menu = $(selector);
//     let button = menu.find('.burger-button', '.burger');
//     let links = menu.find('.burger-menu');
//     let overlay = menu.find('.burger-menu_overlay');
    
//     button.on('click', (e) => {
//       e.preventDefault();
//       toggleMenu();
//     });
    
//     menus.on('click', () => toggleMenu());
//     overlay.on('click', () => toggleMenu());
    
//     function toggleMenu(){
//       menu.toggleClass('burger_active');
      
//       if (menu.hasClass('burger_active')) {
//         $('body').css('overlow', 'hidden');
//       } else {
//         $('body').css('overlow', 'visible');
//       }
//     }
//   }
  
//   burgerMenu('.burger-menu');