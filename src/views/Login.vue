<template>
  <div class="grey darken-1 empty-layout">
    <nav class="navbar">
      <div class="nav-wrapper">
        <ul class="right hide-on-med-and-dow">
          <li><a class="waves-effect waves-light btn"> Главное </a></li>
        </ul>
      </div>
    </nav>
  <body>
  <div class="container pt-5">
    <div class="card">
      <div class="form-control">
        <h2>Войти в систему</h2>
        <input class="validate" id="username" type="text" placeholder="Введите имя пользователя">
        <small class ="helper-text invalid">Имя пользователя</small>

        <br>
        <input  type="password" placeholder="Введите пароль">
        <small class="helper-text invalid">Пароль</small>
      </div>
      <div>
        <button class="btn primary" >Войти</button>
        <ul> Для регистрации нажмите: <router-link to="/register"> Зарегистрироваться</router-link></ul>
      </div>
    </div>
  </div>
  </body>
  </div>
  <router-view/>
</template>

<script>
export default {

}
</script>
