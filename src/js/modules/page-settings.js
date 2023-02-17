const initNewsGrid = () => {
  const newsListNode = document.querySelector( '[data-grid-list="news-main"]' );
  if ( !newsListNode ) return;

  switch ( newsListNode.children.length ) {
    case 1:
      newsListNode.classList.add( 'news-main__grid--one-child' );
      newsListNode.children[ 0 ].classList.add( 'news-card--wide', 'news-card--one' );
      break;
    case 2:
      newsListNode.classList.add( 'news-main__grid--two-child' );
      break;
    case 3:
      newsListNode.classList.add( 'news-main__grid--three-child' );
      newsListNode.children[ 2 ].classList.add( 'news-card--wide' );
      break;
  }
};

const initAccentMessengers = () => {
  const MESENGERS_NODES = document.querySelectorAll( '[data-accent-messengers]' );
  if ( MESENGERS_NODES.length < 1 ) return;

  MESENGERS_NODES.forEach( node => {
    node.querySelector( '.messengers' ).classList.add( 'messengers--accent' );
  } );
};

const refreshPageGalleries = () => {
  const galleryElements = document.querySelectorAll( '[data-fslightbox]' );
  if ( galleryElements.length < 1 ) return;
  refreshFsLightbox(); // eslint-disable-line
};

const initPageSettings = () => {
  initAccentMessengers();
  initNewsGrid();
  refreshPageGalleries();
};

initPageSettings();
