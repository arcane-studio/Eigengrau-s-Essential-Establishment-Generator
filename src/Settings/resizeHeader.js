// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() }

function scrollFunction () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('passage-header').style.backgroundColor = '#eeeeee'
    const title = document.getElementById('page-title')
    title.classList.remove('invis-title')
    title.classList.add('big-title')
  } else {
    document.getElementById('passage-header').style.backgroundColor = 'transparent'
    const title = document.getElementById('page-title')
    title.classList.remove('big-title')
    title.classList.add('invis-title')
  }
}
