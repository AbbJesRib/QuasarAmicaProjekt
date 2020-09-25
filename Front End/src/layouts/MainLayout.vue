<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: pink">
      <q-toolbar>
        <q-toolbar-title>
          MatKollen
        </q-toolbar-title>

        <q-btn @click: router to="/loggedin">Logga In</q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated style="background-color: pink">
    <q-toolbar>
    <q-toolbar-title>
    Like for Matte
    </q-toolbar-title>
    Ignore for Fysik
    </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
