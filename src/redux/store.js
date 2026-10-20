import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import storyReducer from './storySlice'
import characterReducer from './characterSlice'
import emotionReducer from './emotionSlice'
import videoReducer from './videoSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    story: storyReducer,
    character: characterReducer,
    emotion: emotionReducer,
    video: videoReducer,
  },
})

export default store
