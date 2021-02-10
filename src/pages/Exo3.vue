<template>
  <div>
  <section v-show="viewForm">
    <h2>Inscription</h2>
    <label
        v-for="input in inputForm"
        :key="input.id"
        :for="input.name">
      {{ input.label}}
      <input :name="input.name"
             :type="input.type"
             v-model="valueForm[input.name]"
             :placeholder="input.label" />
    </label> <br />
    <button @click="checkForm">Inscription</button>
    <span class="error">{{ message}} </span>
  </section>
    <section v-show="!viewForm">
      <h2> Bienvenue {{ valueForm.firstName}}</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: "exo3",
  data() {
    return {
      valueForm: {
        firstName: '',
        lastName: '',
        email: '',
        birthday: ''
      },
      viewForm: true,
      message: '',
      inputForm: [
        {
          id:0,
          label: 'Prenom :',
          name: 'firstName',
          type: 'text'
        },
        {
          id: 1,
          label: 'Nom :',
          name: 'lastName',
          type:'text'
        },
        {
          id:2,
          label: 'Email : ',
          name: 'email',
          type: 'email'
        },
        {
          id:3,
          label: 'Birthday :',
          name: 'birthday',
          type:'date'
        }
      ]
    }
  },
  computed: {
    firstname: function () {
      return this.valueForm.firstName.length > 0;
    },
    lastName: function () {
      return this.valueForm.lastName.length > 0;
    },
    birthDay: function () {
      return this.valueForm.birthday.length > 0;
    },
    email: function () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.valueForm.email);
    }



  },
  methods: {
    checkForm: function () {
      if ((!this.lastName) || (!this.firstname) || (!this.birthDay)) {
        this.message = 'tout doit etre rempli'
      } else {
        if (!this.email) {
          this.message = 'email invalidey'
        } else {
          this.message = ''
          this.viewForm = false
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
section {
  width: 40vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  label {
    text-align: right;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    input {
      width: 200px;
      height: 30px;
      border-radius: 20px;
      border:1px solid #D4E09B;
      text-align: center;
    }
  }
  button {
    margin: auto;
    width: 200px;
    height: 35px;
    color: #F6F4D2;
    border-radius: 20px;
    background-color: #F19C79;
    border:1px solid #F19C79;
    cursor: pointer;
    &:hover {
      background-color: #A44A3F;
      border-color: #A44A3F;
    }
  }
  .error {
    margin-top: 20px;
    color: #A44A3F;
  }
}



</style>
