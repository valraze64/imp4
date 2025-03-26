import { combineReducers } from 'redux';

const initialState = {
    data: null,
    // spendSummary: null,
    loading: false,
    error: null,
    // calculatedData: {}, // Added to store calculated variables
};

const reducerToFetchData = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TEAMS_ACTION':
            return { ...state, loading: true, error: null };
        case 'GET_TEAMS_ACTION_SUCCESS':
            return { ...state, loading: false, teamsData: action.payload };
        case 'GET_TEAMS_ACTION_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'TOTAL_BUDGET_ACTION':
            return { ...state, loading: true, error: null };
        case 'TOTAL_BUDGET_SUCCESS':
            return { ...state, loading: false, budgetData: action.payload };
        case 'TOTAL_BUDGET_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'SPEND_SUMMARY_ACTION':
            return { ...state, loading: true, error: null };
        case 'SPEND_SUMMARY_SUCCESS':
            return {
                ...state,
                spendSummary: action.payload,
                loading: false,
            };
        case 'SPEND_SUMMARY_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case 'PERIOD_SPEND_ACTION':
            return { ...state, loading: true, error: null };
        case 'PERIOD_SPEND_SUCCESS':
            return {
                ...state,
                periodSpend: action.payload,
                loading: false,
            };
        case 'PERIOD_SPEND_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case 'PERIOD_BUDGET_ACTION':
            return { ...state, loading: true, error: null };
        case 'PERIOD_BUDGET_SUCCESS':
            return {
                ...state,
                periodBudget: action.payload,
                loading: false,
            };
        case 'PERIOD_BUDGET_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        // case 'SET_CALCULATED_DATA':
        //     return {
        //         ...state,
        //         calculatedData: action.payload,
        //     };
        default:
            return state;
    }
};

const localInitialState = {
    totalBudget: 0,
    overallSpend: 0,
};

const localReducer = (state = localInitialState, action) => {
    switch (action.type) {
        case "SET_CALCULATED_DATA":
        // case "SET_WATERFALL_DATA":
        console.log("59", );
            return { ...state, ...action.payload };
        case "SET_DASHBOARD_LOCAL_STATE":
        // case "SET_WATERFALL_DATA":
        // console.log("59", );
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    apiFetched: reducerToFetchData,
    local: localReducer,
});

        // export default waterfallReducer;
        export default rootReducer;