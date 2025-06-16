export const actionTypes = {
    NEXT_STEP: "NEXT_STEP",
    PREV_STEP: "PREV_STEP",
};

export function formStepReducer(state , action) {

    switch(action.type){
        case "NEXT_STEP":
            if(state.step >= 5){
                return state;
            }

            return {step: state.step + 1};

        case "PREV_STEP":
            if(state.step <= 1){
                return state;
            }
            
            return {step: state.step - 1};
        default:
            return state;
    }
}
