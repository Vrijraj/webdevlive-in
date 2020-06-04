import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      // {
      //   text: "Agenda",
      //   to: "/agenda",
      //   icon: "mdi-assistant",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //   },
      // },
      {
        text: "Schedule",
        to: "/schedule",
        icon: 'mdi-format-float-left',
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Speakers",
        to: "/speakers",
        icon: 'mdi-account-switch',
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Team",
        to: "/team",
        icon: "mdi-account-multiple",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "FAQ",
        to: "/faq",
        icon: "mdi-note-text",
        meta: {
          showToolbar: false,
          showBottomNav: false,
        },
      },
      // {
      //   text: "About",
      //   to: "/about",
      //   icon: "mdi-information-outline",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //   },
      // },
      // {
      //   text: "Partners",
      //   to: "/partners",
      //   icon: "mdi-account-settings",
      //   meta: {
      //     showToolbar: false,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Blogs",
      //   to: "/blogs",
      //   icon: "mdi-receipt",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
    ],
  },
  getters: {
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {},
  modules: {},
});
