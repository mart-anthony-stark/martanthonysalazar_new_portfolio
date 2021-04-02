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