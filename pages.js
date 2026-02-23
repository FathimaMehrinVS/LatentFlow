// ===== LATENTFLOW — ALL PAGE TEMPLATES =====

// ─── HOME ───────────────────────────────────────────────────────────────────
const PageHome = {
  template: () => `
    <!-- HERO -->
    <section class="relative-z" style="padding:5rem 1.5rem 3rem;overflow:visible;">
      <div style="max-width:1280px;margin:0 auto;overflow:visible;">
        <div style="max-width:900px;">
          <div class="hero-badge enter">
            <span class="dot-pulse"></span>
            Powered by AI · Real-Time Picks
          </div>
          <h1 class="enter2" style="font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,8vw,7.5rem);line-height:0.95;letter-spacing:0.03em;background:linear-gradient(135deg,#fff 0%,#c9cdd6 55%,#e63946 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1.2rem;overflow:visible;white-space:normal;">
            AI Movie<br/>Recommendation<br/>System
          </h1>
          <p class="hero-sub enter3">
            Tell us what you love — LatentFlow scans thousands of films and surfaces the ones you'll actually finish. No more endless scrolling.
          </p>
          <div class="search-panel enter4">
            <div style="display:flex;flex-wrap:wrap;gap:.75rem;">
              <div style="flex:1;min-width:200px;position:relative;">
                <svg style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input type="text" id="homeSearch" class="input-field" style="padding-left:44px;" placeholder="Movie, director, or keyword..."/>
              </div>
              <div style="position:relative;min-width:170px;">
                <svg style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:#6b7280;pointer-events:none;" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M4 6h16M7 12h10M10 18h4"/>
                </svg>
                <select id="homeGenre" class="input-field" style="padding-left:36px;appearance:none;cursor:pointer;">
                  <option value="">All Genres</option>
                  <option value="Action">Action</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Drama">Drama</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Horror">Horror</option>
                  <option value="Comedy">Comedy</option>
                </select>
              </div>
              <button class="btn-main" id="homeGetBtn">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
                Get Recommendations
              </button>
            </div>
            <div style="margin-top:1rem;display:flex;flex-wrap:wrap;align-items:center;gap:8px;">
              <span style="font-size:.75rem;color:#4b5563;">Trending:</span>
              <span class="quick-tag" data-search="Interstellar">Interstellar</span>
              <span class="quick-tag" data-search="Inception">Inception</span>
              <span class="quick-tag" data-search="Parasite">Parasite</span>
              <span class="quick-tag" data-search="Dune">Dune</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <div class="stats-strip relative-z">
      <div class="stats-inner">
        <div><div class="stat-num">10K+</div><div class="stat-label">Movies Indexed</div></div>
        <div><div class="stat-num">94%</div><div class="stat-label">Match Accuracy</div></div>
        <div><div class="stat-num">50K+</div><div class="stat-label">Happy Viewers</div></div>
        <div><div class="stat-num">Real‑Time</div><div class="stat-label">AI Analysis</div></div>
      </div>
    </div>

    <!-- RESULTS -->
    <section class="relative-z" style="padding:4rem 1.5rem;" id="homeResults">
      <div style="max-width:1280px;margin:0 auto;">
        <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:2rem;flex-wrap:wrap;gap:1rem;">
          <div>
            <div class="section-label" id="homeLabel">Featured Picks</div>
            <div class="accent-line"></div>
            <h2 class="section-title" id="homeTitle">Handpicked for You</h2>
          </div>
          <button class="btn-ghost" id="viewAllBtn" style="font-size:.85rem;">
            View All Movies
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div class="movie-grid" id="homeGrid"></div>
      </div>
    </section>

    <!-- WHY -->
    <section class="relative-z" style="padding:4rem 1.5rem;border-top:1px solid var(--border);">
      <div style="max-width:1280px;margin:0 auto;text-align:center;">
        <div class="section-label" style="margin-bottom:.5rem;">Why LatentFlow?</div>
        <div class="accent-line" style="margin:0 auto 1rem;"></div>
        <h2 class="section-title" style="margin-bottom:1rem;">Smarter Than Any Algorithm</h2>
        <p style="color:var(--text-muted);line-height:1.8;margin-bottom:2rem;max-width:520px;margin-left:auto;margin-right:auto;">
          LatentFlow understands mood, context, and cinematic DNA — not just genre tags. Find your next favourite in seconds.
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1.25rem;max-width:800px;margin:0 auto;">
          <div class="feature-card card-anim"><div class="feature-icon">🎬</div><div class="feature-title">Smart Match</div><div class="feature-desc">Context-aware recommendations based on your taste profile.</div></div>
          <div class="feature-card card-anim"><div class="feature-icon">⚡</div><div class="feature-title">Instant</div><div class="feature-desc">Results in milliseconds — zero loading screens.</div></div>
          <div class="feature-card card-anim"><div class="feature-icon">🔖</div><div class="feature-title">Watchlist</div><div class="feature-desc">Save films and never forget what to watch next.</div></div>
        </div>
      </div>
    </section>
  `,

  init() {
    // Initial render
    this._render(MOVIES.sort(() => .5 - Math.random()).slice(0, 6));

    document.getElementById('homeGetBtn').addEventListener('click', () => this._recommend());
    document.getElementById('homeSearch').addEventListener('keydown', e => { if (e.key === 'Enter') this._recommend(); });

    document.querySelectorAll('.quick-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        document.getElementById('homeSearch').value = tag.dataset.search;
        this._recommend();
      });
    });

    document.getElementById('viewAllBtn').addEventListener('click', () => Router.navigate('movies'));
  },

  _recommend() {
    const q   = document.getElementById('homeSearch').value.trim();
    const genre = document.getElementById('homeGenre').value;
    let results = MOVIES;
    if (genre) results = results.filter(m => m.genre === genre);
    if (q) {
      const ql = q.toLowerCase();
      results = results.filter(m =>
        m.title.toLowerCase().includes(ql) ||
        m.desc.toLowerCase().includes(ql) ||
        m.genre.toLowerCase().includes(ql) ||
        m.director.toLowerCase().includes(ql)
      );
    }
    results = results.sort(() => .5 - Math.random()).slice(0, 6);
    if (!results.length) results = MOVIES.sort(() => .5 - Math.random()).slice(0, 6);
    document.getElementById('homeLabel').textContent = `AI Results · ${results.length} Picks`;
    document.getElementById('homeTitle').textContent = q ? `Best Matches for "${q}"` : genre ? `Top ${genre} Films` : 'Recommended for You';
    document.getElementById('homeResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
    this._render(results);
  },

  _render(list) {
    document.getElementById('homeGrid').innerHTML = list.map(renderMovieCard).join('');
  }
};

