import * as Action from '../actions';

const initState = {
    agreeModalOpened: false,
    agreeModalChecked: false,
    subAgree1Checked: false,
    subAgree2Checked: false,
}

const reducer = (state=initState, action) => {
    switch(action.type){
        case Action.SET_AGREE_MODAL_OPENED:
            return Object.assign({}, state, {
                agreeModalOpened: action.opened
            });
        case Action.SET_AGREE_MODAL_CHECKED:
            return Object.assign({}, state, {
                agreeModalChecked: action.checked
            });
        case Action.SET_SUBAGREE1_CHECKED:
            return Object.assign({}, state, {
                subAgree1Checked: action.checked
            });
        case Action.SET_SUBAGREE2_CHECKED:
            return Object.assign({}, state, {
                subAgree2Checked: action.checked
            });
        case Action.SET_TOTALAGREE_CHECKED:
            return Object.assign({}, state, {
                subAgree1Checked: action.checked, 
                subAgree2Checked: action.checked
            });
        default:
            return state;
    }
};

export default reducer;