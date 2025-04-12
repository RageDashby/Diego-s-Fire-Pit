document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });
});

function cambioDeMenu(menuId) {
  // Remover clases activas
  document.querySelectorAll('.menu-section').forEach(section => {
      section.classList.remove('active-section');
  });
  document.querySelectorAll('.menu-btn').forEach(btn => {
      btn.classList.remove('active');
  });

  // Agregar clases activas
  document.getElementById(menuId).classList.add('active-section');
  document.querySelector(`button[onclick="cambioDeMenu('${menuId}')"]`).classList.add('active');
}

// Versión alternativa compatible si usabas addEventListener
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-btn').forEach(button => {
      button.addEventListener('click', (e) => {
          const menuId = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
          cambioDeMenu(menuId);
      });
  });
});

//Formulario
function Reserva(event) {
  event.preventDefault();
  
  const formData = {
    nombre: document.getElementById('nombre').value,
    horario: document.getElementById('horario').value,
    sucursal: document.getElementById('sucursal').value,
    personas: document.getElementById('personas').value,
    telefono: document.getElementById('telefono').value
  };

  // Mostrar popup
  const popup = document.getElementById('reservaPopup');
  const detalles = document.getElementById('detallesReserva');
  
  detalles.innerHTML = `
    <strong>Nombre:</strong> ${formData.nombre}<br>
    <strong>Horario:</strong> ${new Date(formData.horario).toLocaleString()}<br>
    <strong>Sucursal:</strong> ${formData.sucursal}<br>
    <strong>Personas:</strong> ${formData.personas}<br>
    <strong>Teléfono:</strong> ${formData.telefono}
  `;

  popup.style.display = 'flex';

  // Limpiar formulario
  document.getElementById('reservaForm').reset();
}

// Cerrar popup
document.querySelector('.close-popup').addEventListener('click', () => {
  document.getElementById('reservaPopup').style.display = 'none';
});

// Cerrar al hacer click fuera del popup
window.addEventListener('click', (event) => {
  const popup = document.getElementById('reservaPopup');
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});