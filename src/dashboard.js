// Update current time
function updateTime() {
  const timeElement = document.getElementById('current-time');
  const now = new Date();
  const options = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  timeElement.textContent = now.toLocaleDateString('en-US', options);
}

// Animate metrics on load
function animateMetrics() {
  const metricValues = document.querySelectorAll('.metric-value');
  metricValues.forEach(metric => {
    const target = metric.textContent;
    metric.style.opacity = '0';
    setTimeout(() => {
      metric.style.transition = 'opacity 0.5s ease-in';
      metric.style.opacity = '1';
    }, 100);
  });
}

// Animate progress bars
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
}

// Animate bars in chart
function animateBars() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    const height = bar.style.getPropertyValue('--height');
    bar.style.setProperty('--height', '0%');
    setTimeout(() => {
      bar.style.transition = 'all 0.5s ease-out';
      bar.style.setProperty('--height', height);
    }, 100 + (index * 100));
  });
}

// Add click handlers to action buttons
function setupActionButtons() {
  const actionButtons = document.querySelectorAll('.action-button');
  actionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const label = this.querySelector('.action-label').textContent;
      showNotification(`${label} clicked!`);
    });
  });
}

// Simple notification system
function showNotification(message) {
  // Remove existing notification if any
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }

  // Create notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;

  // Add animation keyframes
  if (!document.querySelector('#notification-style')) {
    const style = document.createElement('style');
    style.id = 'notification-style';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Simulate live data updates
function simulateDataUpdates() {
  setInterval(() => {
    // Update random metric
    const metrics = [
      { id: 'metric-users', range: [2400, 2500] },
      { id: 'metric-revenue', range: [44000, 46000], prefix: '$' },
      { id: 'metric-orders', range: [1250, 1350] },
      { id: 'metric-rating', range: [4.7, 4.9], decimals: 1 }
    ];

    const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
    const element = document.getElementById(randomMetric.id);
    const min = randomMetric.range[0];
    const max = randomMetric.range[1];
    const newValue = Math.random() * (max - min) + min;
    
    if (randomMetric.decimals) {
      element.textContent = (randomMetric.prefix || '') + newValue.toFixed(randomMetric.decimals);
    } else {
      element.textContent = (randomMetric.prefix || '') + Math.floor(newValue).toLocaleString();
    }
  }, 5000);
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
  updateTime();
  setInterval(updateTime, 60000); // Update time every minute
  
  animateMetrics();
  animateProgressBars();
  animateBars();
  setupActionButtons();
  simulateDataUpdates();
  
  console.log('Dashboard initialized successfully!');
});
