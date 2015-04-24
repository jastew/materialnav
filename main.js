var nav           = document.getElementsByClassName('js-nav')[0],
    nav_toggle    = document.getElementsByClassName('js-nav-toggle')[0],
    overlay       = document.getElementsByClassName('js-page-overlay')[0],
    search        = document.getElementsByClassName('js-dropdown-search')[0],
    search_toggle = document.getElementsByClassName('js-search-toggle')[0];



function open(el) 
{
  el.removeClass('is-hidden');
}

function close(el)
{
	el.addClass('is-hidden')
}

function toggleNav()
{
	nav.classList.toggle('is-hidden');
	overlay.classList.toggle('is-hidden');
}

function toggleSearch()
{
	search.classList.toggle('is-hidden');
}

nav_toggle.addEventListener('click', toggleNav);
overlay.addEventListener('click', toggleNav);

search_toggle.addEventListener('click', toggleSearch);
