export const Modal = {
    btnClose: document.querySelector(".modal button.close"),
    message: document.querySelector(".modal .title span"),
    wrapper: document.querySelector(".modal-wrapper"),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.btnClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
    if(event.key === 'Escape'){
        Modal.close()
    }    
}