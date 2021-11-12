const radix = 36;
const startIdx = 2;
const endIdx = 12;

export const generateRandomId = () => Math.random().toString(radix).slice(startIdx, endIdx);
