const intervalId = setInterval(() => {
  // eslint-disable-next-line no-console
  console.log("Sending analytics data...");
}, 2000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