// ─── MOVIES ──────────────────────────────────────────────────────────────────
const PageMovies = {
  activeGenre: '',
  activeSort: 'rating',

  template: () => `
    <section class="relative-z" style="padding:5rem 1.5rem 2rem;">
      <div style="max-width:1280px;margin:0 auto;">
        <div class="hero-badge enter"><span class="dot-pulse"></span>Full Library</div>
        <h1 class="hero-title enter2" style="font-size:clamp(2.8rem,7vw,6rem);">
          All Movies <span id="moviesCount" style="font-size:1.2rem;font-family:'DM Sans',sans-serif;font-weight:700;background:rgba(230,57,70,.15);border:1px solid rgba(230,57,70,.25);color:#e63946;padding:3px 14px;border-radius:100px;letter-spacing:.04em;vertical-align:middle;"></span>
        </h1>
        <p class="hero-sub enter3" style="margin-bottom:0;">Browse our curated library. Filter by genre and sort to find your perfect watch.</p>
      </div>
    </section>

    <!-- FILTER BAR -->
    <div class="relative-z" style="padding:0 1.5rem 2rem;">
      <div style="max-width:1280px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
        <div style="display:flex;flex-wrap:wrap;gap:8px;" id="moviesGenreBar">
          <button class="genre-filter-btn active" data-genre="">All</button>
          <button class="genre-filter-btn" data-genre="Action">Action</button>
          <button class="genre-filter-btn" data-genre="Thriller">Thriller</button>
          <button class="genre-filter-btn" data-genre="Drama">Drama</button>
          <button class="genre-filter-btn" data-genre="Sci-Fi">Sci-Fi</button>
          <button class="genre-filter-btn" data-genre="Horror">Horror</button>
          <button class="genre-filter-btn" data-genre="Comedy">Comedy</button>
        </div>
        <select class="sort-select" id="moviesSort">
          <option value="rating">Rating ↓</option>
          <option value="year">Year ↓</option>
          <option value="title">Title A-Z</option>
        </select>
      </div>
    </div>

    <section class="relative-z" style="padding:0 1.5rem 5rem;">
      <div style="max-width:1280px;margin:0 auto;">
        <div class="movie-grid-wide" id="moviesGrid"></div>
      </div>
    </section>
  `,

  init() {
    this.activeGenre = '';
    this.activeSort  = 'rating';

    document.getElementById('moviesGenreBar').addEventListener('click', e => {
      const btn = e.target.closest('.genre-filter-btn');
      if (!btn) return;
      document.querySelectorAll('.genre-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.activeGenre = btn.dataset.genre;
      this._apply();
    });

    document.getElementById('moviesSort').addEventListener('change', e => {
      this.activeSort = e.target.value;
      this._apply();
    });

    this._apply();
  },

  _apply() {
    let list = this.activeGenre ? MOVIES.filter(m => m.genre === this.activeGenre) : [...MOVIES];
    if (this.activeSort === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (this.activeSort === 'year') list.sort((a, b) => b.year - a.year);
    else list.sort((a, b) => a.title.localeCompare(b.title));
    document.getElementById('moviesCount').textContent = list.length;
    document.getElementById('moviesGrid').innerHTML =
      list.length ? list.map(renderMovieCard).join('') :
        `<div class="empty-state"><h3>No Movies Found</h3><p>Try a different genre.</p></div>`;
  }
};

// ─── SEARCH ───────────────────────────────────────────────────────────────────
const PageSearch = {
  searchQuery: '',
  activeGenre: '',

  template: () => `
    <div class="relative-z" style="min-height:300px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:4.5rem 1.5rem 2.5rem;">
      <div class="hero-badge enter" style="margin-bottom:1.5rem;"><span class="dot-pulse"></span>AI-Powered Search</div>
      <h1 class="hero-title enter2" style="font-size:clamp(2.5rem,6vw,5rem);margin-bottom:1.5rem;">Find Your<br/>Perfect Film</h1>
      <div class="enter3" style="width:100%;max-width:680px;position:relative;">
        <svg style="position:absolute;left:18px;top:50%;transform:translateY(-50%);color:#4b5563;pointer-events:none;" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input type="text" id="searchInput" style="width:100%;background:rgba(15,19,24,.9);border:1.5px solid rgba(255,255,255,.1);border-radius:16px;padding:18px 56px 18px 54px;color:#e8eaf0;font-family:'DM Sans',sans-serif;font-size:1.1rem;outline:none;transition:border-color .25s,box-shadow .25s;backdrop-filter:blur(20px);" placeholder="Movie title, genre, director, mood..."/>
        <button id="searchClearBtn" style="position:absolute;right:14px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.07);border:none;border-radius:6px;color:#6b7280;width:30px;height:30px;cursor:pointer;font-size:1rem;display:none;align-items:center;justify-content:center;transition:background .2s;">✕</button>
      </div>
      <div class="enter4" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:1.25rem;" id="searchChips">
        <span class="filter-chip active" data-genre="">All</span>
        <span class="filter-chip" data-genre="Action">Action</span>
        <span class="filter-chip" data-genre="Thriller">Thriller</span>
        <span class="filter-chip" data-genre="Drama">Drama</span>
        <span class="filter-chip" data-genre="Sci-Fi">Sci-Fi</span>
        <span class="filter-chip" data-genre="Horror">Horror</span>
        <span class="filter-chip" data-genre="Comedy">Comedy</span>
      </div>
    </div>

    <section class="relative-z" style="padding:0 1.5rem 5rem;">
      <div style="max-width:1280px;margin:0 auto;">
        <div id="searchSuggestions">
          <div style="margin-bottom:.6rem;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:#4b5563;">Popular searches</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:2rem;">
            <span class="quick-tag" data-sq="Christopher Nolan">Christopher Nolan</span>
            <span class="quick-tag" data-sq="Denis Villeneuve">Denis Villeneuve</span>
            <span class="quick-tag" data-sq="Sci-Fi">Sci-Fi</span>
            <span class="quick-tag" data-sq="Thriller">Thriller</span>
            <span class="quick-tag" data-sq="2023">Latest 2023</span>
            <span class="quick-tag" data-sq="space">Space</span>
          </div>
          <div class="section-label">Top Rated</div>
          <div class="accent-line"></div>
          <h3 class="section-title" style="font-size:2rem;margin-bottom:1.5rem;">Start Exploring</h3>
        </div>
        <div id="searchMeta" style="font-size:.85rem;color:var(--text-muted);margin-bottom:1.5rem;display:none;"></div>
        <div class="movie-grid-wide" id="searchGrid"></div>
      </div>
    </section>
  `,

  init() {
    this.searchQuery = '';
    this.activeGenre = '';

    const input    = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClearBtn');

    input.addEventListener('input', () => {
      this.searchQuery = input.value.trim();
      clearBtn.style.display = this.searchQuery ? 'flex' : 'none';
      this._apply();
    });
    input.addEventListener('keydown', e => { if (e.key === 'Escape') { input.value = ''; this.searchQuery = ''; clearBtn.style.display='none'; this._apply(); } });
    clearBtn.addEventListener('click', () => { input.value = ''; this.searchQuery = ''; clearBtn.style.display='none'; this._apply(); });

    input.addEventListener('focus', () => { input.style.borderColor='rgba(230,57,70,.6)'; input.style.boxShadow='0 0 0 4px rgba(230,57,70,.1),0 20px 60px rgba(0,0,0,.4)'; });
    input.addEventListener('blur',  () => { input.style.borderColor='rgba(255,255,255,.1)'; input.style.boxShadow=''; });

    document.getElementById('searchChips').addEventListener('click', e => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      this.activeGenre = chip.dataset.genre;
      this._apply();
    });

    document.querySelectorAll('[data-sq]').forEach(tag => {
      tag.addEventListener('click', () => {
        input.value = tag.dataset.sq;
        this.searchQuery = tag.dataset.sq;
        clearBtn.style.display = 'flex';
        this._apply();
      });
    });

    // init grid: top rated
    document.getElementById('searchGrid').innerHTML = [...MOVIES].sort((a,b) => b.rating-a.rating).map(renderMovieCard).join('');
    input.focus();
  },

  _apply() {
    let results = [...MOVIES];
    if (this.activeGenre) results = results.filter(m => m.genre === this.activeGenre);
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      results = results.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.desc.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q) ||
        m.director.toLowerCase().includes(q) ||
        String(m.year).includes(q)
      );
    }
    const hasQuery = this.searchQuery || this.activeGenre;
    document.getElementById('searchSuggestions').style.display = hasQuery ? 'none' : 'block';
    const meta = document.getElementById('searchMeta');
    meta.style.display = hasQuery ? 'block' : 'none';
    if (hasQuery) {
      meta.innerHTML = `Found <strong style="color:#e8eaf0;">${results.length} film${results.length!==1?'s':''}</strong>${this.searchQuery ? ` for "<strong style="color:#e8eaf0;">${this.searchQuery}</strong>"` : ''}${this.activeGenre ? ` in <strong style="color:#e8eaf0;">${this.activeGenre}</strong>` : ''}`;
    }
    document.getElementById('searchGrid').innerHTML =
      results.length ? results.map(renderMovieCard).join('') :
        `<div class="empty-state"><h3>No Results</h3><p>Try a different term or genre.</p></div>`;
  }
};

