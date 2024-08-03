"use strict";
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video === null || video === void 0 ? void 0 : video.src;
function alternarModal() {
    modal === null || modal === void 0 ? void 0 : modal.classList.toggle("aberto");
}
botaoTrailer === null || botaoTrailer === void 0 ? void 0 : botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video === null || video === void 0 ? void 0 : video.setAttribute("src", linkDoVideo);
});
botaoFecharModal === null || botaoFecharModal === void 0 ? void 0 : botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video === null || video === void 0 ? void 0 : video.setAttribute("src", "");
});
