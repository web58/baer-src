const disableSubmitBtn = ( form ) => {
  form.querySelector( '[type="submit"]' ).setAttribute( 'disabled', 'disabled' );
};

const enableSubmitBtn = ( form ) => {
  form.querySelector( '[type="submit"]' ).removeAttribute( 'disabled' );
};

const isEscKey = ( evt ) => evt.key === 'Escape';

const addLeadZero = ( number ) => ( number < 10 ) ? `0${number}` : number;

export {
  disableSubmitBtn,
  enableSubmitBtn,
  isEscKey,
  addLeadZero,
};
