<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-navigation-drawer
    v-model="drawer"
    :clipped="clipped"
    :floating="floating"
    :mini-variant="miniVariant"
    :temporary="temporary"
    app
    overflow
    width="232"
    mobile-break-point="400"
  >
    <!--占位符-->
    <v-toolbar dense />

    <v-list dense expand>
      <template v-for="item in routes">
        <div v-if="!item.hidden">
          <v-list-item v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow" :key="item.name" link>
            <v-list-item-action v-if="onlyOneChild.meta">
              <v-icon>{{ onlyOneChild.meta.icon||(item.meta&&item.meta.icon) }}</v-icon>
            </v-list-item-action>

            <v-list-item-content v-if="onlyOneChild.meta">
              <v-list-item-title>{{ onlyOneChild.meta.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-else :key="item.text" :prepend-icon="item.icon" value="true">
            <template v-if="item.meta" v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(child, i) in item.children" :key="i" link @click="() => {}">
              <v-list-item-action v-if="child.meta">
                <v-icon>{{ child.meta && child.meta.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content v-if="child.meta">
                <v-list-item-title>
                  {{ child.meta.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </template>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    this.onlyOneChild = null
    return ({
      drawer: false,
      temporary: true,
      miniVariant: false,
      floating: false,
      clipped: true,
      items: [
        { icon: 'mdi-home', text: 'Home' },
        {
          icon: 'mdi-settings',
          text: 'Table',
          children: [
            { icon: '', text: 'set version' },
            { icon: '', text: 'set user' }
          ]
        },
        {
          icon: 'mdi-settings',
          text: 'Setting',
          children: [
            { icon: '', text: 'set version' },
            { icon: '', text: 'set user' }
          ]
        }
      ]
    })
  },
  computed: {
    routes() {
      console.log(this.$router.options.routes)
      return this.$router.options.routes
    }
  },
  mounted() {
    // console.log(this.$router.options.routes)
    // const item = this.$router.options.routes[1]
    // console.log(this.hasOneShowingChild(item.children, item))
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    toggleSidebar() {
      this.drawer = !this.drawer
    },
    genChildTarget(item, subItem) {
      if (subItem.href) return
      if (subItem.component) {
        return {
          name: subItem.component
        }
      }
      return { name: `${item.group}/${subItem.name}` }
    }
  }
}
</script>

<style scoped>
</style>
