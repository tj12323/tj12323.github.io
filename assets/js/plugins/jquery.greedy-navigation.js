/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];
var raf = window.requestAnimationFrame || function(callback) {
  return window.setTimeout(callback, 16);
};
var navScrollTicking = false;

function getHashFromHref(href) {
  if (!href) return '';
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.slice(hashIndex);
}

function syncNavToggleState() {
  $btn.attr('aria-expanded', $hlinks.hasClass('hidden') ? 'false' : 'true');
}

function setActiveNavByHash(hash) {
  var targetHash = hash || '';

  $nav.find('a')
    .removeClass('is-active')
    .removeAttr('aria-current');

  if (!targetHash) return;

  $nav.find('a').each(function() {
    if (getHashFromHref($(this).attr('href')) === targetHash) {
      $(this).addClass('is-active').attr('aria-current', 'location');
    }
  });
}

function closeNavMenu() {
  $hlinks.addClass('hidden');
  $btn.removeClass('close');
  syncNavToggleState();
}

function updateActiveNavOnScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
  var scanLine = scrollTop + 130;
  var activeHash = '';
  var activeTop = -1;

  $nav.find('a').each(function() {
    var hash = getHashFromHref($(this).attr('href'));
    if (!hash) return;

    var sectionEl = document.getElementById(hash.slice(1));
    if (!sectionEl) return;

    var sectionTop = sectionEl.getBoundingClientRect().top + scrollTop;
    if (sectionTop <= scanLine && sectionTop > activeTop) {
      activeTop = sectionTop;
      activeHash = hash;
    }
  });

  if (activeHash) {
    setActiveNavByHash(activeHash);
  }
}

function queueNavScrollUpdate() {
  if (navScrollTicking) return;
  navScrollTicking = true;

  raf(function() {
    updateActiveNavOnScroll();
    navScrollTicking = false;
  });
}

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $vlinks.children().last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
  queueNavScrollUpdate();
});

$(window).on('scroll', queueNavScrollUpdate);

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
  syncNavToggleState();
});

$nav.on('click', '.visible-links a, .hidden-links a', function() {
  var hash = getHashFromHref($(this).attr('href'));
  if (hash) {
    setActiveNavByHash(hash);
  }
  closeNavMenu();
});

$(window).on('hashchange', function() {
  setActiveNavByHash(window.location.hash);
  closeNavMenu();
});

updateNav();
syncNavToggleState();
setActiveNavByHash(window.location.hash);
queueNavScrollUpdate();
