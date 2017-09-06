<template>
  <div class="sign-up">
      <p>Crea una nueva cuenta!</p>
      <input type="text" placeholder="Email" /><br/>
      <input type="password" placeholder="Password" /><br/>
      <button>Registrarse</button>
  </div>
</template>


<script>
export default {
  name: 'signUp',
  data: function () {
    return {}
  },
  methods: {

  }
}
</script>


<style scoped>
.sign-up{
    margin-top:px; 
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

span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>

