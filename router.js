// ===== LATENTFLOW — SPA ROUTER =====

const Router = {
  current: null,

  routes: {
    home:      PageHome,
    movies:    PageMovies,
    search:    PageSearch,
    watchlist: PageWatchlist,
    about:     PageAbout,
  },

  navigate(page) {
    if (!this.routes[page]) return;
    this.current = page;

    // Update hash (for bookmarking / back-button)
    history.pushState({ page }, '', `#${page}`);

    // Update nav active state
    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page);
    });

    // Swap content with fade
    const view = document.getElementById('app-view');
    view.style.opacity = '0';
    view.style.transform = 'translateY(12px)';
    view.style.transition = 'opacity .2s ease, transform .2s ease';

    setTimeout(() => {
      view.innerHTML = this.routes[page].template();
      window.scrollTo({ top: 0, behavior: 'instant' });

      view.style.transition = 'none';
      // Trigger reflow
      void view.offsetHeight;
      view.style.opacity = '1';
      view.style.transform = 'translateY(0)';
      view.style.transition = 'opacity .28s ease, transform .28s ease';

      this.routes[page].init();
      updateWlBadge();
    }, 180);
  },

  init() {
    // Handle browser back/forward
    window.addEventListener('popstate', e => {
      const page = e.state?.page || 'home';
      this._renderWithoutPush(page);
    });

    // Determine initial page from hash
    const hash = location.hash.replace('#', '') || 'home';
    const startPage = this.routes[hash] ? hash : 'home';
    history.replaceState({ page: startPage }, '', `#${startPage}`);
    this._renderWithoutPush(startPage);
  },

  _renderWithoutPush(page) {
    if (!this.routes[page]) page = 'home';
    this.current = page;
    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page);
    });
    const view = document.getElementById('app-view');
    view.innerHTML = this.routes[page].template();
    this.routes[page].init();
    updateWlBadge();
  }
};
