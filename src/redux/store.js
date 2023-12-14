import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import servicesSlice from "./slices/servicesSlice";
import saga from "./sagas";
import serviceSlice from "./slices/ServiceSlice";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    services: servicesSlice,
    service: serviceSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(saga)

export default store;