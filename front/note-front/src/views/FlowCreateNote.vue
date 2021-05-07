<template>
  <div class="home">
    <form @submit.prevent="onSubmitForm">
      <b-row>
        <b-col class="d-flex flex-column align-items-center">
          <h4>Note Title</h4>
          <b-form-input v-model="form.title" type="text" />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="d-flex flex-column align-items-center mt-2">
          <h4>Note Body</h4>
          <b-form-input v-model.trim="$v.form.$body" type="text" />
          <div class="error" v-if="!$v.form.body.required">Body is required</div>
        </b-col>
      </b-row>
    </form>
    <div class="create-flow-button-submit">
      <b-button :disabled="!form.title || !form.body" @click="onSubmitForm"
        >Submit</b-button
      >
    </div>
  </div>
</template>

<script>
import generalService from "../services/general-services";
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        title: null,
        body: null,
      },
    };
  },

  validations: {
    form: {
      title: { required },
      body: { required },
    },
  },

  methods: {
    onSubmitForm() {
      generalService.createNotes(this.form).then(() => {
        this.form = null;
        this.body = null;
      });
    },
  },
};
</script>

<style>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.create-flow-button-submit {
  margin-top: 1.5em;
  cursor: pointer;
}
.create-flow-button-submit button {
  cursor: pointer;
}
</style>
