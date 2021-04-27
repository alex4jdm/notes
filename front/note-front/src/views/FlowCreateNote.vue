<template>
  <div class="home">
    <div>
      <h4>Note Title</h4>
      <input v-model="form.title" type="text" />
    </div>
    <div>
      <h4>Note Body</h4>
      <input v-model="form.body" type="text" />
    </div>
    <div class="create-flow-button-submit">
      <button :disabled="!form.title || !form.body" @click="onSubmitForm">Submit</button>
    </div>
  </div>
</template>

<script>
import generalService from '../services/general-services'

export default {
  data() {
    return {
      form: {
        title: null,
        body: null,
      }
    }
  },

  methods: {
    onSubmitForm() {
      generalService.createNotes(this.form).then(() => {
        this.form = null;
        this.body = null;
      })
    }
  },
}
</script>

<style>
.home{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
}
.create-flow-button-submit{
  margin-top: 1.5em;
  cursor: pointer;
}
.create-flow-button-submit button {
  cursor: pointer;
}
</style>
