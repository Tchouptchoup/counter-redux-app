const CountReducer = (state = 0, action) => {
    if (action.type === "ADD") {
        return state = state + 1
    }
    else if (action.type === "REMOVE") {
        return state = state - 1
    }
    else if (action.type === "ADD10") {
        return state = state + 10
    }
    else if (action.type === "REMOVE10") {
        return state = state - 10
    }
    else if (action.type === "RESET") {
        return state = 0
    }
    return state;
};
export default CountReducer;