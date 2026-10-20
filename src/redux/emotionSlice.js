import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { emotionService } from '../services/emotion'

export const fetchEmotions = createAsyncThunk(
  'emotion/fetchAll',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await emotionService.getAll(params)
      return data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch emotions')
    }
  },
)

const initialState = {
  emotions: [],
  currentEmotion: null,
  loading: false,
  error: null,
}

const emotionSlice = createSlice({
  name: 'emotion',
  initialState,
  reducers: {
    clearCurrentEmotion: (state) => {
      state.currentEmotion = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmotions.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchEmotions.fulfilled, (state, action) => {
        state.loading = false
        state.emotions = action.payload
      })
      .addCase(fetchEmotions.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearCurrentEmotion, clearError } = emotionSlice.actions
export default emotionSlice.reducer
