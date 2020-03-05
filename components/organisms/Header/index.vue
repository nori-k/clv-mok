<template>
  <div>
    <v-app-bar app clipped-right absolute color="white" elevation="5">
      <v-toolbar-title>
        <div class="header__logo">
          <nuxt-link to="/">
            <v-img
              height="28"
              width="98"
              alt="Clove クローブ"
              :src="require('@/assets/images/logo/black.svg')"
            />
          </nuxt-link>
        </div>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawerRight" app clipped right floating>
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawerRight: null
  })
};
</script>
