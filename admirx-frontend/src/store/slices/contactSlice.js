import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  'contact/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://admirx-backend.onrender.com'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    isSubmitting: false,
    submitSuccess: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.submitSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isSubmitting = false;
        state.submitSuccess = true;
        state.error = null;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSuccess } = contactSlice.actions;
export default contactSlice.reducer;
