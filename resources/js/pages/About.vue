<script setup>
import Nav from "@/components/main/Nav.vue";
import Head from "@/components/main/Head.vue";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>
<template>
    <Head></Head>
  <Nav></Nav>

  <h1 :style="isDark ? 'color:black  !important' : 'color:white !important'">about</h1>
</template>