// ─── WATCHLIST ────────────────────────────────────────────────────────────────
const PageWatchlist = {
  template: () => `
    <section class="relative-z" style="padding:5rem 1.5rem 2rem;">
      <div style="max-width:1280px;margin:0 auto;">
        <div class="hero-badge enter"><span class="dot-pulse"></span>Your Collection</div>
        <div style="display:flex;align-items:baseline;gap:1rem;flex-wrap:wrap;">
          <h1 class="hero-title enter2" style="font-size:clamp(2.8rem,7vw,6rem);">My Watchlist</h1>
          <div class="enter2">
            <span id="wlPageCount" style="font-family:'Bebas Neue',sans-serif;font-size:3rem;background:linear-gradient(135deg,#e63946,#f4a261);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;"></span>
            <span style="color:var(--text-muted);font-size:.9rem;margin-left:4px;">saved</span>
          </div>
        </div>
        <p class="hero-sub enter3" style="margin-bottom:1.5rem;">Films you've bookmarked. Never lose track of what to watch next.</p>
        <div id="wlClearWrap" style="display:none;">
          <button id="wlClearBtn" style="background:rgba(230,57,70,.1);border:1px solid rgba(230,57,70,.2);color:#e63946;padding:8px 18px;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:.85rem;font-weight:500;cursor:pointer;">Clear Watchlist</button>
        </div>
      </div>
    </section>

    <section class="relative-z" style="padding:0 1.5rem 3rem;">
      <div style="max-width:1280px;margin:0 auto;">
        <div class="movie-grid-wide" id="wlGrid"></div>
      </div>
    </section>

    <section class="relative-z" id="wlSuggest" style="padding:0 1.5rem 5rem;display:none;">
      <div style="max-width:1280px;margin:0 auto;">
        <div class="section-label">Suggestions</div>
        <div class="accent-line"></div>
        <h2 class="section-title" style="margin-bottom:2rem;">Start Adding Films</h2>
        <div class="movie-grid-wide" id="wlSuggestGrid"></div>
      </div>
    </section>
  `,

  init() {
    this._render();
    document.getElementById('wlClearBtn')?.addEventListener('click', () => {
      if (confirm('Clear your entire watchlist?')) {
        localStorage.removeItem('lf_watchlist');
        updateWlBadge();
        this._render();
      }
    });
  },

  _render() {
    const wl   = getWatchlist();
    const saved = MOVIES.filter(m => wl.includes(m.id));
    document.getElementById('wlPageCount').textContent = saved.length;
    const clearWrap   = document.getElementById('wlClearWrap');
    const suggestSec  = document.getElementById('wlSuggest');
    const grid        = document.getElementById('wlGrid');

    if (saved.length === 0) {
      clearWrap.style.display  = 'none';
      suggestSec.style.display = 'block';
      grid.innerHTML = `
        <div class="empty-state">
          <div style="width:80px;height:80px;background:rgba(230,57,70,.08);border:1px solid rgba(230,57,70,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:2rem;">🔖</div>
          <h3>Nothing Saved Yet</h3>
          <p style="margin-bottom:1.5rem;">Browse movies and tap the bookmark icon to save films here.</p>
          <button class="btn-main" id="wlBrowseBtn">Browse Movies</button>
        </div>`;
      document.getElementById('wlBrowseBtn').addEventListener('click', () => Router.navigate('movies'));
      document.getElementById('wlSuggestGrid').innerHTML = MOVIES.sort(() => .5 - Math.random()).slice(0, 8).map(renderMovieCard).join('');
    } else {
      clearWrap.style.display  = 'block';
      suggestSec.style.display = 'none';
      grid.innerHTML = saved.map(renderMovieCard).join('');
    }
  }
};

