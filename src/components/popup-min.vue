<template>
	<div class="popup_min relative" @click="$emit('click', true)">
		<slot></slot>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
	.popup_min{
		box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
		&:after{
			content: "";
			position: absolute;
			max-width: 14px;
			max-height: 14px;
			min-width: 14px;
			min-height: 14px;
			left: 50%;

			box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
			background-color: inherit;
			transform: rotate(45deg) translateY(77.5%);
			border-right-width: 1px;
			border-bottom-width: 1px;
			border-top-width: 0;
			border-left-width: 0;
			border-style: solid;
			border-color: inherit;
			bottom: 0;
			z-index: 0;
		}
	}
</style>