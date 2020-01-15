<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <v-list-item v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow" link :to="resolvePath(onlyOneChild.path)">
      <template v-if="onlyOneChild.meta">
        <v-list-item-action v-if="onlyOneChild.meta">
          <v-icon>{{ onlyOneChild.meta.icon||(item.meta&&item.meta.icon) }}</v-icon>
        </v-list-item-action>

        <v-list-item-content v-if="onlyOneChild.meta">
          <v-list-item-title>{{ onlyOneChild.meta.title }}</v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>

    <v-list-group v-else :key="item.text" :prepend-icon="item.icon" value="true">
      <template v-if="item.meta" v-slot:activator>
        <v-list-item-action>
          <v-icon>{{ item.meta.icon||(item.meta&&item.meta.icon) }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="(child, i) in item.children" :key="i" link :to="resolvePath(child.path)" @click="() => {}">
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

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'

export default {
  name: 'SidebarItem',
  components: { },
  mixins: [],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
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
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
