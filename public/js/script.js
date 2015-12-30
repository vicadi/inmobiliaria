$(document).ready(function() {
  //menu
    $("ul.nav a").each(function(){
      var dir=$(this).attr("dir");
      if(window.location.pathname===dir){
        $(this).attr("class","active");
      }else{
        $(this).removeAttr("class", "active");
      }        
    });
  if(window.location.pathname=="/"){
    /*Cargar Slider*/
      $(function() {
        var Page = (function() {
          var $navArrows = $( '#nav-arrows' ).hide(),
            $navDots = $( '#nav-dots' ).hide(),
            $nav = $navDots.children( 'span' ),
            $shadow = $( '#shadow' ).hide(),
            slicebox = $( '#sb-slider' ).slicebox( {
              onReady : function() {
                $navArrows.show();
                $navDots.show();
                $shadow.show();
              },
              orientation : 'r',
              cuboidsCount : 5,
              disperseFactor : 20,
              autoplay: true,
              interval: 6000,
              onBeforeChange : function( pos ) {
                $nav.removeClass( 'nav-dot-current' );
                $nav.eq( pos ).addClass( 'nav-dot-current' );
              }
            }),            
            init = function() {
              initEvents();              
            },
            initEvents = function() {
              // add navigation events
              $navArrows.children( ':first' ).on( 'click', function() {
                slicebox.next();
                return false;
              });
              $navArrows.children( ':last' ).on( 'click', function() {                
                slicebox.previous();
                return false;
              });
              $nav.each( function( i ) {              
                $( this ).on( 'click', function( event ) {                  
                  var $dot = $( this );                  
                  if( !slicebox.isActive() ) {
                    $nav.removeClass( 'nav-dot-current' );
                    $dot.addClass( 'nav-dot-current' );                  
                  }                  
                  slicebox.jump( i + 1 );
                  return false;                
                });                
              });
            };
            return { init : init };
        })();
        Page.init();
      });
    /*Hover imagenes*/
      $("#informacion div img").hover(function(){
        var src=$(this).attr("src");
        src = src.split(".")[0];
        $(this).attr("src",src+"Hover.png");
      });
      $("#informacion div img").mouseleave(function(){
        var src=$(this).attr("src");
        src= src.split("Hover")[0];
        $(this).attr("src",src+".png");
      });
  }
});

function mostrar_oferta(){
  $("#oferta").css("display","inherit");
  $("#imagenes").css("display","none");
}

function mostrar_imagenes(){
  $("#oferta").css("display","none");
  $("#imagenes").css("display","inherit");
}

function subir(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
}