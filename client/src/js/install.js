const butInstall = document.getElementById('buttonInstall');

// let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // event.preventDefault();
    // deferredPrompt = event;
    // butInstall.style.display = 'block'
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // if (deferredPrompt) {
    //     deferredPrompt.prompt();
    //     const result = await deferredPrompt.userChoice;
    //     deferredPrompt = null;
    //     butInstall.style.display = 'none'
    // }
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // console.log('App installed successfully')
    
    window.deferredPrompt = null;
});
