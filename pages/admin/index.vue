<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">Create post</AppButton>
        </section>
        <section class="existing-post">
            <h1>Existing posts</h1>
            <!-- Não preciso passar explicitamente true ou false para uma prop tipo Boolean -->
            <PostList isAdmin :posts="loadedPosts"/>
        </section>
    </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import AppButton from "@/components/UI/AppButton";
import { mapGetters } from 'vuex'
export default {
    layout: "admin",
    components: {
        PostList,
        AppButton
    },
    data: () => ({
        link: {
            name: "admin-new-post"
        }
    }),
    computed:{
        ...mapGetters(['loadedPosts'])
    }
};
</script>

<style scoped>
.admin-page {
    padding: 20px;
}

.new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
}

.existing-posts h1 {
    text-align: center;
}
</style>
