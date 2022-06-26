const pageCR = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case 'CREATE_REPORT':
            return { isOpen: true }
        case 'NO_CREATE_REPORT':
            return { isOpen: false }
        default:
            return { isOpen: state.isOpen }

    }
}

export default pageCR;