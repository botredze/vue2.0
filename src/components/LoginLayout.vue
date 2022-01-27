<template>
  <body>
  <div class="container pt-5">
    <div class="card">

      <div class="form-control">
        <h2>Войти в систему</h2>
        <input v-model="data.email" class="validate" id="username" type="text" placeholder="Введите имя пользователя">
        <small class ="helper-text invalid">Имя пользователя</small>

        <br>
        <input v-model="data.password" type="password" placeholder="Введите пароль">
        <small class="helper-text invalid">Пароль</small>
      </div>
      <div>
        <button class="btn primary" v-on:click="login">Войти</button>
        <button class="btn warning"> Заригистрироваться</button>
      </div>
    </div>
  </div>
  </body>
  <router-view/>
</template>


