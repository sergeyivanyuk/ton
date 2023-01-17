document.addEventListener('DOMContentLoaded', () => {

  const  OpenModalProfile = document.querySelectorAll('.item'),
         ModalProfile = document.querySelector('.modal__profile');
         CloseModal = ModalProfile.querySelector('.modal__close'),


         OpenModalProfile.forEach(item => {
            item.addEventListener('click', (e) => {
               e.preventDefault();
               ModalProfile.classList.add('active');
            });
            
         });

         CloseModal.addEventListener('click', (e) => {
            e.preventDefault();
            ModalProfile.classList.remove('active');
         });
})