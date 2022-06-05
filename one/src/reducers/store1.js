const defaultState = { page: 'home', isLogin: false };

const store1 = (state = defaultState, action) => {
    switch (action.type) {
        case 'GO_PROJECT_PAGE':
            return { page: 'project', isLogin: state.isLogin };
        case 'GO_TASK_PAGE':
            return { page: 'task', isLogin: state.isLogin };
        case 'GO_PROFILE_PAGE':
            return { page: 'profile', isLogin: state.isLogin };
        case 'IS_LOGIN':
            return { page: state.page, isLogin: true }

        default:
            return { page: 'home', isLogin: state.isLogin };
    }

}

export default store1;