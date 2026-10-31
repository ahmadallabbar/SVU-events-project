// بيانات الفعاليات التجريبية
var events = [
  {
    id: 1,
    title: "أمسية القراءة والحوار",
    category: "ثقافة",
    date: "2026-11-05",
    dateText: "5 نوفمبر 2026",
    time: "05:00 مساءً",
    location: "المكتبة الرقمية",
    image: "assets/img/culture.svg",
    short: "لقاء مفتوح لمناقشة الكتب والأفكار وتبادل التجارب بين الطلاب.",
    description: "ندعو الطلاب إلى أمسية ثقافية بسيطة تجمع محبي القراءة في مساحة للحوار وتبادل الآراء. يمكن لكل مشارك ترشيح كتاب أو فكرة يرغب في مناقشتها، كما ستتاح الفرصة للتعرف على اهتمامات قرائية جديدة والتواصل مع زملاء لديهم الاهتمامات نفسها. هذه الفعالية نموذج تجريبي ضمن مشروع دليل الفعاليات."
  },
  {
    id: 2,
    title: "اليوم الرياضي المفتوح",
    category: "رياضة",
    date: "2026-11-08",
    dateText: "8 نوفمبر 2026",
    time: "10:00 صباحاً",
    location: "الملعب الجامعي",
    image: "assets/img/sports.svg",
    short: "أنشطة رياضية خفيفة ومسابقات جماعية تشجع على الحركة والتعاون.",
    description: "يقدم اليوم الرياضي المفتوح مجموعة من الأنشطة والمسابقات المناسبة لمختلف المستويات. الهدف هو تشجيع الحركة والعمل الجماعي وخلق أجواء ودية بين المشاركين. يمكن للطلاب الحضور للمشاركة أو التشجيع والتعرف على زملاء جدد."
  },
  {
    id: 3,
    title: "ليلة الموسيقى الطلابية",
    category: "موسيقى",
    date: "2026-11-12",
    dateText: "12 نوفمبر 2026",
    time: "07:30 مساءً",
    location: "القاعة الافتراضية",
    image: "assets/img/music.svg",
    short: "مساحة فنية للاستماع إلى المواهب الموسيقية الطلابية.",
    description: "فعالية فنية افتراضية تتيح للطلاب مشاركة مواهبهم الموسيقية والاستماع إلى عروض متنوعة. صُممت الأمسية لتكون فرصة للتعبير الإبداعي والتعارف في أجواء مريحة."
  },
  {
    id: 4,
    title: "ورشة أساسيات التصميم الرقمي",
    category: "ورش عمل",
    date: "2026-11-16",
    dateText: "16 نوفمبر 2026",
    time: "04:00 مساءً",
    location: "مركز الأنشطة",
    image: "assets/img/workshop.svg",
    short: "ورشة تمهيدية للتعرف على مبادئ التصميم وتنظيم الأفكار بصرياً.",
    description: "ورشة تمهيدية تشرح مبادئ التصميم الرقمي بطريقة عملية ومبسطة. سيتعرف المشاركون على التوازن والألوان والتسلسل البصري، ثم يطبقون هذه المبادئ على نموذج تصميم صغير. لا تتطلب الورشة خبرة سابقة."
  },
  {
    id: 5,
    title: "يوم العائلة والأنشطة المفتوحة",
    category: "عائلي",
    date: "2026-11-21",
    dateText: "21 نوفمبر 2026",
    time: "11:00 صباحاً",
    location: "مركز الأنشطة",
    image: "assets/img/family.svg",
    short: "أنشطة ترفيهية وألعاب بسيطة ومساحة للقاء والتعارف.",
    description: "يوم اجتماعي يضم أنشطة خفيفة وألعاباً جماعية ومساحة للتعارف. يهدف إلى تعزيز الروابط بين أفراد المجتمع الجامعي وتوفير وقت ممتع للمشاركين."
  },
  {
    id: 6,
    title: "جلسة مهارات الدراسة عن بعد",
    category: "ورش عمل",
    date: "2026-11-25",
    dateText: "25 نوفمبر 2026",
    time: "06:00 مساءً",
    location: "القاعة الافتراضية",
    image: "assets/img/workshop.svg",
    short: "نصائح عملية لتنظيم الوقت والاستفادة من أدوات التعلم الإلكتروني.",
    description: "جلسة حوارية تستعرض طرق تنظيم الوقت وبناء روتين دراسي مناسب للتعلم عن بعد. سيتم تبادل تجارب وأفكار عملية تساعد الطلاب على متابعة المهام وتحقيق توازن أفضل."
  }
];

