export const SET_AGREE_MODAL_OPENED = 'SET_AGREE_MODAL_OPENED';
export const SET_AGREE_MODAL_CHECKED = 'SET_AGREE_MODAL_CHECKED';
export const SET_SUBAGREE1_CHECKED = 'SET_SUBAGREE1_CHECKED';
export const SET_SUBAGREE2_CHECKED = 'SET_SUBAGREE2_CHECKED';
export const SET_TOTALAGREE_CHECKED = 'SET_TOTALAGREE_CHECKED';

export function setAgreeModalOpened(opened){
    return {
        type: SET_AGREE_MODAL_OPENED,
        opened
    }
}
export function setAgreeModalChecked(checked){
    return {
        type: SET_AGREE_MODAL_CHECKED,
        checked
    }
}
export function setSubAgree1Checked(checked){
    return {
        type: SET_SUBAGREE1_CHECKED,
        checked
    }
}

export function setSubAgree2Checked(checked){
    return {
        type: SET_SUBAGREE2_CHECKED,
        checked
    }
}

export function setTotalAgreeChecked(checked){
    return {
        type: SET_TOTALAGREE_CHECKED,
        checked
    }
}