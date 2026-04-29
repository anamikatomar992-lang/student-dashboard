// 1. Initialize Icons
lucide.createIcons();

// 2. Study Progress Chart
const ctx = document.getElementById('studyChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Hours',
            data: [2, 5, 4, 8, 7, 3, 6],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { display: false }, x: { grid: { display: false } } }
    }
});