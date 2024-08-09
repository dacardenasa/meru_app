export const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${btoa(
    `${process.env.API_USERNAME}:${process.env.API_PASSWORD}`
  )}`
};
