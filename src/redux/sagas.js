import { getServiceFailure, getServiceRequest, getServiceSuccess } from "./slices/ServiceSlice";
import { getServicesFailure, getServicesRequest, getServicesSuccess } from "./slices/servicesSlice"
import { take, put, spawn, takeLatest, call } from 'redux-saga/effects';

async function getData(id) {
  const response = await fetch(`http://localhost:7070/api/services/${id ? id : ''}`);
  return await response.json();
}

function* handleRequestSaga(actions, action) {
  try {
    const data = yield call(getData, action.payload);
    yield put(actions.success(data));
  } catch (error) {
    yield put(actions.failure(error.message));
  }
}

function* watchRequestSaga(actions) {
  while(true) {
    const actionType = actions.req.type;
    yield take(actionType);
    yield takeLatest(actionType, handleRequestSaga, actions)
  }
}

export default function* saga() {
  yield spawn(watchRequestSaga, {
    req: getServicesRequest, 
    success: getServicesSuccess, 
    failure: getServicesFailure
  })
  yield spawn(watchRequestSaga, {
    req: getServiceRequest, 
    success: getServiceSuccess, 
    failure: getServiceFailure
  })
}
