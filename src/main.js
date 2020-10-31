// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
 
const config = {
  apiKey: "AIzaSyA9k4CYioUkv-21Vfy-l-wNCNM_5RhhzQE",
  authDomain: "mail-test-25981.firebaseapp.com",
  databaseURL: "https://mail-test-25981.firebaseio.com",
  projectId: "mail-test-25981",
  storageBucket: "mail-test-25981.appspot.com",
  messagingSenderId: "863377271988",
  appId: "1:863377271988:web:56c19e37fc83399af7fbe1",
  measurementId: "G-8X17ZQELC3"
};
 
firebase.initializeApp(config);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
