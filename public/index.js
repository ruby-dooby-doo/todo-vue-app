/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      tasks: [],
      newTask: {text: "", completed: false}
    };
  },
  created: function() {
    console.log('in the created function');
    // make a web request to my api to get the data
    axios.get('/api/tasks').then(function(response) {
      console.log(response.data);
      this.tasks = response.data;
    }.bind(this));
  },
  methods: {
    addTask: function() {
      console.log('adding the task...');
      // find the info i want to add to the tasks array
      // this.newTask
      // add that info to the tasks array
      // if a task is empty, don't add it.
      // if a task is not empty, do add it
      // if (this.newTask.text !== "") {
      console.log('new task is NOT an empty string');
      // }
      var theParams = {
        text: this.newTask.text
      };

      axios.post('/api/tasks', theParams).then(function(response) {
        console.log('in the response of the create people');
        this.tasks.push(response.data);
        this.newTask = {text: "", completed: false};
      }.bind(this));
    },
    completeTask: function(inputTask) {
      console.log('completeTask');
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
        // if a task is incomplete, add to the counter
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
    },
    removeTask: function(inputTask) {
      console.log('removing the task...');
      // send a delete request to the API -- backend
      axios.delete('/api/tasks/' + inputTask.id).then(function(response) {
        console.log('in the delete callback');
        // remove the task from the array -- frontend
        var index = this.tasks.indexOf(inputTask);
        // // remove that index from the array
        this.tasks.splice(index, 1);
        //
      }.bind(this));
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

