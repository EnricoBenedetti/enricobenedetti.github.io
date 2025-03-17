function fix_tabs_css(){
    var menu_bar = $( "#tabs" ).children()[0]
    menu_bar.role="menu-bar"


    for (var i = 0; i < menu_bar.children.length; i++) {
        var child = menu_bar.children[i];
        child.role="menu-item"
      }
    return 
}

$( function() {
    $( "#tabs" ).tabs(); fix_tabs_css()
  } );