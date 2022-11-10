<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>
<template>
  <div>
    <div class="buttons" v-if="session.user == null">
      <a class="button is-primary">
        <strong>Sign up</strong>
      </a>
      <router-link class="button is-light" to="login"> Log in </router-link>
    </div>
    <div v-else>
      Welcome {{session.user.Name}} ({{session.user.Email}})
      (<a @click="logout()">
        Logout
      </a>)
    </div>
  </div>
</template>

<style scoped></style>
