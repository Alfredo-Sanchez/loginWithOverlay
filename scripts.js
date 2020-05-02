const $overlay = document.querySelector('#overlay')
const $inputList = document.querySelectorAll('input')

$inputList.forEach($input => {
    $input.addEventListener('focus', focus)
    $input.addEventListener('blur', blur)
});

$overlay.addEventListener('click', e =>{
    $overlay.classList.remove('is-active')
    const maybeIsAnInput = document.elementFromPoint(e.clientX, e.clientY)

    if(maybeIsAnInput.tagName === 'INPUT'){
        maybeIsAnInput.focus()
    }
    console.log(e.clientY, e.clientX)
})

function focus (e){
    e.target.classList.add('is-active')
    $overlay.classList.add('is-active')
    console.log('focus')
}

function blur (e){
    e.target.classList.remove('is-active')
    // $overlay.classList.remove('is-active')
    console.log('blur')
}