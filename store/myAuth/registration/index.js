
export const state = () => ({
  ruleForm: []
});

export const actions = {

  updateRuleForm_name ({commit, state}, e) {
    const ruleForm = {
      name: e.target.value,
      email: state.ruleForm.email,
      password: state.ruleForm.password
    };
    commit('RULE_FORM', ruleForm)
  },
  updateRuleForm_email ({commit, state}, e) {
    const ruleForm = {
      name: state.ruleForm.name,
      email: e.target.value,
      password: state.ruleForm.password
    };
    commit('RULE_FORM', ruleForm)
  },
  updateRuleForm_password ({commit, state}, e) {
    const ruleForm = {
      name: state.ruleForm.name,
      email: state.ruleForm.email,
      password: e.target.value
    };
    commit('RULE_FORM', ruleForm)
  },


  async submitForm ({state}) {
    if (!state.ruleForm.name || !state.ruleForm.email || !state.ruleForm.password) {
      // Message.error({
      //   message: 'Пустое поле',
      //   center: true
      // });
    } else {

      // await this.$axios.post('http://127.0.0.1:8000/api/register', state.ruleForm);
      await this.$axios.post('http://localhost:8888/api/register', state.ruleForm);

      await this.$auth.login({
        data: {
          email: state.ruleForm.email,
          password: state.ruleForm.password
        }
      });
      await $nuxt.$router.push(
        'www.yandex.com'
        //   {
        //   path: this.$router.replace({ path: '/admin/office' })
        //   path: this.$route.query.redirect || '/admin/office'
        // }
      )
    }

  },
};

export const mutations = {
  RULE_FORM: (state, ruleForm) => state.ruleForm = ruleForm,
};

export const getters = {
  ruleForm: state => state.ruleForm,
};
