const initDropdownMenu = () => {
  const MenuClasses = {
    Main: 'drop-menu',
    Item: 'drop-menu__item',
    ItemExpanded: 'drop-menu__item--expanded',
    ItemHasChildren: 'drop-menu__item--has-children',
    SubMenu: 'drop-menu__sub-menu',
  };

  const MENU_NODES = document.querySelectorAll( '[data-dropdown]>ul' );

  MENU_NODES.forEach( MENU => {
    const MENU_SUBMENU_NODES = MENU.querySelectorAll( 'ul' );
    const MENU_ITEM_NODES = MENU.querySelectorAll( 'li' );
    const MENU_LINK_NODES = MENU.querySelectorAll( 'a' );

    MENU.classList.add( MenuClasses.Main );

    MENU_SUBMENU_NODES.forEach( ( ul ) => {
      MENU.parentElement.dataset.dropdown === 'mobile' ? ul.classList.add( MenuClasses.SubMenu, 'anim-fade-in' ) :
        ul.classList.add( MenuClasses.SubMenu, 'anim-fade-down' );
    } );

    MENU_ITEM_NODES.forEach( ( li ) => {
      li.classList.add( MenuClasses.Item );
      if ( li.childElementCount > 1 ) {
        li.classList.add( MenuClasses.ItemHasChildren );
      }
    } );

    MENU_LINK_NODES.forEach( ( link ) => {
      if ( MENU.parentElement.dataset.dropdown === 'mobile' && link.parentElement.classList.contains( MenuClasses.ItemHasChildren ) ) {
        link.addEventListener( 'click', ( evt ) => {
          evt.preventDefault();
          const currentMenu = link.nextElementSibling;
          if ( currentMenu && !currentMenu.hasAttribute( 'style' ) ) {
            link.parentElement.classList.add( MenuClasses.ItemExpanded );
            link.nextElementSibling.style.display = 'block';
          } else {
            link.parentElement.classList.remove( MenuClasses.ItemExpanded );
            link.nextElementSibling.removeAttribute( 'style' );
          }
        } );
      }
    } );
  } );
};

initDropdownMenu();
