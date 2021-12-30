// modal
let 모달 = false;
const clickModal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");
const bgModal = document.querySelector(".bg-modal");

clickModal.addEventListener('click', paintModal);

function paintModal(event) {
  event.preventDefault();
  if (exptext.test(userMail.value) == false) {
    alert('이메일 형식이 올바르지 않습니다.')
  } else if (exptext.test(userMail.value) == true && 모달 == false) {
    document.querySelector('.bg-modal').className = 'bg-modal show';
    모달 = true;
  }
}

closeModal.addEventListener('click', quitModal);

function quitModal(event) {
  // event.preventDefault();
  if (모달 == true) {
    document.querySelector('.bg-modal').className = 'bg-modal';
    모달 = false;
  }
}
//헤더고정
const header = document.querySelector('#header');

function scrollFunc() {
  if (pageYOffset >= 90) {
    header.classList.add('on');
    scrollUp.classList.add('scroll-fixed');
  } else {
    header.classList.remove('on');
    scrollUp.classList.remove('scroll-fixed');
  }
}
window.addEventListener('scroll', scrollFunc);



// 탑 스크롤
const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", scrollUpFunc);


function scrollUpFunc(event) {
  event.preventDefault();
  window.scrollTo({ top:0, behavior: 'smooth' })
}


// 이메일 유효성검사
const userMail = document.querySelector("#user-mail");
const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;


