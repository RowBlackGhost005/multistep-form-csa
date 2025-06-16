export const errorActions = {
    ERROR: "ERROR",
    OK: "OK"
};

export const inputState = {
    UNCHECKED: 0,
    INVALID: 1,
    VALID: 2,
};

export function formErrorsReducer(state, action) {
    switch(action.type){
        case "ERROR":
            return {
                ...state , [action.section]: {
                    ...state[action.section],
                    [action.field]: inputState.INVALID,
                },
            };

        case "OK":
            return {
                ...state , [action.section]: {
                    ...state[action.section] ,[action.field]: inputState.VALID,
                },
            };
        default:
            return state;
    }
}