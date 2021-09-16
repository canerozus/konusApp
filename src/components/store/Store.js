import { configureStore } from '@reduxjs/toolkit'
import AuthSlicer from './AuthSlicer'

export const store = configureStore({
  reducer: {
    Authenticate:AuthSlicer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
}),
})