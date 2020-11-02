const fs = require("fs");
const source = "./src/data/readings/";
const target = "./src/data/";
let readings = { data: [] };

const dir = fs.opendirSync(source);
let file;
console.log("Combining data files...");
while ((file = dir.readSync()) !== null) {
  console.log(file.name);
  let content = JSON.parse(fs.readFileSync(source + file.name));
  readings.data.push(content);
}
fs.writeFileSync(
  target + "all-readings.json",
  JSON.stringify(readings, null, " ")
);

console.log("Done.");
dir.closeSync();
