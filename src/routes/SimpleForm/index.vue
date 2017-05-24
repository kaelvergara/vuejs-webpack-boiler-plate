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
      <div class="form-group has-feedback">
        <label for="inputEmail3" class="col-sm-2 control-label">Coupon</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="Coupon" name="coupon" v-model="simpleForm.coupon.value">
          <span v-show="simpleForm.coupon.isLoading" class="glyphicon glyphicon-refresh glyphicon-refresh-animate form-control-feedback" aria-hidden="true"></span>
          <span v-show="errors.has('coupon')" class="validation-error">{{ errors.first('coupon') }}</span>
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
        value: '',
        validations: 'required|email',
        asyncValidation: false,
      },
      name: {
        value: '',
        validations: 'required|alpha',
        asyncValidation: false,
      },
      coupon: {
        value: '',
        validations: 'required|verify_coupon',
        asyncValidation: true,
        isLoading: false,
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
        // handle success
      }).catch(() => {
        // handle error
      });
    },
  },
  created() {
    Object.keys(this.simpleForm).forEach((field) => {
      // validate field on value change
      if (this.simpleForm[field].asyncValidation) {
        this.$watch(`simpleForm.${field}.value`, (newValue) => {
          this.simpleForm[field].isLoading = true;
          this.$validator.validate(field, newValue).then(() => {
            this.simpleForm[field].isLoading = false;
          }).catch(() => {
            this.simpleForm[field].isLoading = false;
          });
        });
      } else {
        this.$watch(`simpleForm.${field}.value`, (newValue) => {
          this.$validator.validate(field, newValue);
        });
      }

      // attach validation to field
      this.$validator.attach(field, this.simpleForm[field].validations);
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
