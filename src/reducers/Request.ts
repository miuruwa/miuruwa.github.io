import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: Requests.State = {
  progress: "sk",
  color: "nn",
  artwork: "bu",
  characterCount: 1,
  addBackground: false,
  specialRequest: false,
  commercialUseFee: false,
  rushFee: false,
}

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    SetProgress (state, action: PayloadAction<Requests.Progress>) {
      state.progress = action.payload
    },
    SetColor (state, action: PayloadAction<Requests.Color>) {
      state.color = action.payload
    },
    SetArtwork (state, action: PayloadAction<Requests.Artwork>) {
      state.artwork = action.payload
    },
    SetCharacterCount (state, action: PayloadAction<number>) {
      state.characterCount = action.payload
    },
    ToggleAddBackground (state) {
      state.addBackground = !state.addBackground;
    },
    ToggleSpecialRequest (state) {
      state.specialRequest = !state.specialRequest;
    },
    ToggleCommercialUseFee (state) {
      state.commercialUseFee = !state.commercialUseFee;
    },
    ToggleRushFee (state) {
      state.rushFee = !state.rushFee;
    }
  }
})

export const RequestReducer = requestSlice.reducer