export const addNewTodo = market => {
    return (dispatch) => {
        // debugger
        return fetch('http://localhost:3000/markets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({market})
        })
        .then(res => res.json())
        .then(market => {
                // this.setState({ //it sets the state or changes it
                //     catName: data.cat_name //this tiggers a rerender of the screen
                // })
            dispatch({type: "ADD_MARKET", payload: market})
        })
    }
}

export const removeMarket = marketId => {
    return (dispatch) => {
        // debugger
        return fetch(`http://localhost:3000/markets/${marketId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(market => {
            // debugger
            dispatch({ type: "REMOVE_MARKET", payload: market.id })
        })
    }
}

export const fetchMarkets = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/markets')
        .then(res => res.json())
        .then(markets => {
            dispatch({type: 'SET_MARKETS', payload: markets})
        })
    }
}




















export const addNewReview = review => {
    return (dispatch) => {
        // debugger
        return fetch("http://localhost:3000/reviews", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({review})
        })
        .then(res => res.json())
        .then(review => {
            dispatch({ type: "ADD_REVIEW", payload: review })
        })
    }
}


export const removeReview = reviewId => {
    return (dispatch) => {
        // debugger
        return fetch(`http://localhost:3000/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(review => {
            // debugger
            dispatch({ type: "REMOVE_REVIEW", payload: review.id })
        })
    }
}

export const fetchReviews = () => {
    // debugger
    return (dispatch) => {
        return fetch('http://localhost:3000/reviews')
            .then(res => res.json())
            .then(reviews => {
                dispatch({ type: 'SET_REVIEWS', payload: reviews })
            })
    }
}




// dispatch is automatically provided by connect if it is missing a second argument.That second argument is reserved for mapDispatchToProps, which allows us to customize how we send actions to our reducer.Without the second argument we will still be able to use dispatch on any component wrapped with connect.