// دالة بناء بطاقة الفعالية
function makeEventCard(item) {
  return '<div class="col-md-6 col-lg-4">' +
    '<article class="event-card card">' +
      '<img src="' + item.image + '" alt="صورة توضيحية لفعالية">' +
      '<div class="event-card-body">' +
        '<span class="tag badge">' + item.category + '</span>' +
        '<h3>' + item.title + '</h3>' +
        '<p>' + item.short + '</p>' +
        '<div class="event-meta">' +
          '<span>▦ ' + item.dateText + '</span>' +
          '<span>⌖ ' + item.location + '</span>' +
        '</div>' +
        '<a class="btn btn-soft w-100" href="event.html?id=' + item.id + '">التفاصيل</a>' +
      '</div>' +
    '</article>' +
  '</div>';
}

// القائمة المتنقلة للشاشات الصغيرة
var menuButton = document.getElementById('menuToggle');
var mainNav = document.getElementById('mainNav');
if (menuButton && mainNav) {
  menuButton.onclick = function() {
    if (mainNav.className.indexOf('show') === -1) {
      mainNav.className += ' show';
      menuButton.setAttribute('aria-expanded', 'true');
    } else {
      mainNav.className = 'main-nav navbar';
      menuButton.setAttribute('aria-expanded', 'false');
    }
  };
}

// سلايدر الفعاليات البارزة في الصفحة الرئيسية
var featuredSlider = document.getElementById('featuredSlider');
if (featuredSlider) {
  var featured = [events[0], events[1], events[2]];
  var currentSlide = 0;

  function showSlide() {
    var item = featured[currentSlide];
    featuredSlider.innerHTML = '<img src="' + item.image + '" alt="">' +
      '<div>' +
        '<span class="tag badge">' + item.category + '</span>' +
        '<h3>' + item.title + '</h3>' +
        '<p>' + item.short + '</p>' +
        '<div class="event-meta"><span>▦ ' + item.dateText + '</span><span>⌖ ' + item.location + '</span></div>' +
        '<a class="btn btn-primary" href="event.html?id=' + item.id + '">اكتشف التفاصيل</a>' +
      '</div>';
  }

  document.getElementById('previousSlide').onclick = function() {
    currentSlide = (currentSlide - 1 + featured.length) % featured.length;
    showSlide();
  };
  document.getElementById('nextSlide').onclick = function() {
    currentSlide = (currentSlide + 1) % featured.length;
    showSlide();
  };
  showSlide();
}

// عرض أحدث الفعاليات في الصفحة الرئيسية
var latestEvents = document.getElementById('latestEvents');
if (latestEvents) {
  var htmlLatest = '';
  for (var i = 0; i < 3; i++) {
    htmlLatest += makeEventCard(events[i]);
  }
  latestEvents.innerHTML = htmlLatest;
}

// البحث والفلترة في صفحة events.html
var eventsGrid = document.getElementById('eventsGrid');
if (eventsGrid) {
  var searchInput = document.getElementById('eventSearch');
  var categoryInput = document.getElementById('categoryFilter');
  var locationInput = document.getElementById('locationFilter');
  var dateInput = document.getElementById('dateFilter');
  var noEvents = document.getElementById('noEvents');
  var resultsCount = document.getElementById('resultsCount');

  // قراءة التصنيف الممرر في الرابط
  var queryString = window.location.search;
  if (queryString.indexOf('category=') !== -1) {
    var catParam = decodeURIComponent(queryString.split('category=')[1].split('&')[0]);
    categoryInput.value = catParam;
  }

  function filterEvents() {
    var searchValue = searchInput.value.toLowerCase();
    var categoryValue = categoryInput.value;
    var locationValue = locationInput.value;
    var dateValue = dateInput.value;
    
    var filteredHtml = '';
    var count = 0;

    for (var j = 0; j < events.length; j++) {
      var item = events[j];
      var matchesSearch = item.title.toLowerCase().indexOf(searchValue) !== -1 || item.short.toLowerCase().indexOf(searchValue) !== -1;
      var matchesCategory = (categoryValue === '' || item.category === categoryValue);
      var matchesLocation = (locationValue === '' || item.location === locationValue);
      var matchesDate = (dateValue === '' || item.date >= dateValue);

      if (matchesSearch && matchesCategory && matchesLocation && matchesDate) {
        filteredHtml += makeEventCard(item);
        count++;
      }
    }

    eventsGrid.innerHTML = filteredHtml;
    if (count === 0) {
      noEvents.className = 'empty-state';
    } else {
      noEvents.className = 'empty-state d-none';
    }
    resultsCount.innerHTML = 'عدد النتائج: ' + count;
  }

  searchInput.onkeyup = filterEvents;
  categoryInput.onchange = filterEvents;
  locationInput.onchange = filterEvents;
  dateInput.onchange = filterEvents;

  document.getElementById('clearFilters').onclick = function() {
    searchInput.value = '';
    categoryInput.value = '';
    locationInput.value = '';
    dateInput.value = '';
    filterEvents();
  };
  filterEvents();
}

