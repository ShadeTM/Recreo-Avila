// Efecto de sombra en la barra de navegación al hacer scroll
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Abrir/Cerrar menú en dispositivos móviles
document.getElementById('navToggle').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('open');
});

// Cerrar el menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Cambiar pestañas de categorías en el Menú
function showMenu(cat, btn) {
  document.querySelectorAll('.menu-items').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.menu-cat-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('menu-' + cat).classList.add('active');
  btn.classList.add('active');
}

// Lógica del formulario de reservas para enviar por WhatsApp
function enviarReservaWsp(e) {
  e.preventDefault();
  const nombre = document.getElementById('f-nombre').value;
  const tel = document.getElementById('f-tel').value;
  const fecha = document.getElementById('f-fecha').value || 'No especificado';
  const personas = document.getElementById('f-personas').value || 'No especificado';
  const evento = document.getElementById('f-evento').value || 'No especificado';
  const mensaje = document.getElementById('f-mensaje').value || '';

  // Validación básica para evitar mensajes vacíos
  if(!nombre || !tel) {
      alert("Por favor, ingresa tu nombre y teléfono para poder atender tu reserva.");
      return; 
  }

  const txt = `Hola, quisiera hacer una reserva en el Recreo Ávila JBL:

👤 Nombre: ${nombre}
📞 Teléfono: ${tel}
📅 Fecha: ${fecha}
👥 Personas: ${personas}
🎉 Tipo de evento: ${evento}
💬 Mensaje: ${mensaje}`;

  window.open(`https://wa.me/51958730943?text=${encodeURIComponent(txt)}`, '_blank');
}

// Animación Fade-in al hacer scroll hacia abajo
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Establecer la fecha mínima de reserva al día de hoy
const dateInput = document.getElementById('f-fecha');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}