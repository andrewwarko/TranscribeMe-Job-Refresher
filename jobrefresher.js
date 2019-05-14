// Interval in seconds. Change this to change the page refresh rate.
var interval = 15;

// URI of the jobs page. This is not detecting correctly in the manifest, so we check for it here.
var jobspage = "https://tmhub.transcribeme.com/#/job/";

//////////////////////////////////////////////////////////////////////////////////////////////////
// You don't need to change anything below here
/////////////////////////////////////////////////////////////////////////////////////////////////

function checkJobs() {
  // Checks to make sure the current page is the jobs page.
  // This fails if we check before the page is fully loaded, so we have to check here.
  if (window.location.href != jobspage) {
    console.log("Not on the TranscribeMe jobs page, skipping refresh");
    return true;
  }

  var message = document.getElementsByClassName("text-info");

  // Checks for the "All work is currently assigned" message, and refreshes the page if it finds it.
  for (let m of message) {
    if (m.innerText.includes("All work is currently assigned")) {
      window.location.reload(true);
   }
  }

  // Work detected
  console.log("New work detected, no refresh needed");
}

setTimeout(checkJobs, interval*1000);
