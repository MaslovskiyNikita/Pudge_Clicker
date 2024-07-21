export class Modal {
    constructor(modalId, openBtnId, closeBtnId) {
        this.modal = document.getElementById(modalId);
        this.openBtn = document.getElementById(openBtnId);
        this.closeBtn = document.getElementById(closeBtnId);

        this.init();
    }

    init() {
        this.openBtn.onclick = () => this.open();
        this.closeBtn.onclick = () => this.close();
        window.onclick = (event) => this.outsideClick(event);
    }

    open() {
        this.modal.style.display = "block";
    }

    close() {
        this.modal.style.display = "none";
    }

    outsideClick(event) {
        if (event.target == this.modal) {
            this.close();
        }
    }
}

// Инициализация модального окна
const modal = new Modal("modal", "BOOSTERS", "closeModalBtn");