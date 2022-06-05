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

export const login = () => {
    return {
        type: 'IS_LOGIN'
    }
}