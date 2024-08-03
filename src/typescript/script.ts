const botaoTrailer: HTMLButtonElement | null = document.querySelector(".botao-trailer");
const botaoFecharModal: HTMLButtonElement | null = document.querySelector(".fechar-modal");
const video: HTMLElement | null = document.getElementById("video");
const modal: HTMLElement | null = document.querySelector(".modal");
const linkDoVideo = video?.src;

function alternarModal():void {
	modal?.classList.toggle("aberto");
}

botaoTrailer?.addEventListener("click", () => {
	alternarModal();
	video?.setAttribute("src", linkDoVideo);
});

botaoFecharModal?.addEventListener("click", () => {
	alternarModal();
	video?.setAttribute("src", "");
});