document.querySelector('.form-grid').addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    console.log('form is submitting')

    const nameInput = document.querySelector('#name').value
    const emailInput = document.querySelector('#email').value
    const commentsInput = document.querySelector('#comments').value

    if (
        nameInput.length === 0 &&
        emailInput.length === 0 &&
        commentsInput.length === 0
    ) {
        document.querySelector('.error').classList.add('visible')
        e.preventDefault()
    }
}