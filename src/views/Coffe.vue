<template>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Coffee queue</title>
  <link rel="stylesheet" href="../vue2.0/src/style/style.css">
  </head>

  <div id="app" class="container pt-5">
  <div class="card ">
    <h1> {{title}}</h1>
    <div class="form-control">
      <input type="text"
             v-bind:placeholder="placeholdereEmail"
             v-bind:value="username"
             v-on:input="inputChangeHandler"
             v-on:keypress.enter="addNewNote"
      />
    </div>
    <h2>User: {{username}}</h2>
    <div>
      <button class="btn" v-on:click="addNewNote">Добавить</button>
      <button class="btn danger" v-on:click="removeNote(idx, $event)">Удалить c очереди</button>
    </div>
    <ul class="list" v-if="notes.length !== 0">

      <li class ="list-item" v-for="(note,idx) in notes">
        ({{idx +1}})  {{note}}
      </li>
      <strong> Ожидают в очереди: {{notes.length}}</strong>
    </ul>

    <div v-else>В очереди пока никого, Можете быть первым</div>

  </div>
  </div>
</template>
<script>

import { io } from 'socket.io-client'
const socket = io('127.0.0.1:3000')

export default {
  name: 'coffee',
  props: {
    msg: String
  },

methods: {
      inputChangeHandler(event){
        this.username = event.target.value
      },
      addNewNote() {
        if(this.username !== ''){
          this.notes.push(this.username)
          this.username = ''
        }
      },
      removeNote(idx){
        this.notes.splice(idx, 1)
      }

    },

  data(){
    return{
      placeholdereEmail: 'Введите имя',
      placeholderPassword: 'Введите пароль',
      title: 'Очередь на кофе',
      username: '',
      notes: ['User 1','User 2','User 3','User 4','User 5'],
      holdTime: '',
      password: '',
    }
  }

}

</script>
