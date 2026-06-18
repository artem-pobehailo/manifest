(() => {
  const refs = {
    openModalBtn: document.querySelector(".menu-icon"),
    closeModalBtn: document.querySelector(".modal-list"),
    modal: document.querySelector(".backdrop"), 
  };

 
  if (refs.openModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener("click", toggleModal);
  }

  if (refs.closeModalBtn) {
    refs.closeModalBtn.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
 
    document.body.classList.toggle("no-scroll");
  }
})();