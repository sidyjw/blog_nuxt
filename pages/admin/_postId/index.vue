<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
    layout: "admin",
    components: {
        AdminPostForm
    },
    data: () => ({
        loadedPost: {
            author: "Sidinet",
            title: "Me awesome post",
            content: "Super Amazing",
            thumbnailLink: "https://www.google.com/google.jpg"
        }
    })
};
</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}
@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>
