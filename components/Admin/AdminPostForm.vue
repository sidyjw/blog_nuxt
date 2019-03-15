<template>
    <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

        <AppControlInput v-model="editedPost.title">Title</AppControlInput>

        <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>

        <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>

        <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview</AppControlInput>

        <AppButton type="submit">Save</AppButton>

        <AppButton
            type="button"
            style="margin-left: 10px"
            btn-style="cancel"
            @click="onCancel"
        >Cancel</AppButton>
    </form>
</template>
<script>
import AppButton from "@/components/UI/AppButton.vue";
import AppControlInput from "@/components/UI/AppControlInput.vue";

export default {
    components: {
        AppButton,
        AppControlInput
    },
    data() {
        return {
            editedPost: (this.post && this.post) || {
                author: "",
                title: "",
                thumbnail: "",
                previewText: "",
                content: "",
                id: this.post && this.post.id
            }
        };
    },
    props: {
        post: Object
    },
    methods: {
        onSave() {
            //Pra deixar um componente desaclopado o ideal é sempre ficar
            //enviando os dados atraves de eventos
            this.$emit("submit-post", this.editedPost);
        },
        onCancel() {
            this.$router.push("/admin");
        }
    }
};
</script>