submitBtn.addEventListener("click", () => {
	if (textInput.value.trim() != "") {
		commentList.pushNewComment();
		commentList.refreshCommentsList();
		textInput.value = "";
	}
});

document.body.addEventListener("click", (event) => {
	const target = event.target;

	if (target.classList.contains("delete")) {
		const index = target.dataset.index;
		commentList.deleteComment(index);
		commentList.refreshCommentsList();
	}
});
