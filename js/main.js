// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', saved);
if (themeToggle) {
  themeToggle.textContent = saved === 'dark' ? '☀️' : '🌙';
  themeToggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

// ===== SEARCH FILTER =====
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    document.querySelectorAll('.tool-card').forEach(card => {
      const tags = card.dataset.tags || '';
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
      const match = !q || tags.includes(q) || title.includes(q) || desc.includes(q);
      card.classList.toggle('hidden', !match);
    });
    // Hide/show category headings if all cards hidden
    document.querySelectorAll('.category-block').forEach(block => {
      const visible = block.querySelectorAll('.tool-card:not(.hidden)').length;
      block.style.display = visible === 0 ? 'none' : '';
    });
  });
}

// ===== FAQ TOGGLE =====
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-a.open').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q.open').forEach(b => b.classList.remove('open'));
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
}

// ===== DRAG & DROP for tool pages =====
function initDropZone(dropZoneId, fileInputId, onFiles) {
  const zone = document.getElementById(dropZoneId);
  const input = document.getElementById(fileInputId);
  if (!zone || !input) return;

  zone.addEventListener('click', () => input.click());
  input.addEventListener('change', () => onFiles(Array.from(input.files)));

  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault(); zone.classList.remove('drag-over');
    onFiles(Array.from(e.dataTransfer.files));
  });
}

// ===== FORMAT FILE SIZE =====
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// ===== SHOW PROGRESS =====
function showProgress(pct) {
  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = pct + '%';
}

// ===== TRIGGER DOWNLOAD =====
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  a.click(); URL.revokeObjectURL(url);
}
