let main_body = document.getElementById("main_body");
let player = document.getElementById("songPlayer");
let info = document.getElementById("songinfo");
let data = [
  {
    id: 0,
    img: "https://tse4.mm.bing.net/th?id=OIP.AtAI0H9sQZpMmeRsGXHavQHaHa&pid=Api&P=0&h=180",
    title: "Kaavala",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/28b56d0f-ea8a-41eb-91c3-ba25e75def11",
    count: "0",
  },
  {
    id: 1,
    img: "https://c.saavncdn.com/336/O-Kadhal-Kanmani-Tamil-2015-20200805153450-500x500.jpg",
    title: "Kaara Aatakara",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/6a584299-2390-449a-8482-cde1145263aa",
    count: "0",
  },
  {
    id: 2,
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri",
    author: "A.R.Rahman",
    link: " https://github.com/user-attachments/assets/793a52ff-231e-427c-b142-a11b5da9929c",
    count: "0",
  },
  {
    id: 3,
    img: "https://c.saavncdn.com/934/Golden-Sparrow-From-Nilavuku-En-Mel-Ennadi-Kobam-Tamil-2024-20241116194614-500x500.jpg",
    title: "Golden Sparrow",
    author: "G.V.Prakash",
    link: "https://github.com/user-attachments/assets/b9e2be71-62fb-485b-a4b4-47f037a22149",
    count: "0",
  },
  {
    id: 4,
    img: "https://tse1.mm.bing.net/th?id=OIP.Ud9K_U03B7OsBaSFQP9bpQHaHa&pid=Api&P=0&h=180",
    title: "Hey Minnale",
    author: "G.V.Prakash",
    link: "https://github.com/user-attachments/assets/8ef9607e-9a52-4fcf-bfca-76fc2ebfe6ab",
    count: "0",
  },
  {
    id: 5,
    img: "https://tse1.mm.bing.net/th?id=OIP.QGJJ1dBEaR3OXtE3MdYGEwHaHa&pid=Api&P=0&h=180",
    title: "Manasilayo",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/68fc07af-90e0-4667-b855-e7306315ba2b",
    count: "0",
  },
  {
    id: 6,
    img: "https://tse4.mm.bing.net/th?id=OIP.u-KZxbEXgLYQoWOfG1Cp5QHaHa&pid=Api&P=0&h=180",
    title: "Arabic Kuthu",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/64de11e8-7690-4939-ba15-21dd0eb36046",
    count: "0",
  },
  {
    id: 7,
    img: "https://tse1.mm.bing.net/th?id=OIP.zbYhA0yQjDw0ByBCFRDhJAHaHa&pid=Api&P=0&h=180",
    title: "Boomi enna Suthudhe",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/6551f24e-f165-4666-bc8a-aaf236402f16",
    count: "0",
  },
  {
    id: 8,
    img: "https://tse2.mm.bing.net/th?id=OIP.afhGc8QJz2lK7dV7w5IxVQHaHa&pid=Api&P=0&h=180",
    title: "Thee Thalapathy",
    author: "Thaman S",
    link: "https://github.com/user-attachments/assets/5e02e994-fb47-4a06-9cf4-39669c0aa08c",
    count: "0",
  },
  {
    id: 9,
    img: "https://c.saavncdn.com/984/Paiya-Tamil-2010-20200620134043-500x500.jpg",
    title: "Adada Mazhaida",
    author: "Yuvan Shankar Raja",
    link: "https://github.com/user-attachments/assets/38aacd1d-86b5-48bb-99c4-b0fa94b02325",
    count: "0",
  },
  {
    id: 10,
    img: "https://c.saavncdn.com/274/Anegan-Tamil-2014-20190822152158-500x500.jpg",
    title: "Danga Maari Oodhari",
    author: "Harris Jeyaraj",
    link: "https://github.com/user-attachments/assets/a3e40a0a-96cd-4a88-a242-b281a44b5219",
    count: "0",
  },
  {
    id: 11,
    img: "https://c.saavncdn.com/590/I-Tamil-2014-20190822153052-500x500.jpg",
    title: "Ennodu Nee Irundhal",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/96ac84ca-85d4-41ed-bfb7-50cfefcc9cd2",
    count: "0",
  },
  {
    id: 12,
    img: "https://c.saavncdn.com/289/Pathu-Thala-Original-Motion-Picture-Soundtrack-Tamil-2023-20230320144505-500x500.jpg",
    title: "Pathu thala",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/217049a9-921e-4b75-ac88-615c7ca55cd4",
    count: "0",
  },
  {
    id: 13,
    img: "https://c.saavncdn.com/224/Flag-Anthem-Tamilaga-Vettri-Kazhagam-Tamil-2024-20240823142028-500x500.jpg",
    title: "TVK Flag Anthem",
    author: "Thalapathy Vijay",
    link: "https://github.com/user-attachments/assets/239fc295-5424-43e2-be21-3d4a863cc284",
    count: "0",
  },
  {
    id: 14,
    img: "https://tse1.mm.bing.net/th?id=OIP.XdFL2PZHy4rpvnphuZmASQHaHa&pid=Api&P=0&h=180",
    title: "Illuminati",
    author: "Susin Shyam",
    link: "https://github.com/user-attachments/assets/0e63aea2-8f86-486e-b7b1-9f9ab4e7a3bd",
    count: "0",
  },
  {
    id: 15,
    img: "https://c.saavncdn.com/113/Vidaamuyarchi-Tamil-2025-20250217133052-500x500.jpg",
    title: "Pathikichu",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/0dfcbfa8-9c60-47cc-baa3-83400c5774ae",
    count: "0",
  },
  {
    id: 16,
    img: "https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg",
    title: "Baadas",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/7a8b15d1-571a-4ec1-a11b-0bc13ee8508b",
    count: "0",
  },
  {
    id: 17,
    img: "https://c.saavncdn.com/492/Mersal-Tamil-2017-20170820120559-500x500.jpg",
    title: "Aalaporan Tamizhan",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/f72483e1-1b08-4989-81dd-ce77b24e0f98",
    count: "0",
  },
  {
    id: 18,
    img: "https://c.saavncdn.com/377/Good-Night-Tamil-2023-20230520150605-500x500.jpg",
    title: "Naan Gaali",
    author: "Sean Roldan",
    link: "https://github.com/user-attachments/assets/2114a398-f9ee-45d0-92d1-c30edf19c239",
    count: "0",
  },
  {
    id: 19,
    img: "https://c.saavncdn.com/470/David-2012-500x500.jpg",
    title: "Kanave Kanave",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/c979f779-b409-4fa3-9e66-58e0162d41fc",
    count: "0",
  },
  {
    id: 20,
    img: "https://c.saavncdn.com/304/Meesaya-Murukku-Tamil-2017-20170822060308-500x500.jpg",
    title: "Vadi pulla vadi",
    author: "Hip Hop Tamizha",
    link: "https://github.com/user-attachments/assets/a44bf699-7d11-4c15-bfaa-c8aab5142197",
    count: "0",
  },
  {
    id: 21,
    img: "https://c.saavncdn.com/573/Kaththi-Tamil-2014-20230701133540-500x500.jpg",
    title: "Aathi",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/eaed5020-f46d-4b81-9dc7-06a0cb7abdee",
    count: "0",
  },
  {
    id: 22,
    img: "https://c.saavncdn.com/672/Matta-From-The-Greatest-Of-All-Time-Tamil-2024-20240831141002-500x500.jpg",
    title: "Matta",
    author: "Yuvan Shankar Raja",
    link: "https://github.com/user-attachments/assets/9816b677-f651-4855-be24-e23a1c55172a",
    count: "0",
  },
  {
    id: 23,
    img: "https://c.saavncdn.com/651/Dheema-From-Love-Insurance-Kompany-Tamil-2024-20241015191442-500x500.jpg",
    title: "Dheema",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/75440cf6-033e-48e3-a792-2e4f5c656684",
    count: "0",
  },
  {
    id: 24,
    img: "https://c.saavncdn.com/485/Velaiyilla-Pattathari-2014-500x500.jpg",
    title: "Udhungada Sangu",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/09086f80-a918-49db-b171-cb77ee0d2d35",
    count: "0",
  },
  {
    id: 25,
    img: "https://tse2.mm.bing.net/th?id=OIP.LhjQbX9w-Nesk_npRWUfOwHaI3&pid=Api&P=0&h=180",
    title: "Ranjithame",
    author: "Thaman S",
    link: "https://github.com/user-attachments/assets/fc5d9b12-dc38-4cf5-964b-30ec81ff4fd7",
    count: "0",
  },
  {
    id: 26,
    img: "https://tse4.mm.bing.net/th?id=OIP.FPjpUOVSJflctlyGeaELywHaHa&pid=Api&P=0&h=180",
    title: "Hukum",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/3dfd332b-9f03-43bb-a0ac-fe7506b2262e",
    count: "0",
  },
  {
    id: 27,
    img: "https://tse4.mm.bing.net/th?id=OIP.XKqEYmtXmOgtVmL390FpUAHaHa&pid=Api&P=0&h=180",
    title: "Naa Ready",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/200bbe1b-f832-4dbb-b862-d06ced398e37",
    count: "0",
  },
  {
    id: 28,
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ad/d4/0a/add40a42-ba24-88d0-b98d-8e288b5ea5d9/cover.jpg/800x800cc.jpg",
    title: "Makkamishi",
    author: "Harris Jeyaraj",
    link: "https://github.com/user-attachments/assets/2a50e2f2-757b-4de3-b015-acbad01b2dce",
    count: "0",
  },
  {
    id: 29,
    img: "https://tse4.mm.bing.net/th?id=OIP.OrjelVpuIdielLYXBt6J5AHaHa&pid=Api&P=0&h=180",
    title: "Oh Shanthi Shanthi",
    author: "Harris Jeyaraj",
    link: "https://github.com/user-attachments/assets/a21f742e-815f-41f6-bb91-23619992f66c",
    count: "0",
  },
  {
    id: 30,
    img: "https://c.saavncdn.com/435/Don-Tamil-2022-20220512162818-500x500.jpg",
    title: "Private Party",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/a20da6b8-6eac-4318-ab64-2978ad3f0746",
    count: "0",
  },
  {
    id: 31,
    img: "https://tse3.mm.bing.net/th?id=OIP.thUkR3bqcRRX0FG0VTR-DwAAAA&pid=Api&P=0&h=180",
    title: "Chellama",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/0c6b408b-a707-452f-b021-82e71efc826e",
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
              class="img_part w-[130px] h-[130px] flex justify-around items-center border-0 rounded-2xl"
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
              class="border-2 w-[100%] h-[35px] text-center bg-gray-200 rounded-3xl outline-0"
              placeholder="Search by ${options.value}"
              oninput="searchSong.apply(this,arguments)"
            />`;
  inputs2.innerHTML = `<input
            type="text"
            class="border-2 w-[80%] h-[35px] text-center bg-gray-200 rounded-3xl"
            oninput="searchSong.apply(this,arguments)"
            placeholder="Search by ${options.value}"
          />`;
}
const playing = (e) => {
  songPlayer.innerHTML = `
  <div class="w-[100%] h-[60px] flex bg-[#F1F3F4] justify-between items-center">
  <div id="songinfo" class="flex h-[100%] items-center gap-[20px] ml-5">
  <img src=${data[e.target.id].img} alt="" width="50px" class="rounded-4xl">
  <div>
  <h1>Song: ${data[e.target.id].title}</h1>
  <h1>Author: ${data[e.target.id].author}</h1>
  </div>
  </div>
  <div h-[100%] w-[100%]>
    <audio id="songnav"  class="w-[63vw]" controls autoplay loop>
  <source src=${data[e.target.id].link} type="audio/ogg">
</audio></div></div>
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
              class="img_part w-[130px] h-[130px] flex justify-around items-center "
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
