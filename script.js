

const splashScreen = document.querySelector('.splash-screen')
const loader = document.querySelector('.splash-screen .loader')
const wrapper = document.querySelector('.wrapper')

setInterval(()=>{
  splashScreen.style.marginTop = '-100vh'
  wrapper.style.height = 'auto'
}, 7000)

setInterval(()=>{
  loader.style.opacity = '0'
}, 3500)

// SCROLLOUT
ScrollOut({
  targets: '.about,.project-header,.contact-header'
})

// SIDEBAR REACTIVITY
const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.wrapper')
const links = document.querySelectorAll('.sidebar a')

burger.addEventListener('click', function(){
  if(burger.classList.contains('show')){
    sidebar.style.margin = "0 0 0 100%";
    burger.classList.remove('show')
  }else{
    sidebar.style.margin = "0 0 0 calc(100% - 300px)";
    burger.classList.add('show')
  }

})

main.addEventListener('click', function(){
  if(burger.classList.contains('show')){
    sidebar.style.margin = "0 0 0 100%";
    burger.classList.remove('show')
  }
})

console.log(links)
links.forEach(link => {
  link.addEventListener('click', function(){
    if(burger.classList.contains('show')){
      sidebar.style.margin = "0 0 0 100%";
      burger.classList.remove('show')
    }
  })
})

  


// SCROLL INDICATOR
const navheader = document.querySelector('.logo-burger')
let lastScroll = 0;

window.onscroll = function(){
  const progressBar = document.querySelector('.progress')
  const scrollDown = document.querySelector('.scroll-down')

  const position = document.documentElement.scrollTop
  const calcHeight = document.documentElement.scrollHeight
  const scroll = position*100/calcHeight

  progressBar.style.width = scroll + 20 + 'vw'
  if(position==0){
    progressBar.style.width = '0'
    scrollDown.style.display = "block";
  }
  else {
    scrollDown.style.display = "none";
  }

  // NAVHEADER SCROLL
  let currentScroll = window.pageYOffset
  if(lastScroll < currentScroll){
    navheader.style.marginTop = "-70px"
  }else{
    navheader.style.marginTop = "0px"
  }
  lastScroll = currentScroll
}

// LIGHT/DARK MODE
const toggle = document.querySelector('.theme-toggle')

toggle.addEventListener('click', ()=>{
  document.body.classList.toggle('light-theme')
  if(document.body.classList.contains('light-theme')){
    toggle.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>'
  }else{
    toggle.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>'
  }
})