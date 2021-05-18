<template>
  <div>
    <router-link to="/">你猜</router-link>
    <router-link to="/xxx">我不猜</router-link>
  </div>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
}
</script>
