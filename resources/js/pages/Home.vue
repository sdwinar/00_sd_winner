<script setup>
import Nav from "@/components/main/Nav.vue";
import Head from "@/components/main/Head.vue";
import Video from "@/components/home/01_video_background.vue";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>
<template>
    <Head></Head>
  <Nav></Nav>
  <Video></Video>

</template>
