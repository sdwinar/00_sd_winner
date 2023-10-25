<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
<nav dir="rtl" class="navbar navbar-expand-lg " :class="isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'">
      <a class="navbar-brand" href="#">

    <img :style="isDark ? '!important' : 'filter: invert(1) !important'"
     src="../../../img/logo.png" width="120" alt="">
      </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/" active-class="active-link">الـرئـيسية</router-link>
          </li>
          <li class="nav-item active">
        <router-link class="nav-link" to="/about" active-class="active-link">الخـدمات</router-link>
          </li>
      <li class="nav-item">
        <a class="nav-link" href="#">about</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <button style="      background: none;    border: none;      "
        :class="isDark ? 'btn_dark' : 'btn_light'"
        :style="isDark ? 'color:white  !important' : 'color:black !important'"
        @click="toggleDark()"
        class="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-black"
      >
        <font-awesome-icon

          :icon="isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"
        />
      </button>
  </div>
</nav>
<!-- <router-link></router-link> -->

</template>
<script>
</script>
