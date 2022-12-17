const btn = document.querySelector('.button')
const regBtn = document.querySelector('.registr')
const regClose = document.querySelector('.registr__close')
const regOn = document.querySelector('.registr__on')
const open = document.querySelector('.open')
const clos = document.querySelector('.open__close')

btn.addEventListener('click', () => {
    regBtn.style.display = 'block'
})
regClose.addEventListener('click', (event) => {
    event.preventDefault()
    regBtn.style.display = 'none'
})
regOn.addEventListener('click', (event) => {
    event.preventDefault()
    regBtn.style.display = 'none'
    open.style.display = 'block'

})
clos.addEventListener('click', () => {
    open.style.display = 'none'
})

