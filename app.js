const app1 = new Vue({
  el: '#app1',
  data: {
    project: 'To Do',
    tech: 'App',
    listName: '',
    listDetails: []
  },
  methods: {
    showData () {
      this.listDetails.push({
        listId: this.listDetails.length ? this.listDetails.length + 1 : 1,
        listName: this.listName
      })
      this.listName = ''
    },
    removeData (index) {
      console.log('Id Is:', index)
      this.listDetails.splice(index, 1)
    }
  },
  computed: {
    projectTitle () {
      return this.project + ' ' + this.tech
    }
  }
})
