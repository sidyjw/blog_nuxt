<template>
    <div>
        <TheHeader @sidenavToggle="show = !show"/>
        <TheSidenav :show="show" @close="show = false"/>
        <nuxt/>
    </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSidenav from "@/components/Navigation/TheSidenav.vue";

export default {
    data: () => ({
        show: false
    }),
    components: {
        TheHeader,
        TheSidenav
    }
};
</script>