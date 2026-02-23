// ===== LATENTFLOW — SHARED DATA & UTILITIES =====

const MOVIES = [
  { id:1,  title:"Interstellar",          genre:"Sci-Fi",   year:2014, rating:8.7, director:"Christopher Nolan", duration:"2h 49m", desc:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival against a dying Earth.", poster:"https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=400&q=80" },
  { id:2,  title:"The Dark Knight",       genre:"Action",   year:2008, rating:9.0, director:"Christopher Nolan", duration:"2h 32m", desc:"When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests of his heroism.", poster:"https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&q=80" },
  { id:3,  title:"Parasite",              genre:"Thriller", year:2019, rating:8.6, director:"Bong Joon-ho",      duration:"2h 12m", desc:"All unemployed, Ki-taek's family takes a keen interest in the wealthy and seemingly perfect Park family.", poster:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
  { id:4,  title:"Inception",             genre:"Sci-Fi",   year:2010, rating:8.8, director:"Christopher Nolan", duration:"2h 28m", desc:"A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind.", poster:"https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?w=400&q=80" },
  { id:5,  title:"Oppenheimer",           genre:"Drama",    year:2023, rating:8.9, director:"Christopher Nolan", duration:"3h 0m",  desc:"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.", poster:"https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=400&q=80" },
  { id:6,  title:"Blade Runner 2049",     genre:"Sci-Fi",   year:2017, rating:8.0, director:"Denis Villeneuve",  duration:"2h 44m", desc:"A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.", poster:"https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&q=80" },
  { id:7,  title:"Whiplash",              genre:"Drama",    year:2014, rating:8.5, director:"Damien Chazelle",   duration:"1h 46m", desc:"A promising young drummer enrolls at a cut-throat music conservatory where his dreams and life are put at stake.", poster:"https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&q=80" },
  { id:8,  title:"Get Out",               genre:"Horror",   year:2017, rating:7.7, director:"Jordan Peele",      duration:"1h 44m", desc:"A young African-American visits his white girlfriend's family estate, where an unsettling truth is slowly uncovered.", poster:"https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80" },
  { id:9,  title:"Mad Max: Fury Road",    genre:"Action",   year:2015, rating:8.1, director:"George Miller",     duration:"2h 0m",  desc:"In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.", poster:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
  { id:10, title:"The Grand Budapest Hotel", genre:"Comedy", year:2014, rating:8.1, director:"Wes Anderson",    duration:"1h 39m", desc:"A writer encounters the owner of an aging European hotel, who regales him with tales of the hotel's glorious past.", poster:"https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&q=80" },
  { id:11, title:"Arrival",               genre:"Sci-Fi",   year:2016, rating:7.9, director:"Denis Villeneuve",  duration:"1h 56m", desc:"A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.", poster:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80" },
  { id:12, title:"Hereditary",            genre:"Horror",   year:2018, rating:7.3, director:"Ari Aster",         duration:"2h 7m",  desc:"A grieving family is haunted by tragic and disturbing fate after the death of their secretive grandmother.", poster:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { id:13, title:"1917",                  genre:"Drama",    year:2019, rating:8.3, director:"Sam Mendes",        duration:"1h 59m", desc:"Two British soldiers are sent on a seemingly impossible mission to deliver a message that could save 1,600 of their comrades.", poster:"https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=400&q=80" },
  { id:14, title:"The Lighthouse",        genre:"Horror",   year:2019, rating:7.5, director:"Robert Eggers",     duration:"1h 49m", desc:"Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.", poster:"https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=400&q=80" },
  { id:15, title:"Joker",                 genre:"Thriller", year:2019, rating:8.4, director:"Todd Phillips",     duration:"2h 2m",  desc:"In Gotham City, mentally troubled comedian Arthur Fleck embarks on a downward spiral that leads to the creation of an iconic villain.", poster:"https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&q=80" },
  { id:16, title:"Dune",                  genre:"Sci-Fi",   year:2021, rating:8.0, director:"Denis Villeneuve",  duration:"2h 35m", desc:"Paul Atreides must travel to the most dangerous planet in the universe to ensure the future of his family and his people.", poster:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80" },
];

// ===== WATCHLIST =====
function getWatchlist() {
  try { return JSON.parse(localStorage.getItem('lf_watchlist') || '[]'); } catch { return []; }
}
function toggleWatchlist(id) {
  let wl = getWatchlist();
  wl = wl.includes(id) ? wl.filter(x => x !== id) : [...wl, id];
  localStorage.setItem('lf_watchlist', JSON.stringify(wl));
  updateWlBadge();
  return wl.includes(id);
}
function isInWatchlist(id) { return getWatchlist().includes(id); }
function updateWlBadge() {
  const el = document.getElementById('wl-badge');
  if (!el) return;
  const count = getWatchlist().length;
  el.textContent = count;
  el.style.display = count > 0 ? 'inline-flex' : 'none';
}

// ===== CARD RENDERER =====
function renderMovieCard(m) {
  const saved = isInWatchlist(m.id);
  return `
    <div class="movie-card card-anim">
      <div class="poster-wrap">
        <img src="${m.poster}" alt="${m.title}" loading="lazy"/>
        <div class="poster-overlay">
          <div class="play-btn">
            <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
          </div>
        </div>
        <div class="rating-badge">
          <svg width="10" height="10" fill="#fbbf24" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${m.rating}
        </div>
        <button class="watchlist-btn ${saved ? 'saved' : ''}" onclick="handleWatchlist(event,${m.id},this)" title="${saved ? 'Remove' : 'Save'}">
          <svg width="13" height="13" fill="${saved ? '#e63946' : 'none'}" stroke="${saved ? '#e63946' : 'currentColor'}" stroke-width="2" viewBox="0 0 24 24">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <span class="genre-pill">${m.genre}</span>
        <div class="card-title">${m.title}</div>
        <div class="card-year">${m.year} · ${m.duration}</div>
        <p class="card-desc">${m.desc}</p>
      </div>
    </div>`;
}

function handleWatchlist(e, id, btn) {
  e.stopPropagation();
  const nowSaved = toggleWatchlist(id);
  btn.classList.toggle('saved', nowSaved);
  btn.title = nowSaved ? 'Remove' : 'Save';
  const svg = btn.querySelector('svg');
  svg.setAttribute('fill', nowSaved ? '#e63946' : 'none');
  svg.setAttribute('stroke', nowSaved ? '#e63946' : 'currentColor');
}

// ===== LOGO SVG =====
const LOGO_SVG = `
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="7" fill="#e63946"/>
    <path d="M7 14C7 10.134 10.134 7 14 7s7 3.134 7 7-3.134 7-7 7-7-3.134-7-7z" fill="none" stroke="#fff" stroke-width="2"/>
    <path d="M12 11.5l5 2.5-5 2.5V11.5z" fill="#fff"/>
  </svg>`;

// ===== FOOTER =====
const FOOTER_HTML = `
  <footer class="relative-z">
    <div class="footer-inner">
      <div style="display:flex;align-items:center;gap:8px;">
        ${LOGO_SVG}
        <span style="font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:0.15em;color:#fff;">LATENTFLOW</span>
      </div>
      <p class="footer-copy">© 2025 LatentFlow. Built for cinema lovers.</p>
      <div class="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">API</a>
      </div>
    </div>
  </footer>`;
