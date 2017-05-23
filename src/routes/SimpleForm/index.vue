<template>
  <div>
    <span>SimpleForm</span>
    <form class="mui-form">
      <legend>Title</legend>
      <div class="mui-textfield">
        <input type="text" placeholder="Name" v-model="name">
      </div>
      <div class="mui-textfield">
        <input type="text" placeholder="Last Name" v-model="lastName">
      </div>
      <div class="mui-textfield">
        <textarea placeholder="Textarea"></textarea>
      </div>
      <button type="submit" class="mui-btn mui-btn--raised">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SimpleForm',
  data: () => ({
    name: '',
    lastName: '',
  }),
};
</script>
