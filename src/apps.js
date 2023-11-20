// Menu Variables
const menuButton = document.querySelector('#menu-button')
const menuItems= document.querySelector('#menu')
const menuButtonSpans= document.querySelectorAll('#menu-button span ')
const links = document.querySelectorAll('#menu a')
// abre menu

menuButton.addEventListener('click',()=>{
    menuItems.classList.toggle('hidden')
});


 //   cerrar menu cuando habro un link 
 links.forEach((link)=>{
    link.addEventListener('click',()=>{
        document.querySelector("#menu").classList.add("hidden");
        menuButtonSpans.forEach((span) => {
            span.classList.remove("animado");
          });
       
  })
}
// cierra menu cuando maximo la ventana 
 window.onresize= function(){
    let w= window.outerWidth;
    if (w > 768){
       document.querySelector("#menu").classList.add("hidden");
       menuButtonSpans.forEach((span) => {
           span.classList.remove("animado");
         });

        }
    }
         
   