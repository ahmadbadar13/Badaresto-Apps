import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker is not supported in the browser');
    return;
  }

  const workbox = new WorkboxWindow.Workbox('/sw.bundle.js');

  try {
    await workbox.register();
    console.log('Service worker registered successfully');
  } catch (error) {
    console.error('Failed to register service worker:', error);
  }
};

export default swRegister;