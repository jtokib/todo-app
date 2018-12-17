<template>
  <div class='ui basic content center aligned segement'>
    <div class='ui centered card'>
      <div class='content'>
        <div class='header'>Add an Item</div>
      </div>
      <button class='ui top attached basic button icon' v-on:click='openForm' v-show='!isCreating'>
        <i class='plus icon'></i>
      </button>
    </div>

    <div class='ui centered card' v-show='isCreating'>
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model='titleText' type='text' ref='title' defaultValue>
          </div>
          <div class='field'>
            <label>Project</label>
            <input v-model='projectText' type='text' ref='project' defaultValue>
          </div>
          <div class='ui two buton attached buttons'>
            <button class='ui basic blue button' v-on:click='sendForm()'>Create</button>
            <button class='ui basic red button' v-on:click='closeForm'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: '',
      projectText: '',
      isCreating: false
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const titleTx = this.titleText
        const projectTx = this.projectText
        this.$emit('create-todo',
          titleTx,
          projectTx
        )
        this.titleText = ''
        this.projectText = ''
      }
      this.isCreating = false
    }
  }
};
</script>

<style>
.ui.centered.card {
  margin-top: 2em;
}
</style>