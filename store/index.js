export const state = () => ({
  loadedPosts: []
});

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts;
  }
};

export const actions = {
  initPosts({ commit }, posts) {
    commit("setPosts", posts);
  },
  async nuxtServerInit({ dispatch }, { store }) {
    //Isso é executado apenas uma vez?
    //Ele serve para compartilhar o estado entre várias paginas
    //em vez de ter que esperar o state ao navegar entre as páginas só esperamos uma vez

    const loadedPosts = await new Promise(resolve => {
      setTimeout(
        () =>
          resolve([
            {
              id: "1",
              title: "Primeiro post",
              previewText: "Prévia do texto",
              thumbnail: "https://google.com/google.jpg"
            },
            {
              id: "2",
              title: "Segundo post",
              previewText: "Prévia do texto",
              thumbnail: "https://google.com/google.jpg"
            }
          ]),
        1000
      );
    });

    dispatch("initPosts", loadedPosts);
  }
};

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts;
  }
};
