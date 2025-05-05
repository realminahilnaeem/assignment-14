let tweet = prompt("Enter your tweet:");

let length = tweet.length;

if (length <= 140) {
  alert("That " + length + "char tweet will work!");
} else {
  let extra = length - 140;
  alert("Your tweet has " + length + " char . Tweet is " + extra + " chars  long");
}