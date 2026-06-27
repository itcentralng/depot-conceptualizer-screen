(function () {

  var DATA = {
    name: 'Late Lt Gen T.A. Lagbaja',
    titleRole: '23rd Chief of Army Staff, Nigerian Army',
    biography: [
      'Late Lieutenant General Taoreed Abiodun Lagbaja NAM was born on 28 February 1968 in Ilobu, Irepodun Local Government Area of Osun State. He was granted Regular Combatant Commission into the Nigerian Army as a member of the 39th Regular Course of the Nigerian Defence Academy on 19 September 1992 as a second lieutenant with seniority on the rank effective 12 September 1987. He is of the Infantry Corps and has attended several courses in and outside Nigeria, where he performed creditably.',
      'These courses include the Company Amphibious Operations Course, Young Officers\' Course (Infantry), Airborne Basic Course, Airborne Advanced Course, Junior Staff Course, and Company Commanders\' Course (Infantry). He also attended the Senior Staff Course, Military Observers\' Course, Amphibious Staff Operations Course, Commanding Officers\' Course, and the Military Education Level 1 Programme in Strategic Landpower at the United States Army War College for the Academic Year 2014. His research project for the award of Master of Strategic Studies was on Ethnic Nationality Groups and Nigeria\'s National Security. Lieutenant General Lagbaja holds a Bachelor of Science Degree in Geography from the Nigerian Defence Academy and a Masters Degree in Strategic Studies from the United States Army War College, Carlisle, Pennsylvania.',
      'Lieutenant General Lagbaja proved himself a professional soldier and earned his promotions when due, the most recent of which was his promotion to Lieutenant General on 31 July 2023. In the course of his illustrious career spanning over three decades, he held diverse appointments cutting across command, staff, instructional, peacekeeping, and operational deployments. These include Military Observer at MONUC, Directing Staff at the Armed Forces Command and Staff College, Jaji, two-time Commanding Officer 72 Special Forces Battalion Makurdi, and Chief of Staff at Headquarters 8 Task Force Division, Monguno, Borno State.',
      'Lieutenant General Lagbaja\'s intellectual prowess and vast operational expertise made him the preferred choice for Acting Director of Operations, Nigerian Army HQ. He served as Commander 2 Infantry Brigade Uyo, Commander 9 Infantry Brigade Ikeja-Lagos, and pioneer Director of Force Generation, Army HQ. He was also General Officer Commanding 82 Amphibious Division Enugu and GOC 1 Mechanized Division Kaduna, where he helped stem criminalities, secessionist agitation, banditry, kidnapping, and terrorist activity.',
      'General Lagbaja later served as Chief of Operations (Army) before he was appointed Nigeria\'s 23rd Chief of Army Staff on 19 June 2023 by His Excellency President Bola Ahmed Tinubu. He is survived by his beloved wife, Mrs Maria Lagbaja, and their two children.'
    ],
    achievements: [
      {
        category: 'Honours & Awards',
        items: [
          'Nigerian Army Medal — Highest Customary Award in the Nigerian Army',
          'Forces Service Star',
          'Distinguished Service Star',
          'Grand Service Star',
          'Command Medal',
          'Field Command Medal',
          'Field Command Medal of Honour',
          'General Operations Medal'
        ]
      },
      {
        category: 'Operational Distinctions',
        items: [
          'Military Observer, MONUC — United Nations Mission, Democratic Republic of the Congo',
          'GOC 82 Amphibious Division Enugu — stemmed criminalities and secessionist agitation in South East Nigeria',
          'GOC 1 Mechanized Division Kaduna — combated banditry, kidnapping and terrorist activity in North West Nigeria',
          'Chief of Staff, Headquarters 8 Task Force Division, Monguno, Borno State',
          'Two-time Commanding Officer, 72 Special Forces Battalion, Makurdi'
        ]
      },
      {
        category: 'Key Appointments',
        items: [
          'Appointed 23rd Chief of Army Staff by President Bola Ahmed Tinubu — 19 June 2023',
          'Promoted to Lieutenant General — 31 July 2023',
          'Pioneer Director of Force Generation, Nigerian Army Headquarters',
          'Commander 9 Infantry Brigade, Ikeja-Lagos',
          'Commander 2 Infantry Brigade, Uyo',
          'Directing Staff, Armed Forces Command and Staff College, Jaji'
        ]
      }
    ],
    gallery: [
      { file: 'gallery_01.jpeg', caption: 'With Mrs Maria Lagbaja on their wedding day' },
      { file: 'gallery_02.jpeg', caption: 'With Mrs Maria Lagbaja on their wedding day' },
      { file: 'gallery_03.jpeg', caption: 'Instructor during Field Training Exercise at NDA Kaduna' },
      { file: 'gallery_04.jpeg', caption: 'As Commanding Officer 72 Special Forces Battalion with BMATT' },
      { file: 'gallery_05.jpeg', caption: 'With spouse and children at the United States Army War College' },
      { file: 'gallery_06.jpeg', caption: 'With Mrs Maria Lagbaja at his investiture as Major General' },
      { file: 'gallery_07.jpeg', caption: 'Decorated by President Bola Ahmed Tinubu after confirmation as Lt Gen' },
      { file: 'gallery_08.jpeg', caption: 'Receiving the Nigerian Army Command Flag as 23rd COAS' },
      { file: 'gallery_09.jpeg', caption: 'Inspecting the Quarter Guard during the Passing Out Parade' },
      { file: 'gallery_10.jpeg', caption: 'Delivering a lecture to Army War College Nigeria Course 8 of 2024' },
      { file: 'gallery_11.jpeg', caption: 'Induction of 2 Bell Helicopters into the Nigerian Army' },
      { file: 'gallery_12.jpeg', caption: 'Inspecting a Mine Resistant Ambush Protected Vehicle' },
      { file: 'gallery_13.jpeg', caption: 'Conferring Presidential Commission on Officer Cadets at Infantry Corps Centre Jaji' },
      { file: 'gallery_14.jpeg', caption: 'Presenting group life insurance cheque to next-of-kin of a deceased soldier' },
      { file: 'gallery_15.jpeg', caption: 'Visit to wounded soldiers at 44 Nigerian Army Reference Hospital Kaduna' },
      { file: 'gallery_16.jpeg', caption: 'Courtesy visit to the Emir of Bauchi' }
    ]
  };

  /* ── Utility ────────────────────────────────────────── */
  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  /* ── SPA Navigation ─────────────────────────────────── */
  var currentPage = 'home';

  window.navigateTo = function (page) {
    if (page === currentPage) return;
    showPage(page);
  };

  window.closeApp = function () {
    window.close();
  };

  function showPage(page) {
    document.querySelectorAll('.page-view').forEach(function (el) {
      el.classList.remove('active');
    });
    var target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');
    currentPage = page;

    if (page === 'bio') {
      renderBiography('bioPage');
      startAutoScroll('bioPage');
    } else if (page === 'achievements') {
      renderAchievements('achievementsPage');
      startAutoScroll('achievementsPage');
    } else if (page === 'gallery') {
      renderGallery('galleryPage');
    }
  }

  /* ── Biography ──────────────────────────────────────── */
  function renderBiography(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;

    var content;
    if (DATA.biography && DATA.biography.length) {
      content = '<div class="bio-scroll">' +
        DATA.biography.map(function (p) { return '<p class="bio-para">' + p + '</p>'; }).join('') +
        '</div>';
    } else {
      content = '<div class="bio-pending">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">' +
        '<path d="M9 12h6M9 16h6M9 8h2M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>' +
        '</svg>' +
        '<p>Biography coming soon</p>' +
        '</div>';
    }

    target.innerHTML =
      '<div class="detail-heading">Biography</div>' +
      '<div class="detail-card">' + content + '</div>';
  }

  function startAutoScroll(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;
    var scroller = target.querySelector('.bio-scroll, .achieve-scroll');
    if (!scroller) return;

    var paused = false;
    var timer = null;
    var step = 0.35;

    function pauseFor(ms) {
      paused = true;
      clearTimeout(timer);
      timer = setTimeout(function () { paused = false; }, ms);
    }

    function tick() {
      if (!paused) {
        var max = scroller.scrollHeight - scroller.clientHeight;
        if (max > 0) {
          scroller.scrollTop = scroller.scrollTop >= max - 1 ? 0 : scroller.scrollTop + step;
        }
      }
      timer = setTimeout(tick, 32);
    }

    scroller.addEventListener('mouseenter', function () { paused = true; });
    scroller.addEventListener('mouseleave', function () { paused = false; });
    scroller.addEventListener('wheel',      function () { pauseFor(1500); }, { passive: true });
    scroller.addEventListener('touchstart', function () { pauseFor(1500); }, { passive: true });
    scroller.addEventListener('scroll',     function () { pauseFor(900);  }, { passive: true });

    timer = setTimeout(tick, 1800);
  }

  /* ── Achievements ───────────────────────────────────── */
  function renderAchievements(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;

    var content;
    if (DATA.achievements && DATA.achievements.length) {
      content = '<div class="achieve-scroll">' +
        DATA.achievements.map(function (section) {
          return '<div class="achieve-section">' +
            '<h3 class="achieve-cat">' + section.category + '</h3>' +
            '<ul class="achieve-list">' +
            section.items.map(function (item) {
              return '<li class="achieve-item">' + item + '</li>';
            }).join('') +
            '</ul></div>';
        }).join('') +
        '</div>';
    } else {
      content = '<div class="bio-pending">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">' +
        '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>' +
        '</svg>' +
        '<p>Achievements coming soon</p>' +
        '</div>';
    }

    target.innerHTML =
      '<div class="detail-heading">Achievements</div>' +
      '<div class="detail-card">' + content + '</div>';
  }

  /* ── Gallery ────────────────────────────────────────── */
  function renderGallery(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;

    target.innerHTML =
      '<div class="detail-heading">Gallery</div>' +
      '<div class="detail-card"><div class="gallery-scroll"><div class="gallery-grid">' +
      DATA.gallery.map(function (item) {
        var src = 'asset/images/' + item.file;
        return '<button type="button" class="g-tile" data-src="' + src + '" data-caption="' + item.caption + '">' +
          '<img src="' + src + '" alt="' + item.caption + '" loading="lazy">' +
          '<span class="g-caption">' + item.caption + '</span>' +
          '</button>';
      }).join('') +
      '</div></div></div>';

    bindGalleryModal();
  }

  function bindGalleryModal() {
    var modal  = document.getElementById('galleryModal');
    var mImg   = document.getElementById('galleryModalImage');
    var mCap   = document.getElementById('galleryModalCaption');
    var mClose = document.getElementById('galleryModalClose');
    if (!modal) return;

    function open(src, cap) {
      mImg.src = src; mImg.alt = cap; mCap.textContent = cap;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
    function close() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      mImg.src = '';
    }

    document.querySelectorAll('.g-tile').forEach(function (btn) {
      btn.addEventListener('click', function () {
        open(btn.dataset.src, btn.dataset.caption);
      });
    });
    mClose.addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ── Bootstrap ──────────────────────────────────────── */
  setText('name', DATA.name);
  setText('title-role', DATA.titleRole);


})();
