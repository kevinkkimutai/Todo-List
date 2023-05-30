import { createApp } from 'vue';
import App from './vue/app.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';


// Register Font Awesome icons
library.add( faCirclePlus, faTrash );

// Create the Vue app
const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component('FontAwesomeIcon', FontAwesomeIcon);

// Mount the app to the DOM
app.mount('#app');
