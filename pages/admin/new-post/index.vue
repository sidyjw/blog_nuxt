<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <!-- É sempre bom usar kebab-case nos nomes de eventos -->
            <AdminPostForm :props="{}" @submit-post="onSubmited"/>
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
    data() {
        return {
            newPost: {}
        };
    },
    methods: {
        onSubmited(postData) {
            this.$store.dispatch("addPost", postData);
            this.$router.push('/admin')
        }
    }
};
</script>

<style scoped>
.new-post-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .new-post-form {
        width: 500px;
    }
}
</style>
