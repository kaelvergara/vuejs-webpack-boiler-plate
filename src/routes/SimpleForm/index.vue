<template>
  <div>
    <span>SimpleForm</span>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="name" name="name" v-model="simpleForm.name.value">
          <span v-show="errors.has('name')" class="validation-error">{{ errors.first('name') }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="Email" name="email" v-model="simpleForm.email.value">
          <span v-show="errors.has('email')" class="validation-error">{{ errors.first('email') }}</span>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember me
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default" v-on:click="validateAll">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  name: 'SimpleForm',
  data: () => ({
    simpleForm: {
      email: {
        value: 'asdfasdf',
        validations: 'required|email',
      },
      name: {
        value: '',
        validations: 'required|alpha',
      },
    },
  }),
  methods: {
    validateAll() {
      const form = {};
      Object.keys(this.simpleForm).forEach((field) => {
        form[field] = this.simpleForm[field].value;
      });

      this.$validator.validateAll(form).then(() => {
        console.log('okay');
      }).catch(() => console.log('error'));
    },
  },
  created() {
    Object.keys(this.simpleForm).forEach((field) => {
      // validate field on value change
      this.$watch(`simpleForm.${field}.value`, (newValue) => {
        this.$validator.validate(field, newValue);
      });

      // attach field.
      this.$validator.attach(field, this.simpleForm[field].validations);
    });
  },
};
</script>

<style scope>
.validation-error {
  color: red;
}
</style>
