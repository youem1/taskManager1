import { bindActionCreators } from "redux";

const pageCC = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case 'CREATE_COMMENT':
            return { isOpen: true }
        case 'NO_CREATE_COMMENT':
            return { isOpen: false }
        default:
            return { isOpen: state.isOpen }
    }

}

export default pageCC;