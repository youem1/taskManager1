const window_CP = (state = 'close', action) => {
    switch (action.type) {
        case 'NO_CREAT_PROJECT':
            return state = 'close'

        case 'CREAT_PROJECT':

            return state = 'open'


        default:
            return state = state;



    }

}


export default window_CP;