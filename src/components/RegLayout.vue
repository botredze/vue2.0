<template>
  <body>
  <div class="container pt-5">
    <div class="card">
      <h2>Добро пожаловать на страницу регистрации</h2>

      <div class="form-control">
        <input type="text"
               placeholder="Введите желаемое имя пользователя"
        >
        <small>Имя пользователя</small>

        <input type="password" placeholder="Введите пароль">

      </div>

      <div>
        <button class="btn primary">Зарегистроваться</button>
        <small>Пароль пользователя</small>
      </div>
      <div>
        <ul>Если вы уже зарегистрированы то <a href="login.html">Войдите</a> в свой аккаунт</ul>
      </div>

    </div>
  </div>
  </body>
  <router-view/>
</template>
