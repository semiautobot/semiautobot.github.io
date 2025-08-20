(function () {
  const BOARD_SIZE = 5;
  const TOTAL_CELLS = BOARD_SIZE * BOARD_SIZE;
  const CENTER_INDEX = Math.floor(TOTAL_CELLS / 2);

  const PHRASES = [
    "Let's circle back",
    "Take this offline",
    "Work in a silo",
    "Low-hanging fruit",
    "Move the needle",
    "Bandwidth issue",
    "Ping me",
    "Touch base",
    "Deep dive",
    "Synergy",
    "Blocker",
    "Leverage",
    "Win-win",
    "On my plate",
    "Action item",
    "Parking lot",
    "Buy-in",
    "Quick win",
    "Game changer",
    "Raise the bar",
    "All hands",
    "Out of scope",
    "Double-click that",
    "Rockstar",
    "Tight timeline",
    "Ballpark it",
    "Hard stop",
    "Pivot",
    "Green light",
    "Red flag",
    "Follow up",
    "Takeaway",
    "Granular",
    "Pain point",
    "Value add",
    "OKRs",
    "KPIs",
    "Heads down",
    "Roadmap",
    "In the weeds",
    "Future-proof",
    "Mission-critical",
    "Best practice",
    "Let's sync",
    "It depends",
    "Over the wall",
    "Run it up the flagpole",
    "Go-to-market",
    "Raise a ticket",
    "Noted",
    "Can you share your screen?",
    "You're on mute",
    "Let's take it from the top",
    "Next steps",
    "Quick question",
    "Boil the ocean",
    "Capacity",
    "Handoff",
    "Unblock",
    "Circle the wagons",
    "Zoom fatigue",
    "Nudging this up",
    "Outside of my domain"
  ];

  const boardEl = document.getElementById('bingoBoard');
  const newGameBtn = document.getElementById('newGameBtn');
  const overlayEl = document.getElementById('overlay');
  const playAgainBtn = document.getElementById('playAgainBtn');
  const closeOverlayBtn = document.getElementById('closeOverlayBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  let selected = new Set();

  function samplePhrases(list, count) {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count);
  }

  function createCell(index, text, isFree = false) {
    const cell = document.createElement('button');
    cell.className = 'cell';
    if (isFree) cell.classList.add('free');
    cell.setAttribute('role', 'gridcell');
    cell.setAttribute('aria-selected', isFree ? 'true' : 'false');
    cell.dataset.index = String(index);

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = isFree ? 'FREE' : text;

    const dot = document.createElement('div');
    dot.className = 'dot';

    cell.appendChild(label);
    cell.appendChild(dot);
    cell.addEventListener('click', () => {
      if (isFree) return; // center tile locked as selected
      toggleCell(index, cell);
    });

    return cell;
  }

  function renderBoard() {
    boardEl.innerHTML = '';
    selected = new Set([CENTER_INDEX]); // center pre-selected

    const picks = samplePhrases(PHRASES, TOTAL_CELLS - 1);

    let row = 0;
    for (let i = 0, pickIdx = 0; i < TOTAL_CELLS; i++) {
      if (i % BOARD_SIZE === 0) row++;
      const isFree = i === CENTER_INDEX;
      const cell = createCell(i, isFree ? '' : picks[pickIdx++], isFree);
      if (isFree) {
        cell.classList.add('selected');
      }
      cell.setAttribute('aria-rowindex', String(row));
      cell.setAttribute('aria-colindex', String(i % BOARD_SIZE + 1));
      boardEl.appendChild(cell);
    }

    boardEl.focus?.();
  }

  function toggleCell(index, cellEl) {
    const key = index;
    if (selected.has(key)) {
      selected.delete(key);
      cellEl.classList.remove('selected');
      cellEl.setAttribute('aria-selected', 'false');
    } else {
      selected.add(key);
      cellEl.classList.add('selected');
      cellEl.setAttribute('aria-selected', 'true');
    }

    const win = checkWin();
    if (win) {
      highlightWin(win);
      celebrate();
    }
  }

  function indicesToMatrixCoords(index) {
    const r = Math.floor(index / BOARD_SIZE);
    const c = index % BOARD_SIZE;
    return [r, c];
  }

  function checkWin() {
    const rowCounts = Array.from({ length: BOARD_SIZE }, () => 0);
    const colCounts = Array.from({ length: BOARD_SIZE }, () => 0);
    let diagMain = 0;
    let diagAnti = 0;

    const rowToIndices = Array.from({ length: BOARD_SIZE }, () => []);
    const colToIndices = Array.from({ length: BOARD_SIZE }, () => []);
    const mainDiagIndices = [];
    const antiDiagIndices = [];

    for (const idx of selected) {
      const [r, c] = indicesToMatrixCoords(idx);
      rowCounts[r]++;
      colCounts[c]++;
      rowToIndices[r].push(idx);
      colToIndices[c].push(idx);
      if (r === c) {
        diagMain++;
        mainDiagIndices.push(idx);
      }
      if (r + c === BOARD_SIZE - 1) {
        diagAnti++;
        antiDiagIndices.push(idx);
      }
    }

    for (let r = 0; r < BOARD_SIZE; r++) {
      if (rowCounts[r] === BOARD_SIZE) return rowToIndices[r];
    }
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (colCounts[c] === BOARD_SIZE) return colToIndices[c];
    }
    if (diagMain === BOARD_SIZE) return mainDiagIndices;
    if (diagAnti === BOARD_SIZE) return antiDiagIndices;

    return null;
  }

  function highlightWin(indices) {
    indices.forEach((i) => {
      const cell = boardEl.children[i];
      cell.classList.add('win');
    });
  }

  function celebrate() {
    overlayEl.classList.add('show');
    overlayEl.setAttribute('aria-hidden', 'false');

    try {
      const duration = 2000;
      const end = Date.now() + duration;

      (function frame() {
        const colors = ['#d7263d', '#2a9d8f', '#e9decf', '#ffdd57', '#3d405b'];
        confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors });
        confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    } catch (_) {}
  }

  function resetWinHighlight() {
    Array.from(boardEl.children).forEach((el) => el.classList.remove('win'));
  }

  function newGame() {
    overlayEl.classList.remove('show');
    overlayEl.setAttribute('aria-hidden', 'true');
    resetWinHighlight();
    renderBoard();
  }

  function closeOverlay() {
    overlayEl.classList.remove('show');
    overlayEl.setAttribute('aria-hidden', 'true');
  }

  function setTheme(mode) {
    document.body.classList.remove('severance', 'terminal');
    if (mode === 'severance') document.body.classList.add('severance');
    if (mode === 'terminal') document.body.classList.add('terminal');
    try { sessionStorage.setItem('theme', mode); } catch (_) {}
  }

  function cycleTheme() {
    const current = document.body.classList.contains('terminal')
      ? 'terminal'
      : document.body.classList.contains('severance')
      ? 'severance'
      : 'classic';
    const next = current === 'classic' ? 'severance' : current === 'severance' ? 'terminal' : 'classic';
    setTheme(next);
  }

  // hydrate theme based on session (optional: comment out to always default classic)
  try {
    const saved = sessionStorage.getItem('theme');
    if (saved) setTheme(saved);
  } catch (_) {}

  newGameBtn.addEventListener('click', newGame);
  playAgainBtn.addEventListener('click', newGame);
  closeOverlayBtn.addEventListener('click', closeOverlay);

  themeToggleBtn.addEventListener('click', cycleTheme);

  newGame();
})(); 