// Override handleWatchlist for watchlist page to re-render instantly
const _baseHandle = handleWatchlist;
window.handleWatchlist = function(e, id, btn) {
  _baseHandle(e, id, btn);
  // If we're on the watchlist page, re-render the list
  if (Router && Router.current === 'watchlist') {
    PageWatchlist._render();
  }
};

// ─── ABOUT ────────────────────────────────────────────────────────────────────
const PageAbout = {
  template: () => `
    <!-- HERO -->
    <section class="relative-z" style="padding:5rem 1.5rem 3rem;text-align:center;">
      <div style="max-width:1280px;margin:0 auto;display:flex;flex-direction:column;align-items:center;">
        <div class="hero-badge enter" style="margin-bottom:1.5rem;"><span class="dot-pulse"></span>Our Story</div>
        <h1 class="hero-title enter2" style="font-size:clamp(2.8rem,8vw,7rem);max-width:800px;">Built for<br/>True Cinema Lovers</h1>
        <p class="enter3" style="font-size:1.05rem;color:var(--text-muted);max-width:520px;line-height:1.75;margin-top:1rem;">
          LatentFlow was born out of frustration with generic recommendation engines that never quite understood what makes a film truly great.
        </p>
      </div>
    </section>

    <!-- MISSION -->
    <section class="relative-z" style="padding:3rem 1.5rem;border-top:1px solid var(--border);">
      <div style="max-width:800px;margin:0 auto;text-align:center;">
        <div class="section-label">Our Mission</div>
        <div class="accent-line" style="margin:.5rem auto 1rem;"></div>
        <h2 class="section-title" style="margin-bottom:1.5rem;">AI That Thinks Like a Cinephile</h2>
        <p style="color:var(--text-muted);line-height:1.85;font-size:.97rem;margin-bottom:1rem;">
          Most engines look at what you watched and suggest more of the same. We go deeper — analysing cinematography style, narrative structure, pacing, thematic resonance, and emotional tone to match you with films that will genuinely move you.
        </p>
        <p style="color:var(--text-muted);line-height:1.85;font-size:.97rem;">
          Whether you're a fan of slow-burn arthouse cinema or high-octane blockbusters, LatentFlow speaks your language.
        </p>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="relative-z" style="padding:3rem 1.5rem;border-top:1px solid var(--border);">
      <div style="max-width:1280px;margin:0 auto;">
        <div class="section-label" style="text-align:center;margin-bottom:.5rem;">What We Do</div>
        <div class="accent-line" style="margin:0 auto 2rem;"></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1.25rem;">
          <div class="feature-card card-anim"><div class="feature-icon">🧠</div><div class="feature-title">Deep Learning</div><div class="feature-desc">Trained on millions of viewer preferences and professional reviews, not just star ratings.</div></div>
          <div class="feature-card card-anim"><div class="feature-icon">🎭</div><div class="feature-title">Mood Matching</div><div class="feature-desc">Tell us how you're feeling and we'll find the perfect film for your mood right now.</div></div>
          <div class="feature-card card-anim"><div class="feature-icon">🌍</div><div class="feature-title">World Cinema</div><div class="feature-desc">Our library spans 80+ countries and decades of film history beyond Hollywood.</div></div>
          <div class="feature-card card-anim"><div class="feature-icon">🔖</div><div class="feature-title">Smart Watchlist</div><div class="feature-desc">Save films instantly and revisit your bookmarks anytime, across sessions.</div></div>
          <div class="feature-card card-anim"><div class="feature-icon">⚡</div><div class="feature-title">Instant Results</div><div class="feature-desc">Millisecond-fast recommendations — no loading screens, no friction.</div></div>
          <div class="feature-card card-anim"><div class="feature-icon">🛡️</div><div class="feature-title">Privacy First</div><div class="feature-desc">Your taste profile stays on your device. We never sell your data, ever.</div></div>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="relative-z" style="padding:4rem 1.5rem;border-top:1px solid var(--border);">
      <div style="max-width:680px;margin:0 auto;">
        <div class="section-label" style="text-align:center;">Journey</div>
        <div class="accent-line" style="margin:.5rem auto 2rem;"></div>
        <h2 class="section-title" style="text-align:center;margin-bottom:3rem;">How We Got Here</h2>
        <div>
          <div class="timeline-item"><div class="timeline-dot">🚀</div><div><div class="timeline-year">2022</div><div class="timeline-title">The Idea</div><div class="timeline-text">Two film-obsessed engineers frustrated with Netflix's algorithm quit their jobs to build something better.</div></div></div>
          <div class="timeline-item"><div class="timeline-dot">🧪</div><div><div class="timeline-year">2023</div><div class="timeline-title">Beta Launch</div><div class="timeline-text">First beta with 5,000 users. 91% said LatentFlow recommendations were better than any platform they'd tried.</div></div></div>
          <div class="timeline-item"><div class="timeline-dot">📈</div><div><div class="timeline-year">2024</div><div class="timeline-title">Scale Up</div><div class="timeline-text">Reached 50,000 users. Expanded to 10,000+ films from 80+ countries. Series A funding closed.</div></div></div>
          <div class="timeline-item"><div class="timeline-dot">✨</div><div><div class="timeline-year">2025</div><div class="timeline-title">Today</div><div class="timeline-text">LatentFlow v3 with mood detection, offline watchlists, and social watch parties. More to come.</div></div></div>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="relative-z" style="padding:4rem 1.5rem;border-top:1px solid var(--border);">
      <div style="max-width:1280px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:3rem;">
          <div class="section-label">The People</div>
          <div class="accent-line" style="margin:.5rem auto 1rem;"></div>
          <h2 class="section-title">The Team</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.25rem;max-width:900px;margin:0 auto;">
          <div class="team-card card-anim"><div class="avatar">MK</div><div class="team-name">Maya Khan</div><div class="team-role">CEO & Co-founder</div><div class="team-bio">Former Netflix ML engineer. Cannes jury member. Believes every film tells a truth.</div></div>
          <div class="team-card card-anim"><div class="avatar">JR</div><div class="team-name">James Rho</div><div class="team-role">CTO & Co-founder</div><div class="team-bio">Built recommendation systems at Spotify. Watches 200+ films a year.</div></div>
          <div class="team-card card-anim"><div class="avatar">AL</div><div class="team-name">Amara Levi</div><div class="team-role">Head of Design</div><div class="team-bio">Obsessed with the intersection of cinema and UX. Ex-Figma, ex-Apple HIG team.</div></div>
          <div class="team-card card-anim"><div class="avatar">TP</div><div class="team-name">Tom Park</div><div class="team-role">Lead ML Engineer</div><div class="team-bio">PhD in NLP from MIT. Built the emotion-detection layer that powers mood matching.</div></div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative-z" style="padding:5rem 1.5rem;text-align:center;">
      <div style="max-width:520px;margin:0 auto;">
        <h2 class="section-title" style="margin-bottom:1rem;">Ready to Find<br/>Your Next Film?</h2>
        <p style="color:var(--text-muted);margin-bottom:2rem;line-height:1.7;">Join 50,000+ movie lovers who've found their new favourites through LatentFlow.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <button class="btn-main" id="aboutSearchBtn">Start Searching</button>
          <button class="btn-ghost" id="aboutMoviesBtn">Browse Movies</button>
        </div>
      </div>
    </section>
  `,

  init() {
    document.getElementById('aboutSearchBtn').addEventListener('click', () => Router.navigate('search'));
    document.getElementById('aboutMoviesBtn').addEventListener('click', () => Router.navigate('movies'));
  }
};
