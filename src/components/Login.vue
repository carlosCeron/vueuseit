<template>
  <div class="login">
      <h3>Ingresar</h3>
      <input type="text" placeholder="Email"><br/>
      <input type="password" placeholder="Password"><br/>
      <button v-on:click="login">Enviar</button>
      <p>Tu no tienes una cuenta, Debes crear una cuenta!!, <router-link to="/sign-up">Crear Cuenta</router-link> </p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {}
  },
  methods: {
    signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            function (user) {
                alert('Ingresaste')
            },
            function (err) {
                alert('Ocurrio un error')
            }
        )
    }
  }
}
</script>

<style scoped>
.login{
    margin-top: 40px;

}

input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}

button{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
    cursor: pointer;
    border: none;
    background-color: #1de9b6;
    color: white;
    font-weight: bold;
}

p{
    margin-top: 40px;
    font-size: 13px;
}
</style>



