document.addEventListener('DOMContentLoaded', () => {

  const  OpenModalProfile = document.querySelector('.modal__profile-open'),
         ModalProfile = document.querySelector('.modal__profile');
         CloseModal = ModalProfile.querySelector('.modal__close'),


         OpenModalProfile.addEventListener('click', (e) => {
            e.preventDefault();
            ModalProfile.classList.add('active');
         });

         CloseModal.addEventListener('click', (e) => {
            e.preventDefault();
            ModalProfile.classList.remove('active');
         });
})