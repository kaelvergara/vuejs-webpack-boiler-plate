<template>
  <div>
    <span>SimpleForm</span>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="name" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-10">
          <input name="name"type="text" class="form-control" v-model="simpleForm.name.value">
          <span v-show="errors.has('name')" class="validation-error">{{ errors.first('name') }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="email" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" name="email" v-model="simpleForm.email.value">
          <span v-show="errors.has('email')" class="validation-error">{{ errors.first('email') }}</span>
        </div>
      </div>
      <div class="form-group has-feedback">
        <label for="username" class="col-sm-2 control-label">Username</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" name="username" v-model="simpleForm.username.value">
          <span
            v-show="simpleForm.username.isLoading"
            class="glyphicon glyphicon-refresh glyphicon-refresh-animate form-control-feedback"
            aria-hidden="true" />
          <span v-show="errors.has('username')" class="validation-error">{{ errors.first('username') }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="description" class="col-sm-2 control-label">Description</label>
        <div class="col-sm-10">
          <textarea class="form-control" rows="3"  name="description" v-model="simpleForm.description.value"></textarea>
          <span v-show="errors.has('description')" class="validation-error">{{ errors.first('description') }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="gender" class="col-sm-2 control-label">Gender</label>
        <div class="col-sm-10">
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" value="male" v-model="simpleForm.gender.value" /> Male
          </label>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" value="female" v-model="simpleForm.gender.value" /> Female
          </label>
          <div>
            <span v-show="errors.has('gender')" class="validation-error">{{ errors.first('gender') }}</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="languages" class="col-sm-2 control-label">Languages</label>
        <div class="col-sm-10">
          <label class="checkbox-inline">
            <input type="checkbox" value="Java" v-model="simpleForm.languages.value" />
            Java
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" value="Javascript" v-model="simpleForm.languages.value" />
            Javascript
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" value="Ruby" v-model="simpleForm.languages.value" />
            Ruby
          </label>
          <div>
            <span v-show="errors.has('languages')" class="validation-error">{{ errors.first('languages') }}</span>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="course" class="col-sm-2 control-label">Course</label>
        <div class="col-sm-10">
          <select class="form-control" v-model="simpleForm.course.value">
            <option>IT</option>
            <option>CS</option>
            <option>ECE</option>
          </select>
          <div>
            <span v-show="errors.has('course')" class="validation-error">{{ errors.first('course') }}</span>
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
import debounce from 'lodash/debounce';
import noop from 'lodash/noop';

Vue.use(VeeValidate);

export default {
  name: 'SimpleForm',
  data: () => ({
    simpleForm: {
      email: {
        value: '',
        validations: 'required|email',
        debounce: 250,
      },
      name: {
        value: '',
        validations: 'required|alpha',
      },
      username: {
        value: '',
        validations: 'required|unique_username',
        asyncValidation: true,
        isLoading: false,
        debounce: 500,
      },
      description: {
        value: '',
      },
      gender: {
        value: '',
        validations: 'required',
      },
      languages: {
        value: [],
        validations: 'required',
      },
      course: {
        value: '',
        validations: 'required',
      },
    },
  }),
  methods: {
    validateAll() {
      const form = {};
      Object.keys(this.simpleForm).forEach((field) => {
        if (this.simpleForm[field].validations) {
          form[field] = this.simpleForm[field].value;
        }
      });

      this.$validator.validateAll(form).then(() => {
        // handle success
      }).catch(() => {
        // handle error
      });
    },
  },
  created() {
    const asyncValidate = ({ field, newValue }) => {
      this.simpleForm[field].isLoading = true;
      this.$validator.validate(field, newValue).then(() => {
        this.simpleForm[field].isLoading = false;
      }).catch(() => {
        this.simpleForm[field].isLoading = false;
      });
    };

    const syncValidate = ({ field, newValue }) => {
      this.$validator.validate(field, newValue);
    };

    const debouncedAsyncValidate = delay => debounce(asyncValidate, delay);
    const debouncedSyncValidate = delay => debounce(syncValidate, delay);

    Object.keys(this.simpleForm).forEach((field) => {
      // listen for values and attach validation if there is
      if (this.simpleForm[field].validations) {
        // include debounce if specified
        const delay = this.simpleForm[field].debounce;
        let validationFunction = noop;

        if (this.simpleForm[field].asyncValidation) {
          validationFunction = (delay) ? debouncedAsyncValidate(delay) : asyncValidate;
        } else {
          validationFunction = (delay) ? debouncedSyncValidate(delay) : syncValidate;
        }

        // validate field on value change
        this.$watch(`simpleForm.${field}.value`, (newValue) => {
          validationFunction({ field, newValue });
        });

        // attach field to validator
        this.$validator.attach(field, this.simpleForm[field].validations);
      }
    });
  },
};
</script>

<style scope>
.validation-error {
  color: red;
}

.glyphicon-refresh-animate {
  -webkit-animation-name: rotateThis;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
}

@-webkit-keyframes "rotateThis" {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
