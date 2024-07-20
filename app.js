function show_error(event, el) {
    if (!event.target.value.trim()) {
        el.style.display = 'block'
    }
    else {
        el.style.display = 'none'
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    const name = document.querySelector('#validationCustomname')
    const email = document.querySelector('#validationCustomEmail')
    const message = document.querySelector('#validationCustomTextarea')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                return
            }

            form.classList.add('was-validated')
        }, false)
    })

    const invalid_name_container = document.getElementById('invalid_name')
    const invalid_email_container = document.getElementById('invalid_email')
    const invalid_message_container = document.getElementById('invalid_message')

    name.addEventListener('input', event => {
        show_error(event, invalid_name_container)

    })

    email.addEventListener('input', event => {
        show_error(event, invalid_email_container)

    })

    message.addEventListener('input', event => {
        show_error(event, invalid_message_container)

    })
})()

// Función para desplazarse hacia arriba
function scrollToHeader() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para el desplazamiento suave con duración personalizada
function smoothScroll(target, duration) {
    const targetPosition = document.querySelector(target).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'), 1000); // 1000 ms = 1 segundo
    });
});