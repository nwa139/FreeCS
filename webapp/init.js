import Alpine from "alpinejs";

export function init() {
    setTimeout(() => {
        Alpine.store("view").navigateView("home");
    }, 500);
}