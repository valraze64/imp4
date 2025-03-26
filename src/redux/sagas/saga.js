import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { totalBudgetSuccess, totalBudgetFailure, spendSummarySuccess, spendSummaryFailure, periodBudgetSuccess, periodSpendSuccess, periodSpendFailure, periodBudgetFailure,getTeamsActionSuccess,getTeamsActionFailure } from '../actions/actions';

function* fetchTeams(action) {
  try {
    // const requestBody =action.payload
    // const requestBody = {
    //     "team": "Commercial",
    //     "filter": {
    //       "y_q_p": {
    //         "year": "2024",
    //         "quarter": ["Q2", "Q3"],
    //         "period": ["P01", "P12"]
    //       }
    //     }
    //   }
    // const requestBody = {
    //     "team": "Commercial",
    //     "filter": {
    //       "y_q_p": {
    //         "year": "2024",
    //         "quarter": ["Q2", "Q3"],
    //         "period": ["P01", "P12"]
    //       }
    //     }
    //   }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    };
    // const response = {data: [{
    //     "value": 11691350.090000002,
    //     "change": 1651.85,
    //     "optimal_run_rate": 899334.6223076924
    //     }TOTAL_BUDGET_CALL
    // ]};

    const response = yield call(axios.get, 'http://127.0.0.1:8000/api/v1/filter/teams', config);


    // console.log("37",response2 );


    yield put(getTeamsActionSuccess(response.data));
  } catch (error) {
    console.log(38, error);
    yield put(getTeamsActionFailure(error.message));
  }
}
function* fetchTotalBudget(action) {
  try {
    const requestBody =action.payload
    // const requestBody = {
    //     "team": "Commercial",
    //     "filter": {
    //       "y_q_p": {
    //         "year": "2024",
    //         "quarter": ["Q2", "Q3"],
    //         "period": ["P01", "P12"]
    //       }
    //     }
    //   }
    // const requestBody = {
    //     "team": "Commercial",
    //     "filter": {
    //       "y_q_p": {
    //         "year": "2024",
    //         "quarter": ["Q2", "Q3"],
    //         "period": ["P01", "P12"]
    //       }
    //     }
    //   }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    };
    // const response = {data: [{
    //     "value": 11691350.090000002,
    //     "change": 1651.85,
    //     "optimal_run_rate": 899334.6223076924
    //     }TOTAL_BUDGET_CALL
    // ]};

    const response = yield call(axios.post, 'http://127.0.0.1:8000/api/v1/kpi-summary/total-budget', requestBody, config);


    // console.log("37",response2 );


    yield put(totalBudgetSuccess(response.data));
  } catch (error) {
    console.log(38, error);
    yield put(totalBudgetFailure(error.message));
  }
}




