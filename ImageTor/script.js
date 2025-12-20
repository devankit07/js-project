const filtersContainer = document.querySelector(".filters");
const imageCanvas = document.querySelector("#image-canvas");
const imageinput = document.querySelector("#image-input");
const canvasCtx = imageCanvas.getContext("2d");
const resetbtn = document.querySelector("#reset-btn");
const downloadbtn = document.querySelector('#Download-btn')
const presetscontainer = document.querySelector('.presets')
let image = null;

let  filters = {
  brightness: { value: 100, min: 0, max: 200, unit: "%" },
  contrast: { value: 100, min: 0, max: 200, unit: "%" },
  saturation: { value: 100, min: 0, max: 200, unit: "%" },
  grayscale: { value: 0, min: 0, max: 100, unit: "%" },
  sepia: { value: 0, min: 0, max: 100, unit: "%" },
  invert: { value: 0, min: 0, max: 100, unit: "%" },
  hueRotate: { value: 0, min: 0, max: 360, unit: "deg" },
  blur: { value: 0, min: 0, max: 20, unit: "px" },
  opacity: { value: 100, min: 0, max: 100, unit: "%" },
};

function createfiltersElement(name, value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.name = name;

  const p = document.createElement("p");
  p.innerText = name;

  div.appendChild(p);
  div.appendChild(input);

  input.addEventListener("input", () => {
    filters[name].value = input.value;
    applyfilter();
  });

  return div;
}

function createfilter(){
    
Object.keys(filters).forEach((key) => {
  const filterelement = createfiltersElement(
    key,
    filters[key].value,
    filters[key].min,
    filters[key].max
  );
  filtersContainer.appendChild(filterelement);
});
}

createfilter();

imageinput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const imagePlaceholder = document.querySelector(".placeholder");
  imagePlaceholder.style.display = "none";

  image = new Image();
  image.src = URL.createObjectURL(file);

  image.onload = () => {
    const maxWidth = 600;
    const maxHeight = 800;
    let width = image.width;
    let height = image.height;

    const ratio = Math.min(maxWidth / width, maxHeight / height, 1);
    width *= ratio;
    height *= ratio;

    imageCanvas.width = width;
    imageCanvas.height = height;

    canvasCtx.clearRect(0, 0, width, height);
    canvasCtx.drawImage(image, 0, 0, width, height);

  };
});

function applyfilter() {
  if (!image) return;

  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  canvasCtx.filter = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    hue-rotate(${filters.hueRotate.value}${filters.hueRotate.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
  `;
  canvasCtx.drawImage(image, 0, 0, imageCanvas.width, imageCanvas.height);
}

resetbtn.addEventListener("click",()=>{
     filters = {
  brightness: { value: 100, min: 0, max: 200, unit: "%" },
  contrast: { value: 100, min: 0, max: 200, unit: "%" },
  saturation: { value: 100, min: 0, max: 200, unit: "%" },
  grayscale: { value: 0, min: 0, max: 100, unit: "%" },
  sepia: { value: 0, min: 0, max: 100, unit: "%" },
  invert: { value: 0, min: 0, max: 100, unit: "%" },
  hueRotate: { value: 0, min: 0, max: 360, unit: "deg" },
  blur: { value: 0, min: 0, max: 20, unit: "px" },
  opacity: { value: 100, min: 0, max: 100, unit: "%" },
};
applyfilter();
filtersContainer.innerHTML =""
createfilter();
} )


downloadbtn.addEventListener("click", () => {

  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imageCanvas.toDataURL("image/png");
  link.click();
});

const presets = {
  original: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    grayscale: 0,
    sepia: 0,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    opacity: 100
  },
  drama: {
    brightness: 90,
    contrast: 150,
    saturation: 120,
    grayscale: 0,
    sepia: 10,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    opacity: 100
  },
  noir: {
    brightness: 90,
    contrast: 140,
    saturation: 0,
    grayscale: 100,
    sepia: 0,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    opacity: 100
  },
  vintage: {
    brightness: 110,
    contrast: 120,
    saturation: 80,
    grayscale: 0,
    sepia: 40,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    opacity: 100
  },
  cinematic: {
    brightness: 95,
    contrast: 130,
    saturation: 110,
    grayscale: 0,
    sepia: 10,
    invert: 0,
    hueRotate: 10,
    blur: 0,
    opacity: 100
  },
  cold: {
    brightness: 100,
    contrast: 120,
    saturation: 90,
    grayscale: 0,
    sepia: 0,
    invert: 0,
    hueRotate: 200,
    blur: 0,
    opacity: 100
  },
  warm: {
    brightness: 105,
    contrast: 120,
    saturation: 120,
    grayscale: 0,
    sepia: 15,
    invert: 0,
    hueRotate: 10,
    blur: 0,
    opacity: 100
  },
  soft: {
    brightness: 110,
    contrast: 100,
    saturation: 100,
    grayscale: 0,
    sepia: 5,
    invert: 0,
    hueRotate: 0,
    blur: 2,
    opacity: 100
  },
  highContrast: {
    brightness: 90,
    contrast: 180,
    saturation: 120,
    grayscale: 0,
    sepia: 0,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    opacity: 100
  }
};

Object.keys(presets).forEach(presetsname=>{
    const presetsbtn = document.createElement("button")
    presetsbtn.classList.add("btn")
    presetsbtn.innerText = presetsname
    presetscontainer.appendChild(presetsbtn)

    presetsbtn.addEventListener("click",()=>{
        const preset = presets[presetsname]

        Object.keys(preset).forEach(filtername=>{
            filters[filtername].value = preset[filtername]
        })

        applyfilter();

        filtersContainer.innerHTML = ""
        createfilter();
    })


})

