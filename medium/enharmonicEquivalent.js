// function getEquaivalent(note) {
//   if (note === "C#") {
//     return "Db";
//   } else if (note === "Db") {
//     return "C#";
//   } else if (note === "D#") {
//     return "Eb";
//   } else if (note === "Eb") {
//     return "D#";
//   } else if (note === "F#") {
//     return "Gb";
//   } else if (note === "Gb") {
//     return "F#";
//   } else if (note === "G#") {
//     return "Ab";
//   } else if (note === "Ab") {
//     return "G#";
//   } else if (note === "A#") {
//     return "Bb";
//   } else if (note === "Bb") {
//     return "A#";
//   }
// }
// console.log(getEquaivalent("D#"));
// console.log(getEquaivalent("Gb"));
// console.log(getEquaivalent("Bb"));

//much simpler way using objectKeys

const equivalents = {
  "C#": "Db",
  Db: "C#",
  "D#": "Eb",
  Eb: "D#",
  "F#": "Gb",
  Gb: "F#",
  "G#": "Ab",
  Ab: "G#",
  "A#": "Bb",
  Bb: "A#",
};

function getEquaivalent(note) {
  const keys = Object.keys(equivalents).find(
    (k) => k.toLowerCase() === note.toLowerCase()
  );
  return keys ? equivalents[keys] : "not found";
}
console.log(getEquaivalent("D#"));
console.log(getEquaivalent("Gb"));
console.log(getEquaivalent("Bb"));
console.log(getEquaivalent("gb"));
console.log(getEquaivalent("d#"));
console.log(getEquaivalent("anto"));
