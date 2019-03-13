<template>
    <div class="error-page">
        <h1>Oops, something went wrong!</h1>
        <p>{{ error.message && error.message }}</p>
        <!-- É importante usar o link como sendo apenas um HTML porque possa ser que nesse momento o JS crash e caso esteja usando o nuxt-link ele não vai funcionar -->
        <p>
            Back to
            <a href="/">safety</a>!
        </p>
    </div>
</template>
<script>
export default {
    props: ["error"]
};
</script>
<style scoped>
.error-page {
    text-align: center;
}

.error-page a {
    text-decoration: none;
    color: red;
}

.error-page a:hover,
.error-page a:active {
    color: salmon;
}
</style>
