const container = document.querySelector(".container");

const phones = [
  {
    background:
      "https://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg",
    rotation: -20,
    move: 0
  },
  {
    background:
      "https://conservationaction.co.za/wp-content/uploads/2018/08/CHAS1066.jpg",
    rotation: 0,
    move: -40,
    depth: 10
  },
  {
    background:
      "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/01/pig_AdobeStock_2747487-1024x683.jpeg",
    rotation: 20,
    move: 0
  }
];

function createPhone(attributes) {
  const phone = document.createElement("div");
  const screen = document.createElement("div");
  const notchSection = document.createElement("div");
  const notch = document.createElement("div");
  const speaker = document.createElement("div");
  const camera = document.createElement("div");

  screen.setAttribute("class", "screen");
  phone.setAttribute("class", "phone");
  notchSection.setAttribute("class", "notch-section");
  notch.setAttribute("class", "notch");
  speaker.setAttribute("class", "speaker");
  camera.setAttribute("class", "camera");

  container.appendChild(phone);
  phone.appendChild(screen);
  screen.appendChild(notchSection);
  notchSection.appendChild(notch);
  notch.appendChild(speaker);
  notch.appendChild(camera);

  screen.style.backgroundImage = `url("${attributes.background}")`;
  screen.style.backgroundSize = "cover";
  screen.style.backgroundPosition = "center";

  phone.style.transform = `rotate(${attributes.rotation}deg) translateY(${attributes.move || 0}px)`;
  phone.style.zIndex = attributes.depth;
}

phones.forEach(phone => createPhone(phone));


/**
    Refactored code
**/

// const container = document.querySelector(".container");

// const phoneData = [
//     {
//       background:
//         "https://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg",
//       rotation: -20,
//       move: 0
//     },
//     {
//       background:
//         "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/31/10/lion-face.jpg?w968h681",
//       rotation: 0,
//       move: -30,
//       depth: 10
//     },
//     {
//       background:
//         "https://images.homedepot-static.com/productImages/38de5f1d-135e-4826-b5b6-45c4830b46b4/svn/van-zyverden-flower-bulbs-11351-64_1000.jpg",
//       rotation: 20,
//       move: 0
//     }
//   ];

// function elementMaker(elements) {
//   return elements.map(element => {
//     const el = document.createElement("div");
//     el.setAttribute("class", element);
//     return el;
//   });
// }

// function createNotch() {
//   const elements = ["notch-section", "notch", "speaker", "camera"];
//   const [notchSection, notch, speaker, camera] = elementMaker(elements);

//   notchSection.appendChild(notch);
//   notch.appendChild(speaker);
//   notch.appendChild(camera);
//   return notchSection;
// }

// function createPhone({ background, rotation, depth, move }) {
//   const elements = ["phone", "screen"];
//   const [phone, screen] = elementMaker(elements);
//   const notchSection = createNotch();

//   phone.appendChild(screen);
//   screen.appendChild(notchSection);

//   screen.style.backgroundImage = `url("${background}")`;

//   phone.style.transform = `rotate(${rotation}deg) translateY(${move || 0}px)`;
//   phone.style.zIndex = depth;

//   return phone;
// }

// const phones = phoneData.map(phone => createPhone(phone));
// phones.forEach(phone => container.appendChild(phone));
