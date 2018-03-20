var request = require("request");
var options = {
  url: BASE_URL, 
  json: true
};
var BASE_URL = 'https://api.github.com/repos/jquery/jquery/contributors'

console.log("Welcome to the github avatar downloader")



function getRepoContributors(repoOwner, repoName, cb) {
	console.log(request(BASE_URL));



}
// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err);
//   console.log("Result:", result);
// });
getRepoContributors();