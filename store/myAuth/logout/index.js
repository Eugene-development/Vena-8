export const state = () => ({
});

export const mutations = {
};

export const actions = {
  async logout() {
    await this.$auth.logout();
    await this.$router.push(
      '/'
    //   {
    //   path: this.$router.replace({ path: '/' })
    // }
    );
  }
};
