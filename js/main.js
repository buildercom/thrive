// Плавный переход к блокам
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    if (iconMenu.classList.contains('_active')){
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active')

    }
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })

  })
}

// прилипающее меню
function getBodyScrollTop() {
  var offset = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  if (offset > 300) {
    document.querySelector('#header').className = "header";
  }
  if (offset > screen.height - 300) {
    document.querySelector('#header').className = "fixed";
  }
}
window.addEventListener("scroll", getBodyScrollTop);


// меню бургер

const iconMenu = document.querySelector('.header-burger');
const menuBody = document.querySelector('.nav');
if (iconMenu){
 
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active')
  });
}