const observeSiteHeader = () => {
  const topNode = document.querySelector( '#site-top' );
  const siteHeaderStaticNode = document.querySelector( '.site-header' );
  const siteHeaderFixedNode = document.querySelector( '.site-header-fixed' );
  if ( !siteHeaderStaticNode || !siteHeaderFixedNode ) return;
  const OBSERVE_OPTIONS = {
    rootMargin: `${siteHeaderStaticNode.clientHeight}px`,
    threshold: 1
  };

  const cb = ( entries ) => {
    entries.forEach( entry => {
      if ( !entry.isIntersecting && window.innerWidth >= 1200 ) {
        siteHeaderStaticNode.classList.add( 'is-hidden' );
        siteHeaderFixedNode.classList.add( 'site-header-fixed--show' );
      } else {
        siteHeaderStaticNode.classList.remove( 'is-hidden' );
        siteHeaderFixedNode.classList.remove( 'site-header-fixed--show' );
      }
    } );
  };
  new IntersectionObserver( cb, OBSERVE_OPTIONS ).observe( topNode );
};

observeSiteHeader();
