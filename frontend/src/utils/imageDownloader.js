export const downloadImage = (image) => {
  let element = document.createElement("a");
  element.setAttribute("href", image);
  element.setAttribute("download", "");
  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};
