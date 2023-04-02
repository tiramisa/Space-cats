(() => {
  const refs = {
    openModalHeaderBtn: document.querySelector('[buy-now-header-modal-open]'),
    openModalBtn: document.querySelector('[buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[buy-now-modal-close]'),
    modal: document.querySelector('[buy-now-modal]'),
    body: document.querySelector('[data-body]'),
  };

  refs.openModalHeaderBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