// عرض تفاصيل الفعالية والأزرار في صفحة event.html
var eventDetails = document.getElementById('eventDetails');
if (eventDetails) {
  var qString = window.location.search;
  var eventId = 1;
  if (qString.indexOf('id=') !== -1) {
    eventId = Number(qString.split('id=')[1]);
  }

  var selectedEvent = events[0];
  for (var k = 0; k < events.length; k++) {
    if (events[k].id === eventId) {
      selectedEvent = events[k];
      break;
    }
  }

  eventDetails.innerHTML = '<div class="row g-4 align-items-center">' +
    '<div class="col-lg-6"><img class="detail-cover" src="' + selectedEvent.image + '" alt=""></div>' +
    '<div class="col-lg-6">' +
      '<span class="tag badge">' + selectedEvent.category + '</span>' +
      '<h1>' + selectedEvent.title + '</h1>' +
      '<div class="detail-facts">' +
        '<div><strong>التاريخ:</strong> ' + selectedEvent.dateText + '</div>' +
        '<div><strong>الوقت:</strong> ' + selectedEvent.time + '</div>' +
        '<div><strong>المكان:</strong> ' + selectedEvent.location + '</div>' +
      '</div>' +
      '<h2 class="mt-4">نبذة عن الفعالية</h2>' +
      '<p>' + selectedEvent.description + '</p>' +
      '<div class="d-flex flex-wrap gap-2">' +
        '<button class="btn btn-primary" id="addToCalendar" type="button">أضف إلى التقويم</button>' +
        '<button class="btn btn-soft" id="shareEvent" type="button">شارك الفعالية</button>' +
      '</div>' +
      '<div id="eventActionMessage" class="form-note mt-3"></div>' +
    '</div>' +
  '</div>';

  document.getElementById('addToCalendar').onclick = function() {
    alert('تمت إضافة الفعالية (' + selectedEvent.title + ') بتاريخ ' + selectedEvent.dateText + ' إلى التقويم.');
    document.getElementById('eventActionMessage').innerHTML = 'تم حفظ تذكير الفعالية في التقويم.';
  };

  document.getElementById('shareEvent').onclick = function() {
    prompt('انسخ رابط الفعالية لمشاركته:', window.location.href);
    document.getElementById('eventActionMessage').innerHTML = 'يمكنك مشاركة الرابط أعلاه مع زملائك.';
  };

  var relatedEvents = document.getElementById('relatedEvents');
  if (relatedEvents) {
    var relatedHtml = '';
    var relCount = 0;
    for (var m = 0; m < events.length; m++) {
      if (events[m].id !== selectedEvent.id && events[m].category === selectedEvent.category && relCount < 2) {
        relatedHtml += '<a class="btn btn-soft text-start" href="event.html?id=' + events[m].id + '">' + events[m].title + ' <span class="float-start">←</span></a>';
        relCount++;
      }
    }
    if (relCount === 0) {
      for (var n = 0; n < events.length; n++) {
        if (events[n].id !== selectedEvent.id && relCount < 2) {
          relatedHtml += '<a class="btn btn-soft text-start" href="event.html?id=' + events[n].id + '">' + events[n].title + ' <span class="float-start">←</span></a>';
          relCount++;
        }
      }
    }
    relatedEvents.innerHTML = relatedHtml;
  }
}

// التحقق من نموذج الاتصال في contact.html
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.onsubmit = function() {
    var nameField = document.getElementById('userName');
    var emailField = document.getElementById('userEmail');
    var messageField = document.getElementById('userMessage');
    var alertBox = document.getElementById('contactAlert');

    var isValid = true;
    if (nameField.value === '') {
      isValid = false;
      nameField.focus();
    } else if (emailField.value.search(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) !== 0) {
      isValid = false;
      emailField.focus();
      emailField.select();
    } else if (messageField.value === '') {
      isValid = false;
      messageField.focus();
    }

    alertBox.className = 'alert';
    if (isValid) {
      alertBox.className += ' alert-success';
      alertBox.innerHTML = 'تم التحقق من البيانات بنجاح. هذا نموذج تجريبي ولا يتم إرسال الرسالة إلى خادم.';
      nameField.value = '';
      emailField.value = '';
      messageField.value = '';
    } else {
      alertBox.className += ' alert-danger';
      alertBox.innerHTML = 'تعذر إكمال النموذج. تحقق من الاسم والبريد الإلكتروني والرسالة.';
    }
    return false;
  };
}