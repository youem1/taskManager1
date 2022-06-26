const pageI = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case 'INVITE':
            return { isOpen: true }
        case 'NO_INVITE':
            return { isOpen: false }
        default:
            return { isOpen: state.isOpen }

    }
}

export default pageI;