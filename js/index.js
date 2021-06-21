const nav = document.querySelector('nav')


window.addEventListener('scroll', ()=>{
    const scrollTop = window.scrollY
   
    if(scrollTop > window.innerHeight)
    nav.classList.add('bg-white')
    else nav.classList.remove('bg-white')
})