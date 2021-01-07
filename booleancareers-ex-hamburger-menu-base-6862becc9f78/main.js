$(document).ready(function(){
//variabili per l'icona, l'apertura e chiusura
  var hamburger = $(".header-right a i");
  var menu = $(".hamburger-menu");
  var croce = $(".hamburger-menu a i")

// Clicco sul burger per mostrare menu
  hamburger.click(function(){
    menu.show();
  });
// Clicco sulla X per nascondere
  croce.click(function(){
    menu.hide();
  });
});
