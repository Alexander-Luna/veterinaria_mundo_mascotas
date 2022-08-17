(function() {
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  const addCLick = () =>{
      listElements.forEach(element=>{
          element.addEventListener('click', ()=>{

              let subMenu = element.children[1];
              let height =0;
              element.classList.toggle('menu__item--active');
              // console.log(subMenu.clientHeight);

              if(subMenu.clientHeight === 0){
                  height=subMenu.scrollHeight;

              }

              subMenu.style.height=`${height}px`;

          });
      });
  }
  
  // addCLick();

  const deleteStyleHeight = () =>{

      listElements.forEach(element=>{

          if(element.children[1].getAttribute('style')){

              element.children[1].removeAttribute('style');
              element.classList.remove.apply('menu__item--active');
          }
      });
  }

  window.addEventListener('resize', ()=>{
      if(window.innerWidth > 800){
          deleteStyleHeight();

          if(list.classList.contains('menu__links--show')){
              list.classList.remove('menu__links--show')
          }


      }else{
          addCLick();
      }
  });

  if(window.innerWidth <=800){
      addCLick();
  }

  menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));
})();