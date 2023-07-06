const observeUrlChange = () => {
  let oldHref = document.location.href
  const body = document.querySelector('body')
  const observer = new MutationObserver((mutations) => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href

      if (location.pathname !== '/' && localStorage.getItem('secret') !== 'gimlyrocks') {
        document.location.href = '/'
      }
    }
  })
  observer.observe(body, { childList: true, subtree: true })
}

window.onload = observeUrlChange

console.log(document.location.href)

/*if (location.pathname !== '/' && localStorage.getItem('secret') !== 'gimlyrocks') {
  document.location.href = '/'
}*/
