import { Router } from "./router.js";

const router = new Router();
router.add(`/home`, "/pages/home.html");
router.add(`/o-universo`, "/pages/o-universo.html");
router.add(`/exploracao`, "/pages/exploracao.html");

router.handle();

window.onpopstate = () => router.handle();

document.querySelectorAll('.menu').forEach(item => {
    item.addEventListener('click', function(event) {

        event.preventDefault();  

        document.querySelectorAll('.menu').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        window.history.pushState({}, '', item.getAttribute('href'));

        router.handle();

    });
});