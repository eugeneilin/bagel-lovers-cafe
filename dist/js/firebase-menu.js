// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJxiyuRxrlK0vzfW62dSwoNVXDQ5RuX4s',
  authDomain: 'bagelloverscafe-2e950.firebaseapp.com',
  databaseURL: 'https://bagelloverscafe-2e950.firebaseio.com',
  projectId: 'bagelloverscafe-2e950',
  storageBucket: 'bagelloverscafe-2e950.appspot.com',
  messagingSenderId: '703195247242',
  appId: '1:703195247242:web:56eabc1664efddfdedf373',
  measurementId: 'G-1VYX2P5KZ6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();
const storage = firebase.storage();

db.collection('menu')
  .get()
  .then((menuSnapshot) => {
    const menu = menuSnapshot.docs.map((doc) => {
      return doc.data();
    });
    // Menu Controls
    // Get menu-wrapper
    const menuWrapper = document.querySelector('.menu-wrapper');
    // Get btn-container
    const container = document.querySelector('.btn-container');

    // Load menu items and menu buttons
    // window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuBtns();
    // });

    // Display menu items
    function displayMenuItems(menuItems) {
      let displayMenu = menuItems.map(function (item) {
        // const img = storage.ref(item.img);
        // storage
        //   .ref()
        //   .child(item.img)
        //   .getDownloadURL()
        //   .then(function (img) {
        return `<div class="menu-item">
      <!-- <img src=${item.img} class='img'> -->
      <div class="item-info">
        <div>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <p class='item-text'>${item.desc}</p>
      </div>
    </div>`;
      });
      // });

      // Remove the comma
      displayMenu = displayMenu.join('');

      // Insert into HTML
      menuWrapper.innerHTML = displayMenu;
    }

    // Display menu buttons
    function displayMenuBtns() {
      // Get only unique categories
      const categories = menu.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }

          return values;
        },
        ['all']
      );

      // Create element for btns w/ their respective categories
      const categoryBtns = categories
        .map(function (category) {
          return `<div class="filter-btn" data-id='${category}'>${category}</div>`;
        })
        .join('');
      container.innerHTML = categoryBtns;
      const filterBtns = container.querySelectorAll('.filter-btn');

      // Filter buttons
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          if (category === 'all') {
            displayMenuItems(menu);
          } else {
            displayMenuItems(menuCategory);
          }
        });
      });
    }
  });
