

// execute scrip after page load
// window.onload = function digital_fn(){

//     // toggle button
//     let toggle = document.querySelector("#nav .taggle-btn")
//     let collapse = document.querySelector("#nav .collapse")
//     let close = document.querySelector("#nav .close")

//     toggle,addEventListener('click',function(event){
//         collapse.classList.toggle('active')
//         close.classList.toggle('active')
//         //console.log(toggle)
//     });
// }


// sign up form
$("#signup").click(function() {
    $(".message").css("transform", "translateX(100%)");
    if ($(".message").hasClass("login")) {
      $(".message").removeClass("login");
    }
    $(".message").addClass("signup");
  });
  
  $("#login").click(function() {
    $(".message").css("transform", "translateX(0)");
    if ($(".message").hasClass("login")) {
      $(".message").removeClass("signup");
    }
    $(".message").addClass("login");
  });


// popup
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
// const m = document.getElementById('btn')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menu = document.querySelector(button.dataset.menuTarget)
    openMenu(menu)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.sign')
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menu = button.closest('.collapse')
    closeMenu(menu)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
}

function openMenu(menu) {
  if (menu == null) return
  menu.classList.add('active')
}

function closeMenu(menu) {
  if (menu == null) return
  menu.classList.remove('active')
}

// animation
function myFunction() {
  location.reload();
}
