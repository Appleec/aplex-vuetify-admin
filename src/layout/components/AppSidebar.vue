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
      <template v-for="item in items">
        <v-row
          v-if="item.heading"
          :key="item.heading"
          align="center"
        >
          <v-col cols="6">
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-col>
          <v-col
            cols="6"
            class="text-center"
          >
            <a
              href="#!"
              class="body-2 black--text"
            >EDIT</a>
          </v-col>
        </v-row>
        <v-list-group v-else-if="item.children" :prepend-icon="item.icon" :key="item.text" value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(child, i) in item.children" :key="i" @click="() => {}" link>
            <v-list-item-action>
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{ child.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item v-else :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppSidebar',
  data: () => ({
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
  }),
  computed: {
    routes () {
      console.log(this.$router.options.routes)
      return this.$router.options.routes
    }
  },
  methods: {
    toggleSidebar () {
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
