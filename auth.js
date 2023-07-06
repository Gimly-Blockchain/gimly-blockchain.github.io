const observeUrlChange = () => {
    let oldHref = document.location.href;
    const body = document.querySelector("body");
    const observer = new MutationObserver(mutations => {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;
        console.log(localStorage.getItem('secret'),document.location.href);
      }
    });
    observer.observe(body, { childList: true, subtree: true });
  };
  
  window.onload = observeUrlChange;
  console.log('inicie observeUrlChange');