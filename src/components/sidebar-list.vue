<template>
  <div class="sidebar-list-component">
    <v-list dense>
      <v-list-item
        v-for="(item, index) in items"
        :key="'sidebar-list-item-' + index"
        link
        :to="item.path"
        >
        <v-list-item-action>
          <v-icon> {{ item.iconName }} </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> {{ item.title }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
/**
 * @name sidebarList
 * @description Simple sidebar list with dynamic item rendering
 * @version 1.0.0
 * @property {Object[]} [items=pages] - The elements of list.
 * @property {string} items[].title - The title of element.
 * @property {string} items[].iconName - The icon name of element (just mdi supported).
 * @property {string} items[].path - The route path of element.
 */
export default {
  name: 'SidebarList',
  props: {
    items: {
      type: Array,
      default: function () {
        const routes = this.$router.options.routes[0]
        const visibleRoutes = routes.children.filter(route => route.meta.isVisible || !('isVisible' in route.meta))
        visibleRoutes.sort((a, b) => a.meta.order < b.meta.order ? -1 : 1)

        return visibleRoutes.map(route => ({
          title: this.$vuetify.lang.t(`$vuetify.pages.${route.name}.title`),
          path: `${routes.path}${route.path}`,
          iconName: route.meta.iconName
        }))
      },
      required: false
    }
  }
}
</script>
