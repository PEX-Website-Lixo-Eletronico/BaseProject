// script.js

document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');

    // Simulating a map loading function
    function loadMap() {
        const mapHtml = `
            <iframe width="100%" height="400px" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000!2d-43.2312098!3d-22.9063099!2m3!1f0!2f0!3f0!3m2!1j1!2j1!4f13.1!3m3!1m2!1s0x94ccdbb7d3415f%3A0x5f7d3b5f0a4d5f8f!2sInstituto+Federal+de+Florian%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1667448133050!6m1!1bI" frameborder="0" allowfullscreen></iframe>
        `;
        mapContainer.innerHTML = mapHtml;
    }

    // Simulando botão de click
    document.querySelector('#load-map').addEventListener('click', loadMap);

    // Exemplo de interação
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#e9ecef';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '#fff';
        });
    });

    // Exemplo de criação do chart usando Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Quantidade de Lixo Eletrônico Reciclado',
                data: [150, 120, 180, 190, 160, 170, 175, 185, 195, 200, 205, 210],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
