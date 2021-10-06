
function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return
    }
    this.classList.remove('playing')
}
keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend',removeTransition))

last = ""
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const div = document.querySelector(`.main[data-key="${e.keyCode}"]`)
    const key = document.querySelector( `.key[data-key="${e.keyCode}"]`)
    if(!audio){
        return
    }
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    if(last != div){
        console.log('different')
        if(last != ''){
        last.classList.remove('pressed')
        }
        div.classList.add('pressed')
    }else{
        console.log('same')
    }
    last = div

})
