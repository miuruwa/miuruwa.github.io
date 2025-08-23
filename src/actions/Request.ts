export const setProgress = (progress: string) => ({
  type: 'SET_PROGRESS',
  payload: progress
});

export const setColor = (color: string) => ({
  type: 'SET_COLOR',
  payload: color
});

export const setArtwork = (artwork: string) => ({
  type: 'SET_ARTWORK',
  payload: artwork
});

export const setCharacterCount = (characterCount: number) => ({
  type: 'SET_CHARACTERCOUNT',
  payload: characterCount
});

export const setAddBackground = (addBackground: boolean) => ({
  type: 'SET_ADDBACKGROUND',
  payload: addBackground
});

export const setSpecialRequest = (specialRequest: boolean) => ({
  type: 'SET_SPECIALREQUEST',
  payload: specialRequest
});

export const setCommercialUseFee = (commercialUseFee: boolean) => ({
  type: 'SET_COMMERCIALUSEFEE',
  payload: commercialUseFee
});

export const setRushFee = (rushFee: boolean) => ({
  type: 'SET_RUSHFEE',
  payload: rushFee
});

export const setBrief = (brief: string) => ({
  type: 'SET_BRIEF',
  payload: brief
});
