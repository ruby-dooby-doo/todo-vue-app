

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      tasks: [
        {text: 'Take out the garbage', completed: true},
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
    completeTask: function(inputTask) {
      console.log('removeTask');
      // if the task is completed, make it incomplete, if it's incoplete make it complete
      inputTask.completed = !inputTask.completed;

      // ugly syntax
      // this.$set(inputTask, 'completed', !(inputTask.completed));
      // if (inputTask.completed === true) {
      //   inputTask.completed = false;
      // } else {
      //   inputTask.completed = true;
      // }

      // i need to remove the task
      // which task should I remove?
      // console.log(inputTask);
      // // find the index of inputTask
      // var index = this.tasks.indexOf(inputTask);
      // // remove that index from the array
      // this.tasks.splice(index, 1);
      // this.tasks
    },
    numberOfIncompleteTasks: function() {
      // find all the tasks
      // figure out how many are incomplete
      var counter = 0;
      for (var i = 0; i < this.tasks.length; i++) {
        // if a task is complete, add to the counter
        if (!this.tasks[i].completed) {
          counter++;
        }
      }
      return counter;
    },
    removeCompletedTasks: function() {
      console.log('removing completed tasks...');
      // loop through the array of tasks
      // collect all the tasks that are not complete
      // reset the tasks variable to the incompleted tasks
      var incompleteTasks = [];
      for (var i = 0; i < this.tasks.length; i++) {
        if (!this.tasks[i].completed) {
          // push into the array of incomplete tasks
          incompleteTasks.push(this.tasks[i]);
        }
      }
      this.tasks = incompleteTasks;
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

