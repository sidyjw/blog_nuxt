<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        PostList
    },
    computed: {
        ...mapGetters(["loadedPosts"])
    },
    async fetch({ store }) {
        console.log(process.client && "Está no cliente");
        console.log(process.server && "Está no servidor");

        /*
        Isso só será executado no lado do servido apenas 
        na primeira vez que carregamos a página (por que é aqui que o SEO importa) mas no monento que
        navegamos após o carregamento inicial ese código é executado no lado do cliente.
        
        */
    },
    created() {
        this.$store.dispatch("initPosts", this.loadedPosts);
    }
};
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