function* fetchSpendSummary(action) {
  try {
    const requestBody =action.payload
    // const requestBody = {
    //     "team": "Commercial",
    //     "filter": {
    //       "y_q_p": {
    //         "year": "2024",
    //         "quarter": ["Q2", "Q3"],
    //         "period": ["P01", "P12"]
    //       }
    //     }
    //   }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    };
    // const response = {data: [{
    //     "value": 11691350.090000002,
    //     "change": 1651.85,
    //     "optimal_run_rate": 899334.6223076924
    //     }TOTAL_BUDGET_CALL
    // ]};

    // const response = yield call(axios.post, 'http://127.0.0.1:8000/api/v1/kpi-summary/total-budget', requestBody, config);
    // const response = yield call(axios.post, 'http://127.0.0.1:8000/api/v1/kpi-summary/spend-summary', requestBody, config);
    // const response ={data: [
    //     {
    //         "title": "Overall Spends",
    //         "value": 891.0,
    //         "change": "N/A",
    //         "run_rate": 111.375
    //     },
    //     {
    //         "title": "Overall SWB Spends",
    //         "value": 98.0
    //     },
    //     {
    //         "title": "Overall Expenses",
    //         "value": 793.0
    //     },
    //     {
    //         "title": "Overall Expenses",
    //         "value": 793.0
    //     },
    //     {
    //         "title": "Year End Estimate",
    //         "value": 793.0 //mapCardsData()[0].yEE
    //     }
    // ]}


    const response = yield call(axios.post, 'http://127.0.0.1:8000/api/v1/kpi-summary/spend-summary', requestBody, config);
    console.log("82",response );
    yield put(spendSummarySuccess(response.data));
  } catch (error) {
    console.log(38, error);
    yield put(spendSummaryFailure(error.message));
  }
}
function* fetchPeriodSpend(action) {
  try {
    const requestBody =action.payload
    // const requestBody = {
    //     "team": "Commercial",
    //     "filter": {
    //       "y_q_p": {
    //         "year": "2024",
    //         "quarter": ["Q2", "Q3"],
    //         "period": ["P01", "P12"]
    //       }
    //     }
    //   }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    };
    // const response = {data: [{
    //     "value": 11691350.090000002,
    //     "change": 1651.85,
    //     "optimal_run_rate": 899334.6223076924
    //     }TOTAL_BUDGET_CALL
    // ]};

    // const response = yield call(axios.post, 'http://127.0.0.1:8000/api/v1/kpi-summary/total-budget', requestBody, config);
    // const response = yield call(axios.post, 'http://127.0.0.1:8000/api/v1/kpi-summary/spend-summary', requestBody, config);
    // const response ={data: [
    //     {
    //         "title": "Overall Spends",
    //         "value": 891.0,
    //         "change": "N/A",
    //         "run_rate": 111.375
    //     },
    //     {
    //         "title": "Overall SWB Spends",
    //         "value": 98.0
    //     },
    //     {
    //         "title": "Overall Expenses",
    //         "value": 793.0
    //     },
    //     {
    //         "title": "Overall Expenses",
    //         "value": 793.0
    //     },
    //     {
    //         "title": "Year End Estimate",
    //         "value": 793.0 //mapCardsData()[0].yEE
    //     }
    // ]}


    const response1 = 
    // {"P01": 891}
    yield call(axios.post, 'http://127.0.0.1:8000/api/v1/fpi/1/spends/', requestBody, config);
    const response2 = 
    // {"P01": 98}
    yield call(axios.post, 'http://127.0.0.1:8000/api/v1/fpi/2/spends/', requestBody, config);
    const response3 = 
    // {
    //     "P01": {
    //         "Flight": 2495.0,
    //         "Compliance": -2999.0,
    //         "Laptop": 1297.0
    //     }
    // }

    yield call(axios.post, 'http://127.0.0.1:8000/api/v1/fpi/3/spends/', requestBody, config);
    const response5 = 
    // [
    //     {
    //         "title": "Overall",
    //         "value": {
    //             "SQA": 151.0,
    //             "Procurement Excellence": -53.0,
    //             "Sourcing": 1297.0,
    //             "Commercial operations": 2495.0,
    //             "Sustainability": -2999.0
    //         }
    //     },
    //     {
    //         "title": "SWB",
    //         "value": {
    //             "SQA": 151.0,
    //             "Procurement Excellence": -53.0
    //         }
    //     },
    //     {
    //         "title": "Expense",
    //         "value": {
    //             "Sourcing": 1297.0,
    //             "Commercial operations": 2495.0,
    //             "Sustainability": -2999.0
    //         }
    //     }
    // ]

    yield call(axios.post, 'http://127.0.0.1:8000/api/v1/fpi/5/spends/', requestBody, config);
    const response = {"data": [{
        "OverallSpends":response1,
        "OverallSWBSpends":response2,
        "spendDetails": response3,
        "spendSummary": response5
      }]}
    console.log("82",response );
    yield put(periodSpendSuccess(response.data));
  } catch (error) {
    console.log(38, error);
    yield put(periodSpendFailure(error.message));
  }
}
function* fetchPeriodBudget(action) {
  try {
    const requestBody =action.payload
    // const requestBody = {
    //     "team": "Commercial",
    //     "filter": {
    //       "y_q_p": {
    //         "year": "2024",
    //         "quarter": ["Q2", "Q3"],
    //         "period": ["P01", "P12"]
    //       }
    //     }
    //   }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    };
    // const response = {data: [{
    //     "value": 11691350.090000002,
    //     "change": 1651.85,
    //     "optimal_run_rate": 899334.6223076924
    //     }TOTAL_BUDGET_CALL
    // ]};

    const response2 = 
    // 42342.43242
    yield call(axios.post, 'http://127.0.0.1:8000/api/v1/fpi/2/budgets', requestBody, config);
    const response3 = 
    // 42342.43242
     yield call(axios.post, 'http://127.0.0.1:8000/api/v1/fpi/3/budgets', requestBody, config);
    const response5 = 
    // [
    //     {
    //         "title": "Overall",
    //         "value": {
    //             "SQA": 2570613.97,
    //             "Procurement Excellence": 2941375.6100000003,
    //             "Sustainability": 2620048.85,
    //             "Sourcing": 1927960.4900000002,
    //             "Commercial operations": 1631351.17
    //         }
    //     },
    //     {
    //         "title": "SWB",
    //         "value": {
    //             "SQA": 1903243.03,
    //             "Procurement Excellence": 2162776.18,
    //             "Sustainability": 1730220.94,
    //             "Sourcing": 1557198.85,
    //             "Commercial operations": 1297665.71
    //         }
    //     },
    //     {
    //         "title": "Expense",
    //         "value": {
    //             "SQA": 667370.9400000001,
    //             "Procurement Excellence": 778599.4299999999,
    //             "Sustainability": 889827.91,
    //             "Sourcing": 370761.64,
    //             "Commercial operations": 333685.45999999996
    //         }
    //     }
    // ]
    yield call(axios.post, 'http://127.0.0.1:8000/api/v1/fpi/5/budgets', requestBody, config);
    console.log("309",action.payload );
    const response ={data: {"P":{
        "SWBBudget":response2.data,
        "budgetDetails":response3.data,
        "budgetSummary":response5,
    }} }


    // const response = yield call(axios.post, 'http://127.0.0.1:8000/api/v1/kpi-summary/spend-summary', requestBody, config);
    console.log("82",response );
    yield put(periodBudgetSuccess(response.data));
  } catch (error) {
    console.log(38, error);
    yield put(periodBudgetFailure(error.message));
  }
}

function* saga() {
    yield takeLatest('GET_TEAMS_ACTION', fetchTeams);
  yield takeLatest('TOTAL_BUDGET_ACTION', fetchTotalBudget);
  yield takeLatest('SPEND_SUMMARY_ACTION', fetchSpendSummary);
  yield takeLatest('PERIOD_SPEND_ACTION', fetchPeriodSpend);
  yield takeLatest('PERIOD_BUDGET_ACTION', fetchPeriodBudget);
}

export default saga;