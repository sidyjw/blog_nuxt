<template>
    <section class="post-list">
        <PostPreview isAdmin postId="ddadsd"/>
        <PostPreview isAdmin postId="dsadsagcv"/>
        <PostPreview isAdmin postId="xsdafasdasd"/>
    </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
export default {
    components: {
        PostPreview
    },
    props: {
        isAdmin: Boolean
    }
};
</script>
<style scoped>
.post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
