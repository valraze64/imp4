export const getTeamsAction = () => ({
  type: 'GET_TEAMS_ACTION',
//   payload,
});
// export const totalBudgetActionWithPayload = (payload) => ({
//   type: 'TOTAL_BUDGET_CALL',
//   payload,
// });

export const getTeamsActionSuccess = (data) => ({
  type: 'GET_TEAMS_ACTION_SUCCESS',
  payload: data,
});

export const getTeamsActionFailure = (error) => ({
  type: 'GET_TEAMS_ACTION_FAILURE',
  error,
});
export const totalBudgetAction = (payload) => ({
  type: 'TOTAL_BUDGET_ACTION',
  payload,
});
// export const totalBudgetActionWithPayload = (payload) => ({
//   type: 'TOTAL_BUDGET_CALL',
//   payload,
// });

export const totalBudgetSuccess = (data) => ({
  type: 'TOTAL_BUDGET_SUCCESS',
  payload: data,
});

export const totalBudgetFailure = (error) => ({
  type: 'TOTAL_BUDGET_FAILURE',
  error,
});


export const spendSummaryAction = (payload) => ({
  type: 'SPEND_SUMMARY_ACTION',
  payload,
});
// export const totalBudgetActionWithPayload = (payload) => ({
//   type: 'TOTAL_BUDGET_CALL',
//   payload,
// });

export const spendSummarySuccess = (data) => ({
  type: 'SPEND_SUMMARY_SUCCESS',
  payload: data,
});

export const spendSummaryFailure = (error) => ({
  type: 'SPEND_SUMMARY_FAILURE',
  error,
});
export const periodSpendAction = (payload) => ({
  type: 'PERIOD_SPEND_ACTION',
  payload,
});
// export const totalBudgetActionWithPayload = (payload) => ({
//   type: 'TOTAL_BUDGET_CALL',
//   payload,
// });

export const periodSpendSuccess = (data) => ({
  type: 'PERIOD_SPEND_SUCCESS',
  payload: data,
});

export const periodSpendFailure = (error) => ({
  type: 'PERIOD_SPEND_FAILURE',
  error,
});
export const periodBudgetAction = (payload) => ({
  type: 'PERIOD_BUDGET_ACTION',
  payload,
});
// export const totalBudgetActionWithPayload = (payload) => ({
//   type: 'TOTAL_BUDGET_CALL',
//   payload,
// });

export const periodBudgetSuccess = (data) => ({
  type: 'PERIOD_BUDGET_SUCCESS',
  payload: data,
});

export const periodBudgetFailure = (error) => ({
  type: 'PERIOD_BUDGET_FAILURE',
  error,
});


export const setCalculatedDataAction = (payload) => ({
  type: 'SET_CALCULATED_DATA',
  payload,
});

export const setDashboardLocalStateAction = (payload) => ({
  type: 'SET_DASHBOARD_LOCAL_STATE',
  payload,
});