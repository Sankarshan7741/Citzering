let data = JSON.parse(localStorage.getItem('citiesData')) || [];
if (data.length === 0) {
  document.querySelector('.dashboard-container').innerHTML = `<h2 style="text-align:center;margin-top:40px;color:#ff6666">⚠️ No data found. Please visit the map first.</h2>`;
  throw new Error("No data");
}

const total = data.length;
const critical = data.filter(c => c.firCount > 1000).length;
const pendingTotal = data.reduce((s, c) => s + (c.pendingFIR || 0), 0);
const totalFIRs = data.reduce((s, c) => s + c.firCount, 0);
const resolutionRate = totalFIRs > 0 ? ((1 - (pendingTotal / totalFIRs)) * 100).toFixed(1) : "0.0";

document.getElementById('d-total').textContent = total;
document.getElementById('d-critical').textContent = critical;
document.getElementById('d-pending').textContent = pendingTotal;
document.getElementById('d-rate').textContent = `${resolutionRate}%`;

const sorted = [...data].sort((a,b) => b.firCount - a.firCount);

// Bar Chart
new Chart(document.getElementById('barChart').getContext('2d'), {
  type: 'bar',
  data: {
    labels: sorted.slice(0, 8).map(c => c.city),
    datasets: [{ label: 'Total FIRs', data: sorted.slice(0, 8).map(c => c.firCount), backgroundColor: '#00ffff', borderRadius: 6 }]
  },
  options: { responsive: true, plugins: { title: { display: true, text: 'Top 8 Cities by FIR Count', color: '#fff' }, legend: { display: false } }, scales: { y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#aaa' } }, x: { ticks: { color: '#aaa' } } } }
});

// Doughnut Chart
const statusCounts = { Critical: 0, 'High Risk': 0, Moderate: 0, Safe: 0 };
data.forEach(c => {
  if (c.firCount > 1000) statusCounts.Critical++;
  else if (c.firCount > 600) statusCounts['High Risk']++;
  else if (c.firCount > 300) statusCounts.Moderate++;
  else statusCounts.Safe++;
});

new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: { labels: Object.keys(statusCounts), datasets: [{ data: Object.values(statusCounts), backgroundColor: ['#ff3333', '#ff9900', '#ffcc00', '#00cc66'], borderWidth: 0 }] },
  options: { responsive: true, plugins: { title: { display: true, text: 'Danger Level Distribution', color: '#fff' }, legend: { position: 'bottom', labels: { color: '#ccc' } } } }
});

// Table
function renderTable(filter = '') {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  data.filter(c => c.city.toLowerCase().includes(filter.toLowerCase()))
      .sort((a,b) => b.firCount - a.firCount)
      .forEach((c, i) => {
        const level = c.firCount > 1000 ? 'Critical' : c.firCount > 600 ? 'High Risk' : c.firCount > 300 ? 'Moderate' : 'Safe';
        const cls = c.firCount > 1000 ? 'critical' : c.firCount > 600 ? 'high-risk' : c.firCount > 300 ? 'moderate' : 'safe';
        tbody.innerHTML += `<tr style="animation: fadeInUp 0.3s ease forwards ${i*0.05}s; opacity:0;">
          <td>${c.city}</td><td>${c.firCount}</td><td>${c.pendingFIR}</td>
          <td><span class="status ${cls}">${level}</span></td>
          <td>${c.lat.toFixed(4)}, ${c.lng.toFixed(4)}</td></tr>`;
      });
}
renderTable();
document.getElementById('searchTable').addEventListener('input', (e) => renderTable(e.target.value));