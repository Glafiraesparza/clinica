/*  $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      }) */

            // Efecto de scroll en el navbar - más sensible
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-custom');
    const scrolled = window.scrollY > 10; // Cambia a 10px para que sea más sensible
    
    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Inicializar estado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    }
});

// Menú móvil
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace (móvil)
document.querySelectorAll('.nav-link, .login-btn').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.menu').classList.remove('active');
    });
});

// Efecto hover mejorado para el botón de login
document.querySelector('.login-btn').addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.05)';
});

document.querySelector('.login-btn').addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    // Obtiene los valores ingresados
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Define las credenciales y páginas de destino
    const userCredentials = {
        'admin': { password: 'admin', redirect: 'Admin.html' },
        'secretaria': { password: 'secretaria', redirect: 'secretaria2.html' },
        'medico': { password: 'medico', redirect: 'PrincipalMedico.html' }
    };
    
    // Verifica si el usuario existe y la contraseña es correcta
    if (userCredentials[username] && userCredentials[username].password === password) {
        // Redirige a la página correspondiente
        window.location.href = userCredentials[username].redirect;
    } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
});