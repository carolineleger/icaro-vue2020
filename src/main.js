import { createApp } from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";

import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    loaded: false,
  },
  mutations: {
    imageLoaded(state) {
      state.loaded = true;
    },
  },
});

const app = createApp(App);
app.use(store);
app.use(VueLazyload);
app.mount("#app");
