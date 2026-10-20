import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { motionService } from '../services/motion'

export const fetchVideos = createAsyncThunk(
  'video/fetchAll',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await motionService.getAll(params)
      return data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch videos')
    }
  },
)

const initialState = {
  videos: [],
  currentVideo: null,
  loading: false,
  error: null,
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    clearCurrentVideo: (state) => {
      state.currentVideo = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false
        state.videos = action.payload
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearCurrentVideo, clearError } = videoSlice.actions
export default videoSlice.reducer
