export const closeCreatePr = () => {
    return {
        type: 'NO_CREAT_PROJECT'
    }
}

export const openCreatePr = () => {
    return {
        type: 'CREAT_PROJECT'
    }
}

export const closeCreateTa = () => {
    return {
        type: 'NO_CREAT_TASK'
    }
}

export const openCreateTa = () => {
    return {
        type: 'CREAT_TASK'
    }
}

export const goProjectPage = () => {
    return {
        type: 'GO_PROJECT_PAGE'
    }
    console.log('GO_PROJECT_PAGE')
}
export const goTaskPage = () => {
    return {
        type: 'GO_TASK_PAGE'
    }
}
export const goProfilekPage = () => {
    return {
        type: 'GO_PROFILE_PAGE'
    }
}

export const login = () => {
    return {
        type: 'IS_LOGIN'
    }
}

export const openCreateRe = () => {
    return {
        type: 'CREATE_REPORT'
    }
}

export const closeCreateRe = () => {
    return {
        type: 'NO_CREATE_REPORT'
    }
}

export const openCreateCo = () => {
    return {
        type: 'CREATE_COMMENT'
    }
}

export const closeCreateCo = () => {
    return {
        type: 'NO_CREATE_COMMENT'
    }
}

export const openInvite = () => {
    return {
        type: 'INVITE'
    }
}

export const closeInvite = () => {
    return {
        type: 'NO_INVITE'
    }
}