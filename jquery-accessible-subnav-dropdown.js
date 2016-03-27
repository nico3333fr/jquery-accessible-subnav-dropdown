$(document).ready(function(){

   /*
    * jQuery accessible and keyboard-enhanced navigation with dropdown
    * Website: http://a11y.nicolas-hoffmann.net/subnav-dropdown/
    * License MIT: https://github.com/nico3333fr/jquery-accessible-subnav-dropdown/blob/master/LICENSE
    */
   // loading expand paragraphs
   var $nav_system = $('.js-nav-system');
   if ( $nav_system.length ) { // if there is at least one :)

      // initialization
      var $nav_system_link = $('.js-nav-system__link');
      $nav_system_link.each( function(index_to_expand) {
          var $this = $(this),
              index_lisible = index_to_expand+1,
              $subnav = $this.next('.js-nav-system__subnav');
          
          // if there is a subnav adjacent to the link
          if ($subnav.length === 1){
              $subnav.attr({
                      'data-visually-hidden': 'true'
                    });                    
             }
      });
      
      // events on main menu
      // mouse !
      $( 'body' ).on( 'mouseenter', '.js-nav-system__item', function( event ) {
           var $this = $(this),
               $subnav_link = $this.children('.js-nav-system__link'),
               $subnav = $this.children('.js-nav-system__subnav');
           
           $this.attr({
                 'data-show-sub': 'true'
                 });
           
           // show submenu
           if ($subnav.length === 1){
               $subnav.attr({
                       'data-visually-hidden': 'false'
                      });
              }
           
      })
      .on( 'mouseleave', '.js-nav-system__item', function( event ) {
           var $this = $(this),
               $subnav_link = $this.children('.js-nav-system__link'),
               $subnav = $this.children('.js-nav-system__subnav');
           
           $this.attr({
                    'data-show-sub': 'false'
                  });
           // show submenu
           if ($subnav.length === 1){
               $subnav.attr({
                       'data-visually-hidden': 'true'
                      });
              }
           
      })
      // keyboard
      .on( 'focus', '.js-nav-system__link', function( event ) {
           var $this = $(this),
               $parent = $this.parents('.js-nav-system'),
               $parent_item = $this.parents('.js-nav-system__item'),
               $subnav = $this.next('.js-nav-system__subnav');
           
           $parent_item.attr({
                        'data-show-sub': 'true'
                       });

           // hide other menus and show submenu activated
           $parent.find('.js-nav-system__subnav').attr({
                   'data-visually-hidden': 'true'
                  });

           if ($subnav.length === 1){
               $subnav.attr({
                       'data-visually-hidden': 'false'
                      });
              }
        
      })
      .on( 'focusout', '.js-nav-system__link', function( event ) {
           var $this = $(this),
               $parent = $this.parents('.js-nav-system'),
               $parent_item = $this.parents('.js-nav-system__item')/*,
               $subnav = $this.next('.js-nav-system__subnav')*/;
           
           $parent_item.attr({
                        'data-show-sub': 'false'
                       });
      })
      .on( 'keydown', '.js-nav-system__link', function( event ) {
           var $this = $(this),
               $parent = $this.parents('.js-nav-system'),
               $parent_item = $this.parents('.js-nav-system__item'),
               $subnav = $this.next('.js-nav-system__subnav');

           // event keyboard left
           if ( event.keyCode == 37 ) {
               // select previous nav-system__link
                  
               // if we are on first => activate last
               if ( $parent_item.is( ".js-nav-system__item:first-child" ) ) {
                   $parent.find(" .js-nav-system__item:last-child ").children( ".js-nav-system__link" ).focus();
                   }
                   // else activate previous
                   else {
                         $parent_item.prev().children( ".js-nav-system__link" ).focus();
                        }
               event.preventDefault();
               }
           // event keyboard right
           if ( event.keyCode == 39 ) {
               // select previous nav-system__link
                  
               // if we are on last => activate first
               if ( $parent_item.is( ".js-nav-system__item:last-child" ) ) {
                   $parent.find(" .js-nav-system__item:first-child ").children( ".js-nav-system__link" ).focus();
                   }
                   // else activate next
                   else {
                         $parent_item.next().children( ".js-nav-system__link" ).focus();
                        }
               event.preventDefault();
               }
           // event keyboard bottom
           if ( event.keyCode == 40 ) {
               // select first nav-system__subnav__link
               if ($subnav.length === 1){
                   // if submenu has been closed => reopen
                   $subnav.attr({
                           'data-visually-hidden': 'false'
                          });
                   // and select first item
                   $subnav.find(" .js-nav-system__subnav__item:first-child ").children( ".js-nav-system__subnav__link" ).focus();
                   }
              event.preventDefault();
              }

      });

      // events on submenu item
      $( 'body' ).on( 'keydown', '.js-nav-system__subnav__link', function( event ) {
           var $this = $(this),
               $subnav = $this.parents('.js-nav-system__subnav'),
               $subnav_item = $this.parents('.js-nav-system__subnav__item'),
               $nav_link = $subnav.prev('.js-nav-system__link'),
               $nav_item = $nav_link.parents('.js-nav-system__item'),
               $nav = $nav_link.parents('.js-nav-system');

           // event keyboard bottom
           if ( event.keyCode == 40 ) {
               // if we are on last => activate first
               if ( $subnav_item.is( ".js-nav-system__subnav__item:last-child" ) ) {
                   $subnav.find( ".js-nav-system__subnav__item:first-child ").children( ".js-nav-system__subnav__link" ).focus();
                  }
                  // else activate next
                  else {
                        $subnav_item.next().children( ".js-nav-system__subnav__link" ).focus();
                       }
               event.preventDefault();
               }
           // event keyboard top
           if ( event.keyCode == 38 ) {
               // if we are on first => activate last
               if ( $subnav_item.is( ".js-nav-system__subnav__item:first-child" ) ) {
                   $subnav.find(" .js-nav-system__subnav__item:last-child ").children( ".js-nav-system__subnav__link" ).focus();
                   }
                   // else activate previous
                   else {
                        $subnav_item.prev().children( ".js-nav-system__subnav__link" ).focus();
                        }
               event.preventDefault();
               }
           // event keyboard Esc
           if ( event.keyCode == 27 ) {
               // close the menu
               $nav_link.focus();                      
               $subnav.attr({
                       'data-visually-hidden': 'true'
                      });
               event.preventDefault();
               }
           // event keyboard right
           if ( event.keyCode == 39 ) {
               // select next nav-system__link
               $subnav.attr({
                       'data-visually-hidden': 'true'
                      });
                  
               // if we are on last => activate first and choose first item
               if ( $nav_item.is( ".js-nav-system__item:last-child" ) ) {
                   $next = $nav.find(" .js-nav-system__item:first-child ").children( ".js-nav-system__link" );
                   $next.focus();
                   $subnav_next = $next.next('.js-nav-system__subnav');
                   if ($subnav_next.length === 1){
                       $subnav_next.find(" .js-nav-system__subnav__item:first-child ").children( ".js-nav-system__subnav__link" ).focus();
                       }
                  }
                  // else activate next
                  else {
                        $next = $nav_item.next().children( ".js-nav-system__link" );
                        $next.focus();
                        $subnav_next = $next.next('.js-nav-system__subnav');
                        if ($subnav_next.length === 1){
                           $subnav_next.find(" .js-nav-system__subnav__item:first-child ").children( ".js-nav-system__subnav__link" ).focus();
                           }
                       }
               event.preventDefault();
              }
              // event keyboard left
           if ( event.keyCode == 37 ) {
               // select prev nav-system__link
               $subnav.attr({
                       'data-visually-hidden': 'true'
                      });
                  
               // if we are on first => activate last and choose first item
               if ( $nav_item.is( ".js-nav-system__item:first-child" ) ) {
                   $prev = $nav.find(" .js-nav-system__item:last-child ").children( ".js-nav-system__link" );
                   $prev.focus();
                   $subnav_prev = $prev.next('.js-nav-system__subnav');
                   if ($subnav_prev.length === 1){
                       $subnav_prev.find( ".js-nav-system__subnav__item:first-child ").children( ".js-nav-system__subnav__link" ).focus();
                       }
                  }
                  // else activate prev
                  else {
                        $prev = $nav_item.prev().children( ".js-nav-system__link" );
                        $prev.focus();
                        $subnav_prev = $prev.next('.js-nav-system__subnav');
                        if ($subnav_prev.length === 1){
                           $subnav_prev.find( ".js-nav-system__subnav__item:first-child ").children( ".js-nav-system__subnav__link" ).focus();
                           }
                       }
               event.preventDefault();
              }
      })
      .on( 'focus', '.js-nav-system__subnav__link', function( event ) {
           var $this = $(this),
               $subnav = $this.parents('.js-nav-system__subnav'),
               $subnav_item = $this.parents('.js-nav-system__subnav__item'),
               $nav_link = $subnav.prev('.js-nav-system__link'),
               $nav_item = $nav_link.parents('.js-nav-system__item'),
               $nav = $nav_link.parents('.js-nav-system__item');
                 
           $nav_item.attr({
                     'data-show-sub': 'true'
                    });
      })
      .on( 'focusout', '.js-nav-system__subnav__link', function( event ) {
           var $this = $(this),
               $subnav = $this.parents('.js-nav-system__subnav'),
               $subnav_item = $this.parents('.js-nav-system__subnav__item'),
               $nav_link = $subnav.prev('.js-nav-system__link'),
               $nav_item = $nav_link.parents('.js-nav-system__item'),
               $nav = $nav_link.parents('.js-nav-system__item');
                 
           $nav_item.attr({
                     'data-show-sub': 'false'
                    });
      });
      
 
   }

});
