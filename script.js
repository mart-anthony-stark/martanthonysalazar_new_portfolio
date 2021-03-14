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