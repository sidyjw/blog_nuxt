export const state = () => ({
  loadedPosts: []
});

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts;
  },
  addPost({ loadedPosts }, post) {
    loadedPosts.push(post);
  },
  editPost({ loadedPosts }, editedPost) {
    const postIndex = loadedPosts.findIndex(
      previewsPost => previewsPost.id === editedPost.id
    );
    loadedPosts[postIndex] = editedPost;
    console.log(postIndex, "|", loadedPosts);
  }
};

export const actions = {
  initPosts({ commit }, posts) {
    commit("setPosts", posts);
  },

  async addPost({ commit }, post) {
    const createdPost = {
      ...post,
      updatedDate: new Date()
    };

    const result = await this.$axios.post("posts.json", createdPost);

    createdPost.id = result.data.name;
    commit("addPost", createdPost);
  },

  async editPost({ commit }, editedPost) {
    try {
      const result = await this.$axios.put(
        `/posts/${editedPost.id}.json`,
        editedPost
      );
      console.log(result);
      commit("editPost", editedPost);
    } catch (e) {
      console.log(e);
      alert(e);
    }
  },
  async nuxtServerInit({ dispatch }, { store }) {
    //Isso é executado apenas no carregamento inicial da página e
    //não é executado ao navegar pelas rotas
    //Ele serve para compartilhar o estado entre várias paginas
    //em vez de ter que esperar o state ao navegar entre as páginas só esperamos uma vez
    /*
      Uma forma interessante de usar ele seria pra o carregamento inicial da página
      onde no momento de execução ele iria renderizar do lado do servidor e logo em seguida popular o store pra que assim eu não precise de esperar outro loading
    */
    // const loadedPosts = await new Promise(resolve => {
    //   setTimeout(
    //     () =>
    //       resolve([
    //         {
    //           id: "1",
    //           title: "Primeiro post",
    //           previewText: "Prévia do texto",
    //           thumbnail: "https://google.com/google.jpg"
    //         },
    //         {
    //           id: "2",
    //           title: "Segundo post",
    //           previewText: "Prévia do texto",
    //           thumbnail: "https://google.com/google.jpg"
    //         }
    //       ]),
    //     1000
    //   );
    // });
    // dispatch("initPosts", loadedPosts);
    return this.$axios.get("/posts.json").then(res => {
      const postArr = [];
      for (const key in res.data) {
        postArr.push({ ...res.data[key], id: key });
      }
      dispatch("initPosts", postArr);
    });
  }
};

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts;
  }
};
