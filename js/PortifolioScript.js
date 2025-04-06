
/* Configuração Menu - Barra Lateral Abre e Fecha */

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

sidebar.classList.add('hidden');
toggleBtn.textContent = '◀';

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    toggleBtn.textContent = sidebar.classList.contains('hidden') ? '◀' : '▶';
});


/* Configuração da Página - Animação */

document.addEventListener("DOMContentLoaded", function() {
    const tecnologias = document.querySelectorAll(".caixa-tecnologia");
    tecnologias.forEach((tecnologia, index) => {
        setTimeout(() => {
            tecnologia.classList.add("fade-in");
        }, index * 200);
    });

    // Efeito de digitação
    const text = "Olá, Eu sou Victor Hugo 🖥️☕";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => {
                index = 0;
                document.getElementById("typing-text").textContent = '';
                typeEffect(); 
            }, 1000); 
        }
    }
    typeEffect();
});

/* Grafico */


document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("graficoHabilidades").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["HTML", "CSS", "JavaScript", "Node.js", "TypeScript", "Tailwind", "React", "PHP", "SQL"],
        datasets: [{
          label: "Nível de habilidade (100%)",
          data: [95, 90, 85, 70, 75, 80, 85, 65, 70],
          backgroundColor: [
            "rgba(216, 63, 3, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(236, 171, 6, 0.6)",
            "rgba(3, 160, 16, 0.6)",
            "rgba(4, 0, 255, 0.6)",
            "rgba(29, 135, 255, 0.6)",
            "rgba(0, 110, 255, 0.7)",
            "rgba(50, 138, 253, 0.6)",
            "rgba(0, 225, 255, 0.6)"
          ],
          borderColor: "rgba(0, 0, 0, 0.1)",
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1500,
          easing: "easeInOutBounce"
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  });