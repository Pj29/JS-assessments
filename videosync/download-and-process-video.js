function download(url, callback) {
  console.log(`Start downloading video from ${url} ...`);

  setTimeout(() => {
    const fileName = url.split("/").pop();
    console.log(`Video downloaded from ${url} to ${fileName}.`);
    callback(fileName);
  }, 2000);
}

function process(videoFile) {
  console.log(`Start processing ${videoFile} ...`);

  setTimeout(() => {
    console.log(`Video processing complete: ${videoFile}.`);
  }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";

download(url, process);
// Start the interval and keep track of it with an id
const intervalId = setInterval(
  () => console.log("some other work is happening here"),
  500
);

// Stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
}, 10000);
