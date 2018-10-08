<template>
  <div>
    用户管理
  </div>
</template>

<script>

export default {
  name: 'User',
  components: {
  },
  data () {
    return {
      username: '',
      users: []
    }
  },
  created () {
    this.getUsers()
  },
  watch: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .search {
    margin-left: 10px;
    width: 200px;
    display: inline-block;
  }
</style>
