<template>
  <div>
    <sunHeader />
    <div class="content">
        <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
    <sunFooter />
  </div>
</template>