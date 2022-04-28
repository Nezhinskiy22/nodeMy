// console.log(global);

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);
// console.log(__dirname);
// console.log(__filename);
// console.log(process.argv);
// console.log(`Hello, ${process.argv[2]}`);
const url = new URL("https://github.com/path/name#111");
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);
