<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">Last update on {{ loadedPost.updateDate }}</div>
                <div class="post-detail">Writen by {{ loadedPost.author }}</div>
            </div>
            <p class="post-content">{{ loadedPost.content }}</p>
        </section>
        <section class="post-feedback">
            <p>
                Please let me know what you think about the post, send a mail to
                <a
                    href="mailto:email@myemail.com"
                >email@myemail.com</a>
            </p>
        </section>
    </div>
</template>

<script>
export default {
    async asyncData({ params, redirect, error }) {
        try {
            const loadedPost = await new Promise((resolve, reject) => {
                // reject("Eu quis rejeitar");
                setTimeout(
                    () =>
                        resolve({
                            loadedPost: {
                                id: "1",
                                title: `Primeiro post ID: ${params.id}`,
                                author: "Sidiney",
                                updateDate: new Date().toLocaleString(),
                                content: "Conteudo muito legalllll",
                                previewText: "Prévia do texto",
                                thumbnail: "https://google.com/google.jpg"
                            }
                        }),
                    2000
                );
            });
            return loadedPost;
        } catch (err) {
            error({ statusCode: 500, message: "errro" });
            console.log(err);
        }
    }
};
</script>

<style scoped>
.single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
}

.post {
    width: 100%;
}

@media (min-width: 768px) {
    .post {
        width: 600px;
        margin: auto;
    }
}

.post-title {
    margin: 0;
}

.post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 768px) {
    .post-details {
        flex-direction: row;
    }
}

.post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
}

.post-feedback a {
    color: red;
    text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
    color: salmon;
}
</style>
