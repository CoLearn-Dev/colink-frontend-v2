import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './utils'

const store = configureStore({
  reducer: {
    client: clientReducer,
    jwt: clientReducer,
    isAdmin: clientReducer,
  },
})

export default store
