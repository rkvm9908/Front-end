document.addEventListener('DOMContentLoaded', () => {
    // Chart setup
    const ctx = document.getElementById('earningsChart').getContext('2d');
    const earningsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets:[{
                label: 'Tasks',
                data: [25, 50, 70, 40, 60, 80, 60, 90, 50],
                backgroundColor: '#4caf50'
            }, {
                label: 'Revenue',
                data: [30, 40, 60, 70, 80, 90, 70, 100, 60],
                backgroundColor: '#2196f3'
            },{
                label: 'Loss',
                data: [10, 30, 20, 35, 40, 40, 15, 10, 20],
                backgroundColor: '#f40000'
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

    // Task checkbox interaction (track completed tasks)
    const taskCheckboxes = document.querySelectorAll('.task-checkbox');
    let completedTasks = 0;

    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            completedTasks = document.querySelectorAll('.task-checkbox:checked').length;
            document.getElementById('tasks-completed').innerText = completedTasks + 1_871;
        });
    });

    // Language Selector - Dynamic Text Change
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        if (selectedLanguage === 'FR') {
            document.querySelector('h1').innerText = 'Tableau de bord';
            document.querySelectorAll('h2')[0].innerText = 'Ventes d\'aujourd\'hui';
            document.querySelectorAll('h2')[1].innerText = 'Utilisateurs actifs';
            document.querySelectorAll('h2')[2].innerText = 'Téléchargements';
        } else if (selectedLanguage === 'ES') {
            document.querySelector('h1').innerText = 'Tablero';
            document.querySelectorAll('h2')[0].innerText = 'Ventas de hoy';
            document.querySelectorAll('h2')[1].innerText = 'Usuarios activos';
            document.querySelectorAll('h2')[2].innerText = 'Descargas';
        } else {
            // Default back to English
            document.querySelector('h1').innerText = 'Dashboard';
            document.querySelectorAll('h2')[0].innerText = 'Today\'s Sales';
            document.querySelectorAll('h2')[1].innerText = 'Active Users';
            document.querySelectorAll('h2')[2].innerText = 'Downloads';
        }
    });

    // Button click logging (example of interactivity)
    document.getElementById('applications-btn').addEventListener('click', () => {
        console.log('Applications button clicked');
    });

    document.getElementById('reports-btn').addEventListener('click', () => {
        console.log('Reports button clicked');
    });

    document.getElementById('projects-btn').addEventListener('click', () => {
        console.log('Projects button clicked');
    });
});
// Include Chart.js from a CDN
const ctx = document.getElementById('earningsChart').getContext('2d');

// Chart for Tasks Completed
const tasksCompletedCtx = document.getElementById('tasksCompletedChart').getContext('2d');
const tasksCompletedChart = new Chart(tasksCompletedCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], // Example months
    datasets: [{
      label: 'Tasks Completed',
      data: [120, 550, 680, 1250, 1300, 1500, 1550, 1620, 1800, 1871], // Example data
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      borderWidth: 2,
      tension: 0.3, // Smooth curves
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Chart for Engagement
const engagementCtx = document.getElementById('engagementChart').getContext('2d');
const engagementChart = new Chart(engagementCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
      label: 'Engagement',
      data: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 45661], // Example data
      borderColor: '#ff9800',
      backgroundColor: 'rgba(255, 152, 0, 0.2)',
      borderWidth: 2,
      tension: 0.3, // Smooth curves
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Chart for Balance
const balanceCtx = document.getElementById('balanceChart').getContext('2d');
const balanceChart = new Chart(balanceCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
      label: 'Balance',
      data: [120000, 125000, 130000, 135000, 150000, 160000, 175000, 200000, 210000, 218655], // Example data
      borderColor: '#2196f3',
      backgroundColor: 'rgba(33, 150, 243, 0.2)',
      borderWidth: 2,
      tension: 0.4, // Smooth curves
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  // Optionally, you can animate the bars after page load
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 500); // Delay for animation
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtn = document.querySelector('.read-more-btn');
  const moreContent = document.querySelector('.more-content');

  readMoreBtn.addEventListener('click', function() {
    if (moreContent.style.display === 'none') {
      moreContent.style.display = 'inline';
      readMoreBtn.textContent = 'Read Less';
    } else {
      moreContent.style.display = 'none';
      readMoreBtn.textContent = 'Read More';
    }
  });
});
