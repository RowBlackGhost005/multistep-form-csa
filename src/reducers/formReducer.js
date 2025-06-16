export const dataActions = {
    DATA_UPDATE: "DATA_UPDATE"
};

export function formReducer(state , action) {

    switch(action.type){
        case "DATA_UPDATE":
            return {
                ...state , [action.section]: {
                    ...state[action.section], [action.field]: action.value,
                },
            };

        default: 
            return state;
    }
};