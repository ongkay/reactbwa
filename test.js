// function PodukInfo(props) {

//   const {name} = props;
//   console.log("ini dari dalam fungsen " + name)
//   console.log("ini dari dalam fungsen " + props)
//   return true

// }

// const prin = PodukInfo({name :"gajian"})
// console.log(prin)

const objek = {
  nama: "Hongki Setiawan",
  alamat: "sungai kerambil",
  acak: (function (name) {
    return console.log(`nama saya ${name} dan saya tingaal di ${this.alamat}`);
  })(),
};

// const {acak} = objek
console.log(objek.acak);

// console.log(acak("disini"))

// console.log(objek)
const judi = ["mantap", "jiwa", "membahana", "karohma"];

const objeknya = {
  namaku: "siapa",
  mamiku: "asdalah",
  super: "sekali",
  makan: "saja",
  "jadi galau": "gak akan ada",
};

const jadi = ["apa", "saja", "yangmautau"];

const manta = ["1", "2", "4"];
