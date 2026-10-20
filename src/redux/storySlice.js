import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { storyService } from '../services/story'

export const fetchStories = createAsyncThunk(
  'story/fetchAll',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await storyService.getAll(params)
      return data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch stories')
    }
  },
)

export const fetchStoryById = createAsyncThunk(
  'story/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await storyService.getById(id)
      return data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch story')
    }
  },
)

const initialState = {
  stories: [],
  currentStory: null,
  loading: false,
  error: null,
}

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    clearCurrentStory: (state) => {
      state.currentStory = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.loading = false
        state.stories = action.payload
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchStoryById.fulfilled, (state, action) => {
        state.currentStory = action.payload
      })
  },
})

export const { clearCurrentStory, clearError } = storySlice.actions
export default storySlice.reducer
