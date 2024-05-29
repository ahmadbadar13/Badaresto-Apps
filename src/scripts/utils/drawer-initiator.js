const DrawerInitiator = {
    init({ button, drawer, content, }) {
      button.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer);
      });
  
      content.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    },
  
    _toggleDrawer(event, drawer) {
      event.stopPropagation();
      const mobileDisplay = window.innerWidth <= 760;
      if (mobileDisplay) {
        if (drawer.style.display === 'block') {
          drawer.style.display = 'none';
        } else {
          drawer.style.display = 'block';
        }
      }
    },
  
    _closeDrawer(event, drawer) {
      event.stopPropagation();
      const mobileDisplay = window.innerWidth <= 760;
      if (mobileDisplay) {
        drawer.style.display = 'none';
      }
    },
  };
  
  export default DrawerInitiator;