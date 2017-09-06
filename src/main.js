// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


var config = {
  apiKey: 'AIzaSyBJGSlah-iVxctthSI3y6JaLWcbD37H8O0',
  authDomain: 'alquemediachat.firebaseapp.com',
  databaseURL: 'https://alquemediachat.firebaseio.com',
  projectId: 'alquemediachat',
  storageBucket: 'alquemediachat.appspot.com',
  messagingSenderId: '51377753332'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
