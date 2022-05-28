import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <PodukInfo isDiskon="yes" name="Youdora Dora" catagory="LEBARAN1" />
      <ReviewItems />
    </div>
  );
}

function ReviewItems() {
  const user = [
    {
      id: 1,
      name: "budiana",
      review: "Harga murah tapi kualitasnya terbatas",
      foto: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "dikayadi",
      review: "harga kemahalan",
      foto: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "dono",
      review: "mantap boss besok pesan banyak",
      foto: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "rendi",
      review: "super mantap paket cepat sampe",
      foto: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const listReview = user.map((itemReview) => 
    <div className="item">
      <img src={itemReview.foto} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

function PodukInfo(props) {
  const { catagory, name, isDiskon } = props;
  const price = 7400000000;
  const benafit = ["mantap", "oke banget", "bersama"];
  const listbenafit = benafit.map((item) => <li>{item}</li>);

  return (
    <div className="Deskripsi">
      <p className="Cate">{catagory}</p>
      <h1 className="Title">{name}</h1>
      <CekDiskon isDiskon={isDiskon} />
      <p className="Price">IDR {price}</p>
      <p className="Info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta odio
        laboriosam consequuntur porro facere nesciunt ex mollitia libero
        inventore repellendus laudantium a pariatur maxime perspiciatis
        quibusdam, aperiam, fuga sed illo.
        <ul>{listbenafit}</ul>
      </p>
      <a
        onClick={(e) => {
          TambahCart(name, e);
        }}
        href="hhtp://google.com"
      >
        Add to Card
      </a>
    </div>
  );
}

function TambahCart(e) {
  return console.log("membeli Produk... " + e);
}

function CekDiskon(props) {
  const { isDiskon } = props;
  console.log(isDiskon);

  if (isDiskon === "yes") {
    return <p>Diskon 50% OFF</p>;
  } else if (isDiskon === "coming") {
    return <p>Akan ada diskon Nanti</p>;
  } else {
    return <p>Belom ada diskon coi</p>;
  }
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="fotonya.jpg" />
    </div>
  );
}

export default App;
