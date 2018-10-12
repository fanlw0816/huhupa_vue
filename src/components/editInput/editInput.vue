<template>
  <div>
    <div v-show="!showInput" v-html="showData[props.content]" @click="switchShow"></div>
    <el-input
      v-show="showInput"
      :size="inputSize"
      :type="inputType"
      placeholder="请输入"
      @blur="switchShow"
      ref="editInput"
      v-model="showData[props.content]">
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'editInput',
  props: {
    inputSize: {
      type: String,
      default: 'small'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    showData: {},
    props: {
      default () {
        return {
          content: 'content'
        }
      }
    }
  },
  data () {
    return {
      inputValue: '',
      showInput: false
    }
  },
  directives: {
    focus: {
      update: function (el, {value}) {
        if (value) {
          el.focus()
        }
      }
    }
  },
  methods: {
    switchShow () {
      if (this.showInput) {
        this.showInput = false
      } else {
        // console.log(this.$refs.editInput.focus)
        this.$refs.editInput.focus()
        this.showInput = true
      }
    }
  }
}
</script>
