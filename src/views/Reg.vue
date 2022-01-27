<template>

  <nav class="navbar">
    <div class="nav-wrapper">
      <a href="./src/assets/img.png" class="nav-wrapper"></a>
      <ul class="right hide-on-med-and-dow">
        <li><a class="waves-effect waves-light btn">Главное</a></li>
      </ul>
    </div>
  </nav>
  <div>
    <div class="grey darken-1 empty-layout">

      <body>
      <form @submit.prevent="handleSubmit">
        <div class="container pt-5">
          <div class="card">
            <h2>Добро пожаловать на страницу регистрации</h2>

            <div class="form-control">
              <input type="text" v-model="username" placeholder="Введите желаемое имя пользователя">
              <small>Имя пользователя</small>

              <input type="email" v-model="email" placeholder="Введите email">
              <small>Email</small>

              <input type="password" v-model="password" placeholder="Введите пароль">

            </div>

            <div>
              <button class="btn primary">Зарегистроваться</button>
              <small>Пароль пользователя</small>
            </div>
            <div>
              <ul>Если вы уже зарегистрированы то
                <router-link to="/login">Войдите</router-link>
                в свой аккаунт
              </ul>
            </div>

          </div>
        </div>
      </form>
      </body>

    </div>
  </div>
  <router-view/>
</template>

<script>


import axios from 'axios'

export default {
  name: 'register',

  data () {
    return {
      username: '',
      email: '',
      password: '',

    }
  },

  methods: {
    handleSubmit () {
      const data = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      console.log('submit')
      console.log(data)
    },

    axios.post('http:/localhost://8080/register', data)
      .then(
        res => {
          console.log(res)
        }).catch(
        err => {
          console.log(err)
        })

  }



}

</script>
