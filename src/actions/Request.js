export const setProgress = (progress) => ({
  type: 'SET_PROGRESS',
  payload: progress
});

export const setColor = (color) => ({
  type: 'SET_COLOR',
  payload: color
});

export const setArtwork = (artwork) => ({
  type: 'SET_ARTWORK',
  payload: artwork
});

export const setCharacterCount = (characterCount) => ({
  type: 'SET_CHARACTERCOUNT',
  payload: characterCount
});

export const setAddBackground = (addBackground) => ({
  type: 'SET_ADDBACKGROUND',
  payload: addBackground
});

export const setSpecialRequest = (specialRequest) => ({
  type: 'SET_SPECIALREQUEST',
  payload: specialRequest
});

export const setCommercialUseFee = (commercialUseFee) => ({
  type: 'SET_COMMERCIALUSEFEE',
  payload: commercialUseFee
});

export const setRushFee = (rushFee) => ({
  type: 'SET_RUSHFEE',
  payload: rushFee
});

export const setBrief = (brief) => ({
  type: 'SET_BRIEF',
  payload: brief
});
