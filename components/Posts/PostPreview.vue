<template>
    <nuxt-link :to="link" class="post-preview">
        <article>
            <div class="post-thumbnail" :style="{backgroundImage: `url(${thumbnail})`}"></div>
            <div class="post-content">
                <h1>{{ title }}</h1>
                <p>{{ previewText }}</p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    name: "PostPreview", //Isso apenas ajuda no debugging?
    props: {
        isAdmin: {
            type: Boolean,
            required: true
        },
        postId: String,
        id: String,
        title: String,
        previewText: String,
        thumbnail: String
    },
    computed: {
        link() {
            return this.isAdmin
                ? {
                      name: "admin-postId",
                      params: {
                          postId: this.id
                      }
                  }
                : {
                      name: "posts-id",
                      params: {
                          id: this.id
                      }
                  };
        }
    }
};
</script>
<style scoped>
.post-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
}

a {
    text-decoration: none;
    color: black;
}

@media (min-width: 850px) {
    .post-preview {
        width: 400px;
        margin: 10px;
    }
}

.post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
}

.post-content {
    padding: 10px;
    text-align: center;
}

a:hover .post-content,
a:active .post-content {
    background-color: #ccc;
}
</style>
