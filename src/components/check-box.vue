<template>
  <div class="check w-full flex row items-center cursor-pointer" @click="$emit('input', !value)">
    <div class="check-box"
        :class="{'active border-success': value, 'border-d_grey': !value}" 
    >
      <div class="bg absolute bg-success"></div>
      <div class="checker absolute"></div>
    </div>
    <div class="check-title ml-3" v-if="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'vCheckBox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .check{
    &:hover{
      & .checker{
        transform: scale(0.75);
        transition: 0.3s;
        &:after, &:before{
          background-color: #B9B9B9;
        }
      }
    }
    &-box{
      max-width: 12px;
      max-height: 12px;
      min-width: 12px;
      min-height: 12px;
      border-width: 1px;
      border-style: solid;
      border-radius: 2px;
      transition: 0.3s;
      position: relative;
      overflow: hidden;
      &.active{
        &>.bg{
          transform: scale(1);
        }
        &>.checker{
          transition: 0.3s;
          transform: scale(1);
          &:after, &:before{
            background: white;
          }
        }
      }
      &>.bg{
        width: 100%;
        height: 100%;
        transform: scale(0);
        transition: 0.3s;
      }
      &>.checker{
        width: 100%;
        height: 100%;
        transform: scale(0);
        &:after, &:before{
          content: "";
          width: 3px;
          position: absolute;
          background: white;
        }
        &:after{
          height: 6px;
          top: 4px;
          left: 3px;
          transform: rotate(-45deg);
        }
        &:before{
          height: 8px;
          top: 2px;
          left: 6px;
          transform: rotate(45deg);
        }
      }
    }
  }
</style>