(function () {
  var DATA = {
    name: 'Late Lt Gen Taoreed Abiodun Lagbaja',
    titleRole: '23rd Chief of Army Staff, Nigerian Army',
    decorations: 'DSS · GSS · psc(+) · CM · FCM · FCMH · GOM · USAWC · NAM · MSS',
    biography: [
      'Late Lieutenant General Taoreed Abiodun Lagbaja NAM was born on 28 February 1968 in Ilobu, Irepodun Local Government Area of Osun State. He was granted Regular Combatant Commission into the Nigerian Army as a member of the 39th Regular Course of the Nigerian Defence Academy on 19 September 1992 as a second lieutenant with seniority on the rank effective 12 September 1987. He is of the Infantry Corps and has attended several courses in and outside Nigeria, where he performed creditably.',
      'These courses include the Company Amphibious Operations Course, Young Officers\' Course (Infantry), Airborne Basic Course, Airborne Advanced Course, Junior Staff Course, and Company Commanders\' Course (Infantry). He also attended the Senior Staff Course, Military Observers\' Course, Amphibious Staff Operations Course, Commanding Officers\' Course, and the Military Education Level 1 Programme in Strategic Landpower at the United States Army War College for the Academic Year 2014. His research project for the award of Master of Strategic Studies was on Ethnic Nationality Groups and Nigeria\'s National Security. Lieutenant General Lagbaja holds a Bachelor of Science Degree in Geography from the Nigerian Defence Academy and a Masters Degree in Strategic Studies from the United States Army War College, Carlisle, Pennsylvania.',
      'Lieutenant General Lagbaja proved himself a professional soldier and earned his promotions when due, the most recent of which was his promotion to Lieutenant General on 31 July 2023. In the course of his illustrious career spanning over three decades, he held diverse appointments cutting across command, staff, instructional, peacekeeping, and operational deployments. These include Military Observer at MONUC, Directing Staff at the Armed Forces Command and Staff College, Jaji, two-time Commanding Officer 72 Special Forces Battalion Makurdi, and Chief of Staff at Headquarters 8 Task Force Division, Monguno, Borno State.',
      'Lieutenant General Lagbaja\'s intellectual prowess and vast operational expertise made him the preferred choice for Acting Director of Operations, Nigerian Army HQ. He served as Commander 2 Infantry Brigade Uyo, Commander 9 Infantry Brigade Ikeja-Lagos, and pioneer Director of Force Generation, Army HQ. He was also General Officer Commanding 82 Amphibious Division Enugu and GOC 1 Mechanized Division Kaduna, where he helped stem criminalities, secessionist agitation, banditry, kidnapping, and terrorist activity.',
      'General Lagbaja later served as Chief of Operations (Army) before he was appointed Nigeria\'s 23rd Chief of Army Staff on 19 June 2023 by His Excellency President Bola Ahmed Tinubu. He is survived by his beloved wife, Mrs Maria Lagbaja, and their two children.'
    ],
    achievements: [
      'Appointed 23rd Chief of Army Staff by President Bola Ahmed Tinubu — 19 June 2023',
      'Promoted to Lieutenant General — 31 July 2023',
      'Pioneer Director of Force Generation, Nigerian Army Headquarters',
      'GOC 82 Amphibious Division — helped stem criminalities and secessionist agitation in South East Nigeria',
      'GOC 1 Mechanized Division — helped combat banditry and terrorist groups in North West Nigeria',
      'Military Observer, MONUC — United Nations Mission, Democratic Republic of the Congo',
      'Master of Strategic Studies — United States Army War College, Carlisle, Pennsylvania (2014)',
      'Forces Service Star | Distinguished Service Star | Grand Service Star',
      'Command Medal | Field Command Medal | Field Command Medal of Honour | General Operations Medal',
      'Nigerian Army Medal — Highest Customary Award in the Nigerian Army'
    ],
    gallery: [
      { file: 'Late Lt Gen TA Lagbaja Conferring Presidential Commission on Officer Cadets of Executive Commission 1 of 2023 at the Ihejirika Auditorium Infantry Corps Centre Jaji.jpeg', caption: 'Conferring Presidential Commission on Officer Cadets at Infantry Corps Centre Jaji' },
      { file: 'Late Lt Gen TA Lagbaja as an Instructor during a Field Training Exercise at the Nigerian Defence Academy Kaduna.jpeg', caption: 'Instructor during Field Training Exercise at NDA Kaduna' },
      { file: 'Late Lt Gen TA Lagbaja during the induction of 2 Bell Helicopters into the Nigerian Army at 3 Division Sports Ground, Maxwell Khobe Cantonment Jos.jpeg', caption: 'Induction of 2 Bell Helicopters into the Nigerian Army' },
      { file: 'Late Lt Gen TA Lagbaja receiving the Nigerian Army Command Flag from Lt Gen F Yahaya retired to signify his assumption of office as the 23rd COAS.jpeg', caption: 'Receiving the Nigerian Army Command Flag as 23rd COAS' },
      { file: 'Late Lt Gen TA Lagbaja with his spouse Mrs Maria Lagbaja during his investiture with his badge of rank as Maj Gen.jpeg', caption: 'With Mrs Maria Lagbaja at his investiture as Major General' },
      { file: 'Late Lt Gen TA Lagbaja with his spouse and children during his Course at the United States Army War College.jpeg', caption: 'With spouse and children at the United States Army War College' },
      { file: 'The Couryesy Visit of Late Lt Gen TA Lagbaja to the Emir of Bauchi Alh Dr Rilwan Suleiman Adamu to Enhance Civil Military Cooperation.jpeg', caption: 'Courtesy visit to the Emir of Bauchi' },
      { file: 'The Late COAS Delivering a Lecture to Participants of Army War College Nigeria Course 8 of 2024.jpeg', caption: 'Delivering a lecture to Army War College Nigeria Course 8 of 2024' },
      { file: 'The Late COAS Inspecting the interior of a Mine Resistant Ambush  Protected Vehicle refurbished by the Command Engineering Depot Kaduna.jpeg', caption: 'Inspecting a Mine Resistant Ambush Protected Vehicle' },
      { file: 'The Late COAS Presenting the Group Life Insurance Cheque  to the Next-of-Kin of a deceased soldier during the COAS Conference.jpeg', caption: 'Presenting group life insurance cheque to next-of-kin of a deceased soldier' },
      { file: 'The Late COAS as Commanding Officer 72 Special Forces Battalion with some members of the British Military Advisory Training Team (BMATT) during a Field Training Exercise.jpeg', caption: 'As Commanding Officer 72 Special Forces Battalion with BMATT' },
      { file: 'The Late COAS during his visit to see wounded soldiers at the 44 Nigerian Army Reference Hospital Kaduna.jpeg', caption: 'Visit to wounded soldiers at 44 Nigerian Army Reference Hospital Kaduna' },
      { file: 'The Late COAS with his Spouse Mrs Maria Lagbaja on their Wedding Day.jpeg', caption: 'With Mrs Maria Lagbaja on their wedding day' },
      { file: 'The President Commander in Chief of the Armed Forces Federal Republic of Nigeria President Bola Ahmed Tinubu with Mrs Maria Lagbaja decorating Late Lt Gen TA Lagba with his new badge of rank of Lt Gen after his confirmation by the National Ass.jpeg', caption: 'Decorated by President Bola Ahmed Tinubu after confirmation as Lt Gen' },
      { file: 'The late COAS inspecting the Quarter Guard during the Passing Out Parade of 86 Regular Recruit Intake at Depot Nigerian Army.jpeg', caption: 'Inspecting the Quarter Guard during the Passing Out Parade' },
      { file: 'WhatsApp Image 2026-06-07 at 04.12.21.jpeg', caption: 'Gallery photo' }
    ]
  };

  var views = {
    bioView: document.getElementById('bioView'),
    achView: document.getElementById('achView'),
    galView: document.getElementById('galView')
  };

  var buttons = document.querySelectorAll('.action-btn');

  function renderBiography() {
    views.bioView.innerHTML = [
      '<div class="detail-title">Biography</div>',
      '<div class="detail-copy">',
      DATA.biography.map(function (para) { return '<p>' + para + '</p>'; }).join(''),
      '</div>'
    ].join('');
  }

  function renderAchievements() {
    views.achView.innerHTML = [
      '<div class="detail-title">Achievements</div>',
      '<ol class="ach-list">',
      DATA.achievements.map(function (item) { return '<li>' + item + '</li>'; }).join(''),
      '</ol>'
    ].join('');
  }

  function renderGallery() {
    views.galView.innerHTML = [
      '<div class="detail-title">Gallery</div>',
      '<div class="detail-gallery">',
      DATA.gallery.map(function (item) {
        return [
          '<figure class="g-tile">',
          '<img src="asset/images/' + item.file + '" alt="' + item.caption + '" loading="lazy">',
          '<figcaption class="g-caption">' + item.caption + '</figcaption>',
          '</figure>'
        ].join('');
      }).join(''),
      '</div>'
    ].join('');
  }

  function setActiveView(viewId) {
    Object.keys(views).forEach(function (key) {
      views[key].classList.toggle('active', key === viewId);
    });

    buttons.forEach(function (button) {
      var active = button.getAttribute('data-view') === viewId;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function runStrips() {
    var strips = document.querySelectorAll('.strip');
    strips.forEach(function (strip) { strip.classList.add('slide-in'); });
    setTimeout(function () {
      strips.forEach(function (strip) {
        strip.classList.remove('slide-in');
        strip.classList.add('slide-out');
      });
      setTimeout(function () {
        strips.forEach(function (strip) { strip.classList.remove('slide-out'); });
      }, 650);
    }, 850);
  }

  document.getElementById('name').textContent = DATA.name;
  document.getElementById('title-role').textContent = DATA.titleRole;
  document.getElementById('decorations').textContent = DATA.decorations;

  renderBiography();
  renderAchievements();
  renderGallery();

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      setActiveView(button.getAttribute('data-view'));
      runStrips();
    });
  });

  setActiveView('bioView');
  runStrips();
})();