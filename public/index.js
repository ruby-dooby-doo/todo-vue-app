

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      tasks: [
        {text: 'Take out the garbage', completed: false},
        {text: 'Make the bed', completed: false},
        {text: 'Mow the lawn', completed: false}
      ],
      newTask: {text: "", completed: false}
    };
  },
  created: function() {},
  methods: {
    addTask: function() {
      console.log('adding the task...');
      // find the info i want to add to the tasks array
      // this.newTask
      // add that info to the tasks array
      // if a task is empty, don't add it.
      // if a task is not empty, do add it
      if (this.newTask.text !== "") {
        console.log('new task is NOT an empty string');
        this.tasks.push(this.newTask);
        this.newTask = {text: "", completed: false};
      }
    },
    removeTask: function(inputTask) {
      console.log('removeTask');
      // i need to remove the task
      // which task should I remove?
      console.log(inputTask);
      // find the index of inputTask
      var index = this.tasks.indexOf(inputTask);
      // remove that index from the array
      this.tasks.splice(index, 1);
      // this.tasks
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
