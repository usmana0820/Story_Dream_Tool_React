import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { characterService } from '../services/character'

export const fetchCharacters = createAsyncThunk(
  'character/fetchAll',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await characterService.getAll(params)
      return data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch characters')
    }
  },
)

const initialState = {
  characters: [],
  currentCharacter: null,
  loading: false,
  error: null,
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    clearCurrentCharacter: (state) => {
      state.currentCharacter = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false
        state.characters = action.payload
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearCurrentCharacter, clearError } = characterSlice.actions
export default characterSlice.reducer
