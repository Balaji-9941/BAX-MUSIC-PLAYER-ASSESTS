let main_body = document.getElementById("main_body");
let player = document.getElementById("songPlayer");
let info = document.getElementById("songinfo");
let data = [
  {
    id: 0,
    img: "https://tse4.mm.bing.net/th?id=OIP.AtAI0H9sQZpMmeRsGXHavQHaHa&pid=Api&P=0&h=180",
    title: "Kaavala",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1xnS8Rj8fh3yv8rQ4GtCWPREW_fdTxt8d/preview",
    count: "0",
  },
  {
    id: 1,
    img: "https://c.saavncdn.com/336/O-Kadhal-Kanmani-Tamil-2015-20200805153450-500x500.jpg",
    title: "Kaara Aatakara",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1m4YXjTB7oUSRGgbMcE3Q7syhcaCQXHHr/preview",
    count: "0",
  },
  {
    id: 2,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1nNBJ5zKlyfveMSveicpkW1RcD87IBwrZ/preview",
    count: "0",
  },
  {
    id: 3,
    img: "https://c.saavncdn.com/934/Golden-Sparrow-From-Nilavuku-En-Mel-Ennadi-Kobam-Tamil-2024-20241116194614-500x500.jpg",
    title: "Golden Sparrow",
    author: "G.V.Prakash",
    link: "https://drive.google.com/file/d/1nIC1snxqro3Cahse5Z5UjJ-pftisLRWU/preview",
    count: "0",
  },
  {
    id: 4,
    img: "https://tse1.mm.bing.net/th?id=OIP.Ud9K_U03B7OsBaSFQP9bpQHaHa&pid=Api&P=0&h=180",
    title: "Hey Minnale",
    author: "G.V.Prakash",
    link: "https://drive.google.com/file/d/1nHMT4M73PZnFiQ02EaLAhNj01vR1sMPN/preview",
    count: "0",
  },
  {
    id: 5,
    img: "https://tse1.mm.bing.net/th?id=OIP.QGJJ1dBEaR3OXtE3MdYGEwHaHa&pid=Api&P=0&h=180",
    title: "Manasilayo",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1nG0L5kkV1eXG1HL_5wn5FKnFTIJACzCK/preview",
    count: "0",
  },
  {
    id: 6,
    img: "https://tse4.mm.bing.net/th?id=OIP.u-KZxbEXgLYQoWOfG1Cp5QHaHa&pid=Api&P=0&h=180",
    title: "Arabic Kuthu",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1nC7-p162fHDy2nA0YFZTTiFTw2gbsnnd/preview",
    count: "0",
  },
  {
    id: 7,
    img: "https://tse1.mm.bing.net/th?id=OIP.zbYhA0yQjDw0ByBCFRDhJAHaHa&pid=Api&P=0&h=180",
    title: "Boomi enna Suthudhe",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1n7MRnt1yY6ORucEJ19woW8Oo59c1LEsi/preview",
    count: "0",
  },
  {
    id: 8,
    img: "https://tse2.mm.bing.net/th?id=OIP.afhGc8QJz2lK7dV7w5IxVQHaHa&pid=Api&P=0&h=180",
    title: "Thee Thalapathy",
    author: "Thaman S",
    link: "https://drive.google.com/file/d/1n5rnRozohICjHeKNVVN6tg3xvY1Ola1i/preview",
    count: "0",
  },
  {
    id: 9,
    img: "https://c.saavncdn.com/984/Paiya-Tamil-2010-20200620134043-500x500.jpg",
    title: "Adada Mazhaida",
    author: "Yuvan Shankar Raja",
    link: "https://drive.google.com/file/d/1mzSpvXh211E3WfKuSUY2-7-lTegJsKJp/preview",
    count: "0",
  },
  {
    id: 10,
    img: "https://c.saavncdn.com/274/Anegan-Tamil-2014-20190822152158-500x500.jpg",
    title: "Danga Maari Oodhari",
    author: "Harris Jeyaraj",
    link: "https://drive.google.com/file/d/1mvHB9HPxqw3syDqhZAPkW298hNBjPSrb/preview",
    count: "0",
  },
  {
    id: 11,
    img: "https://c.saavncdn.com/590/I-Tamil-2014-20190822153052-500x500.jpg",
    title: "Ennodu Nee Irundhal",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1mkpIoExAFf0pDPGKiOCMsSI_NTE5eWv_/preview",
    count: "0",
  },
  {
    id: 12,
    img: "https://c.saavncdn.com/289/Pathu-Thala-Original-Motion-Picture-Soundtrack-Tamil-2023-20230320144505-500x500.jpg",
    title: "Pathu thala",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1mhygzGKV8Nnd1hX_vrx6VDoc1mmWm731/preview",
    count: "0",
  },
  {
    id: 13,
    img: "https://c.saavncdn.com/224/Flag-Anthem-Tamilaga-Vettri-Kazhagam-Tamil-2024-20240823142028-500x500.jpg",
    title: "TVK Flag Anthem",
    author: "Thalapathy Vijay",
    link: "https://drive.google.com/file/d/1mfyPGVYT6UNetztjpS5gP9Njiq9yyW96/preview",
    count: "0",
  },
  {
    id: 14,
    img: "https://tse1.mm.bing.net/th?id=OIP.XdFL2PZHy4rpvnphuZmASQHaHa&pid=Api&P=0&h=180",
    title: "Illuminati",
    author: "Susin Shyam",
    link: "https://drive.google.com/file/d/1mcXemmNh_U49MCoG4YsCCEsXoIOTNyrP/preview",
    count: "0",
  },
  {
    id: 15,
    img: "https://c.saavncdn.com/113/Vidaamuyarchi-Tamil-2025-20250217133052-500x500.jpg",
    title: "Pathikichu",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1mbHx_eXfnPfRQ23sj5Sl4PJ3CrWLVq6z/preview",
    count: "0",
  },
  {
    id: 16,
    img: "https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg",
    title: "Baadas",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1mbGY5MksQPU_aTsk6mhKF1Evm4oHcSL6/preview",
    count: "0",
  },
  {
    id: 17,
    img: "https://c.saavncdn.com/492/Mersal-Tamil-2017-20170820120559-500x500.jpg",
    title: "Aalaporan Tamizhan",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1m_KvtQ29J0CilRLf_Evb7knpSe3zpr8B/preview",
    count: "0",
  },
  {
    id: 18,
    img: "https://c.saavncdn.com/377/Good-Night-Tamil-2023-20230520150605-500x500.jpg",
    title: "Naan Gaali",
    author: "Sean Roldan",
    link: "https://drive.google.com/file/d/1mXnTmj9ZPH0mE2Xq1hKp0VnUGLRX0Qrt/preview",
    count: "0",
  },
  {
    id: 19,
    img: "https://c.saavncdn.com/470/David-2012-500x500.jpg",
    title: "Kanave Kanave",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1mRmuCYaRcl29NE-IVAcxOIEAB9FrMTXf/preview",
    count: "0",
  },
  {
    id: 20,
    img: "https://c.saavncdn.com/304/Meesaya-Murukku-Tamil-2017-20170822060308-500x500.jpg",
    title: "Vadi pulla vadi",
    author: "Hip Hop Tamizha",
    link: "h0ttps://drive.google.com/file/d/1mQCiys_QonW-4Wvd5r37Ycfua-fy0Hi1/preview",
    count: "0",
  },
  {
    id: 21,
    img: "https://c.saavncdn.com/573/Kaththi-Tamil-2014-20230701133540-500x500.jpg",
    title: "Aathi",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1mQ8kswuBLaMbM-i-ihxyqS791hzZXIQk/preview",
    count: "0",
  },
  {
    id: 22,
    img: "https://c.saavncdn.com/672/Matta-From-The-Greatest-Of-All-Time-Tamil-2024-20240831141002-500x500.jpg",
    title: "Matta",
    author: "Yuvan Shankar Raja",
    link: "https://drive.google.com/file/d/1mOiCHDUycUyc_HxhCClC1FB1N99KBdh7/preview",
    count: "0",
  },
  {
    id: 23,
    img: "https://c.saavncdn.com/651/Dheema-From-Love-Insurance-Kompany-Tamil-2024-20241015191442-500x500.jpg",
    title: "Dheema",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1mO7yTkNZTVWEXjKEBBB03sliCrm3iJLJ/preview",
    count: "0",
  },
  {
    id: 24,
    img: "https://c.saavncdn.com/485/Velaiyilla-Pattathari-2014-500x500.jpg",
    title: "Udhungada Sangu",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1mNSWBVacCSwpXAGEgOdpFKHpSfW7GUuE/preview",
    count: "0",
  },
  {
    id: 25,
    img: "https://tse2.mm.bing.net/th?id=OIP.LhjQbX9w-Nesk_npRWUfOwHaI3&pid=Api&P=0&h=180",
    title: "Ranjithame",
    author: "Thaman S",
    link: "https://drive.google.com/file/d/1mL12zYrggtAtqUPXNzQkJvm7wUv_aBOh/preview",
    count: "0",
  },
  {
    id: 26,
    img: "https://tse4.mm.bing.net/th?id=OIP.FPjpUOVSJflctlyGeaELywHaHa&pid=Api&P=0&h=180",
    title: "Hukum",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1mJqgZ475bZrUuogY8FYtpEa4mFmfMDia/preview  ",
    count: "0",
  },
  {
    id: 27,
    img: "https://tse4.mm.bing.net/th?id=OIP.XKqEYmtXmOgtVmL390FpUAHaHa&pid=Api&P=0&h=180",
    title: "Naa Ready",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1mIQFYshLEM6q2NWUCb5mpOT2YaQVSgEO/preview",
    count: "0",
  },
  {
    id: 28,
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ad/d4/0a/add40a42-ba24-88d0-b98d-8e288b5ea5d9/cover.jpg/800x800cc.jpg",
    title: "Makkamishi",
    author: "Harris Jeyaraj",
    link: "https://drive.google.com/file/d/1mGk7TRmaNqoUc1_kGy2jaCrHQl0hHXRl/preview",
    count: "0",
  },
  {
    id: 29,
    img: "https://tse4.mm.bing.net/th?id=OIP.OrjelVpuIdielLYXBt6J5AHaHa&pid=Api&P=0&h=180",
    title: "Oh Shanthi Shanthi",
    author: "Harris Jeyaraj",
    link: "https://drive.google.com/file/d/1mFcF43G_KbFmu8exud4hnP6T9PStaL1c/preview",
    count: "0",
  },
  {
    id: 30,
    img: "https://c.saavncdn.com/435/Don-Tamil-2022-20220512162818-500x500.jpg",
    title: "Private Party",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1m93DTCio6jFGpUdSaYxyhtQKMSuK0bmL/preview",
    count: "0",
  },
  {
    id: 31,
    img: "https://tse3.mm.bing.net/th?id=OIP.thUkR3bqcRRX0FG0VTR-DwAAAA&pid=Api&P=0&h=180",
    title: "Chellama",
    author: "Anirudh",
    link: "https://drive.google.com/file/d/1m5mShlK_ExbQCRycntPK7QJbgVEybPMX/preview",
    count: "0",
  },
  {
    id: 32,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1nNBJ5zKlyfveMSveicpkW1RcD87IBwrZ/preview",
    count: "0",
  },
  {
    id: 32,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1nNBJ5zKlyfveMSveicpkW1RcD87IBwrZ/preview",
    count: "0",
  },
  {
    id: 32,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1nNBJ5zKlyfveMSveicpkW1RcD87IBwrZ/preview",
    count: "0",
  },
  {
    id: 32,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1nNBJ5zKlyfveMSveicpkW1RcD87IBwrZ/preview",
    count: "0",
  },
  {
    id: 32,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1nNBJ5zKlyfveMSveicpkW1RcD87IBwrZ/preview",
    count: "0",
  },
  {
    id: 32,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1nNBJ5zKlyfveMSveicpkW1RcD87IBwrZ/preview",
    count: "0",
  },
  {
    id: 32,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1nNBJ5zKlyfveMSveicpkW1RcD87IBwrZ/preview",
    count: "0",
  },
  {
    id: 32,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: "https://drive.google.com/file/d/1nNBJ5zKlyfveMSveicpkW1RcD87IBwrZ/preview",
    count: "0",
  },
];
function initialLoader() {
  main_body.innerHTML = data
    .map((ele) => {
      return `
<div class="songs flex flex-col items-center m-3">
            <div
            id="${ele.id}"
              class="img_part w-[130px] h-[130px] flex justify-around items-center"
              onclick="playing.apply(this,arguments)"
          style="background-image: url(${ele.img});"
            >
              <div
                id="${ele.id}"
                class="play_btn w-[40px] h-[40px] rounded-4xl flex items-center justify-center bg-red-500"
                
                >
                <i
                id="${ele.id}"
                  class="fa-solid fa-play fa-lg ml-3.5 mt-5"
                  style="color: #fff"
                  onclick="playing.apply(this,arguments)"
                ></i>
              </div>
            </div>
            <h1
              class="text-[15px] h11"
              style="
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                  serif;
              "
            >
              ${ele.title}
            </h1>
            <h1 class="h12 text-[12px]">${ele.author}</h1>

          </div>
`;
    })
    .join("");

  searchUpdater();
}
function searchUpdater() {
  let inputs1 = document.getElementById("search");
  let inputs2 = document.getElementById("search_mobile");
  let options = document.getElementById("search_select");
  inputs1.innerHTML = `<input
              type="text"
              class="border-2 w-[100%] h-[35px] text-center bg-gray-300 rounded-3xl outline-0"
              placeholder="Search by ${options.value}"
              oninput="searchSong.apply(this,arguments)"
            />`;
  inputs2.innerHTML = `<input
            type="text"
            class="border-2 w-[80%] h-[35px] text-center bg-gray-300 rounded-3xl"
            oninput="searchSong.apply(this,arguments)"
            placeholder="Search by ${options.value}"
          />`;
}
const playing = (e) => {
  songPlayer.innerHTML = `
          <iframe
            src="${data[e.target.id].link}"
            width="100%"
            height="50"
            allow="autoplay"
          ></iframe>
`;
  info.innerHTML = `
<div class="w-[500px] h-[50px] bg-[rgb(30,30,31)] fixed bottom-0 z-10 flex gap-10 ">
<img src="${
    data[e.target.id].img
  }" width="50px" class="info_img rounded-4xl ml-5">
<div class="flex flex-col"> 
<h1 class="text-white">Song Name: ${data[e.target.id].title}</h1>
<h1 class="text-white">Song Title: ${data[e.target.id].author}</h1></div>
</div>
          `;
};
const searchSong = (e) => {
  let opt = document.getElementById("search_select");
  while (main_body.firstChild) {
    main_body.removeChild(main_body.firstChild);
  }
  let resultData;
  if (opt.value == "Song") {
    resultData = data.filter(({ title }) =>
      title.toLowerCase().includes(e.target.value.toLowerCase())
    );
  } else {
    resultData = data.filter(({ author }) =>
      author.toLowerCase().includes(e.target.value.toLowerCase())
    );
  }
  main_body.innerHTML = resultData
    .map((ele) => {
      return `
<div class="songs flex flex-col items-center m-3">
            <div
            id="${ele.id}"
              class="img_part w-[130px] h-[130px] flex justify-around items-center"
              onclick="playing.apply(this,arguments)"
          style="background-image: url(${ele.img});"
            >
              <div
                id="${ele.id}"
                class="play_btn w-[40px] h-[40px] rounded-4xl flex items-center justify-center bg-red-500"
                
                >
                <i
                id="${ele.id}"
                  class="fa-solid fa-play fa-lg ml-3.5 mt-5"
                  style="color: #fff"
                  
                ></i>
              </div>
            </div>
            <h1
              class="text-[15px] h11"
              style="
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                  serif;
              "
            >
              ${ele.title}
            </h1>
            <h1 class="text-[12px] h12">${ele.author}</h1>

          </div>
`;
    })
    .join("");
};
