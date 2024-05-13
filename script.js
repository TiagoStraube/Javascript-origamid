function initTabnav () {
const tabMenu = document.querySelectorAll('.jstabmenu li')
const tabContent = document.querySelectorAll('.jstabcontent section')

if (tabMenu.length && tabContent.length) {
tabContent[0].classList.add('ativo')
function ActiveNav(index) {
  tabContent.forEach((section)=>{
    section.classList.remove("ativo")
  });
  tabContent[index].classList.add('ativo')
}

tabMenu.forEach ((item , index)=>{
  item.addEventListener ('click', ()=>{
    ActiveNav(index);
  })
});
}}
initTabnav()

function initAccodion () {
const DTaccordion = document.querySelectorAll ('.js-accordion dt')
DTaccordion[0].nextElementSibling.classList.add('ativado')
DTaccordion[0].classList.add('ativado')
function dtAtivo () {
  this.classList.toggle('ativado')
 this.nextElementSibling.classList.toggle('ativado')
}

DTaccordion.forEach((item)=>{
  item.addEventListener('click', dtAtivo)
})}
initAccodion()

function InitScrolltoSection ( ){
const linksInternos=document.querySelectorAll('[href^="#"]')
function scrolltoSection (event) {
  event.preventDefault();
const href = event.target.getAttribute('href');
const section = document.querySelector(href);

section.scrollIntoView({
  behavior : 'smooth',
  block: 'start'
})
}
linksInternos.forEach((link)=>{
link.addEventListener('click' , scrolltoSection)
})
}
InitScrolltoSection();


function initScrollVisible(){
const jsScrolls = document.querySelectorAll('.js-scroll')
const metadeTela = window.innerHeight * 0.6;
function initScroll (){
jsScrolls.forEach((section)=>{
  const topSection = section.getBoundingClientRect().top
  const SelectTop = topSection - metadeTela < 0;
  if (SelectTop) {
    section.classList.add('ativo')
    console.log('ativado')
  }})}
  initScroll ()
window.addEventListener('scroll' , initScroll)
}
initScrollVisible();