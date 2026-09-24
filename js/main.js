/* For Chelsy — interactions. No dependencies. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- scroll reveal ---------- */
  var revealable = document.querySelectorAll('[data-reveal]');

  if (reduce || !('IntersectionObserver' in window)) {
    revealable.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    revealable.forEach(function (el) { io.observe(el); });
  }

  /* ---------- missing photos -> intentional placeholder ---------- */
  function markMissing(img) {
    if (img.naturalWidth === 0 && img.complete) {
      var fig = img.closest('figure');
      if (fig) fig.classList.add('is-missing');
    }
  }
  window.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') markMissing(e.target);
  }, true);
  document.querySelectorAll('img').forEach(function (img) {
    if (img.complete) markMissing(img);
    img.addEventListener('error', function () { markMissing(img); });
  });

  /* ---------- letter: closed -> open -> readable ---------- */
  var stage = document.getElementById('letterStage');
  var toggle = document.getElementById('letterToggle');
  var hint = toggle && toggle.querySelector('.envelope__hint');
  if (stage && toggle) {
    toggle.addEventListener('click', function () {
      var opening = !stage.classList.contains('is-open');
      stage.classList.toggle('is-open', opening);
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? 'Tutup surat' : 'Buka surat');
      hint.textContent = opening ? 'tutup' : 'buka';
      if (!opening) return;
      // let the flap finish, then bring the letter itself into view
      setTimeout(function () {
        document.getElementById('letterBody').scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth', block: 'center'
        });
      }, reduce ? 0 : 620);
    });
  }

  /* ---------- music player (never autoplay) ---------- */
  var audio = document.getElementById('song');
  var playBtn = document.getElementById('play');
  var seek = document.getElementById('seek');
  var time = document.getElementById('time');
  var box = document.querySelector('.music');

  function clock(sec) {
    if (!isFinite(sec)) return '0:00';
    var m = Math.floor(sec / 60), s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }
  function unavailable() {
    if (box) box.classList.add('is-unavailable');
    if (playBtn) { playBtn.disabled = true; playBtn.classList.remove('is-playing'); }
    var note = document.querySelector('.player__note');
    if (note) note.textContent = 'Lagu ini belum ada di sini.';
  }

  if (audio && playBtn && seek) {
    audio.addEventListener('error', unavailable);
    var src = audio.querySelector('source') || audio;
    src.addEventListener('error', unavailable);
    audio.addEventListener('loadedmetadata', function () { time.textContent = clock(audio.duration); seek.value = 0; });
    audio.addEventListener('timeupdate', function () {
      if (audio.duration) seek.value = (audio.currentTime / audio.duration) * 1000;
      time.textContent = clock(audio.currentTime);
    });
    audio.addEventListener('ended', function () {
      playBtn.classList.remove('is-playing');
      playBtn.setAttribute('aria-label', 'Putar lagu');
    });

    playBtn.addEventListener('click', function () {
      if (audio.paused) {
        audio.play().catch(unavailable);
      } else {
        audio.pause();
      }
    });
    audio.addEventListener('play', function () {
      playBtn.classList.add('is-playing');
      playBtn.setAttribute('aria-label', 'Jeda lagu');
    });
    audio.addEventListener('pause', function () {
      playBtn.classList.remove('is-playing');
      playBtn.setAttribute('aria-label', 'Putar lagu');
    });

    seek.addEventListener('input', function () {
      if (audio.duration) audio.currentTime = (seek.value / 1000) * audio.duration;
    });

    // file may already have failed to load before this deferred script ran
    if (audio.error) unavailable();
  }
})();
