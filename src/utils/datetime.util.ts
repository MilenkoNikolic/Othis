export const formatDatetime = (datetime: number) => new Date(datetime).toLocaleDateString(
  "en-GB"
);
