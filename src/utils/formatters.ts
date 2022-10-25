export const formatDuration = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time - hours * 60);
  return `${hours ? `${hours}h ` : ""}${minutes}m`;
};
