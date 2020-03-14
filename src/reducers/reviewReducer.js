export default (state = [], action) => {
    console.log("state", ...state)  
    console.log("payload:", action.payload) 
    switch (action.type) { //that is a standard for our state
        case "SET_REVIEWS":
            return [...action.payload]
        case "ADD_REVIEW":
            return [...state, action.payload]
        case "REMOVE_REVIEW":
            let newReviews = state.filter(review => review.id !== action.payload)
            return [...newReviews]
        default:
            return state
    }
}
