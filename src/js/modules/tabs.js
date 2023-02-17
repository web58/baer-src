import {
  Options,
} from './options.js';

const initTabs = ( tabsName, tabsOptions ) => {
  const tabsEl = document.querySelector( `[data-tabs=${tabsName}]` );
  if ( !tabsEl ) return;
  return new JustTabs( tabsName, tabsOptions );
};

initTabs( 'product-tabs', Options.Tabs.Product );
