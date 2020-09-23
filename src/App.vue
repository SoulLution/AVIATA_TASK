<template>
  <div id="app">
  	<div class="header w-100 bg-d_grey mb-4"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
	.header{
		height: 102px;
	}
</style>
