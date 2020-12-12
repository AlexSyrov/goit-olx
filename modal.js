
const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    name: document.querySelector('.name-of-product'),
    photo: document.querySelector('.product-foto'),
    description: document.querySelector('.description'),
    category: document.querySelector('.category'),
    price: document.querySelector('.price'),
    phone: document.querySelector('.phone')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
;

refs.name.addEventListener('click', onName);

function onName(onQuery) {
  onQuery.preventDefault();
  console.log(onQuery.target.value);
  const query = onQuery.target.value;

  return query;
  
}


refs.description.addEventListener('click', onDescription);

function onDescription(onQuery) {
  onQuery.preventDefault();
  console.log(onQuery.target.value);
  const query = onQuery.target.value;

  return query;
  
}


refs.price.addEventListener('click', onPrice);

function onPrice(onQuery) {
  onQuery.preventDefault();
  console.log(onQuery.target.value);
  const query = onQuery.target.value;

  return query;
  
}


refs.phone.addEventListener('click', onPhone);

function onPhone(onQuery) {
  onQuery.preventDefault();
  console.log(onQuery.target.value);
  const query = onQuery.target.value;

  return query;
  
}



