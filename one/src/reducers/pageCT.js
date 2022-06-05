const pageCT = (state = 'close', action) => {
    // console.log(action.type);

    switch (action.type) {
        case 'NO_CREAT_TASK':

            return state = 'close';

        case 'CREAT_TASK':
            console.log('create-task');
            return state = 'open';

        default:


            return state = 'close';



    }

}


export default pageCT;