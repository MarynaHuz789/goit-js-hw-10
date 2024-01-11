import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector(".form")

const delayInput = document.querySelector('[name="delay"]')

form.addEventListener("submit", createPromise)

function createPromise(event) {
    event.preventDefault()
    const stateInput = document.querySelector('[name="state"]:checked')
    if (!delayInput || !stateInput) {
        return
    }

    const delay = parseInt(delayInput.value)

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const state = stateInput.value
            if (state === "rejected") {
                reject("")
            }
            else {resolve("")}
        }, delay )
    })

    promise.then(success => {
        iziToast.success({
        title: 'OK',
        titleColor: '#FFF',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#FFF',
        position: 'topRight',
        backgroundColor: '#59A10D'
      });
    }).catch(error => {
        iziToast.error({
        title: 'Error',
        titleColor: '#FFF',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#FFF',
        position: 'topRight',
        backgroundColor: '#EF4040'
      });
    })
}