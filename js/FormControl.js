// find form and form el
let form = document.forms['commentForm']
let star = document.forms['commentForm']['star']
let input = document.getElementById('fname')
let textArea = document.getElementById('fcomment')
let button = document.getElementById('fbutton')
// find warning texts
let errorText = document.getElementById('warning-error')
let successText = document.getElementById('warning-success')

// check form on submit
function SubmitForm() {
    // event.preventDefault()
    // check if its filled
    if (
        star.value != '' && 
        input.value.length > 1 &&
        textArea.value.length > 5
    ) {
        // show success text on successful submit
        successText.classList.remove('hide')
    } else {
        // show error warning on not filled form
        errorText.classList.remove('hide')
        input.classList.add('form-not-filled')
        textArea.classList.add('form-not-filled')
    }
}

// check form on form input
function CheckInput() {
    // check if its filled 
    if (
        star.value != '' && 
        input.value.length > 1 &&
        textArea.value.length > 5
    )  {
        // add class to the button on valid value
        button.classList.add('form-success')
        // remove all warnings
        successText.classList.add('hide')
        errorText.classList.add('hide')
        input.classList.remove('form-not-filled')
        textArea.classList.remove('form-not-filled')
    } else {
        // remove class from the button on invalid value
        button.classList.remove('form-success')
        // remove all warnings
        successText.classList.add('hide')
        input.classList.remove('form-not-filled')
        textArea.classList.remove('form-not-filled')
    }
}