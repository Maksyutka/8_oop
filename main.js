const commentsWrapper = document.querySelector(".comments__wrapper");
const deleteBtn = document.querySelector(".delete");
const textInput = document.querySelector(".comment-input");
const submitBtn = document.querySelector(".submit-btn");
const commentsNum = document.querySelector(".num");
const nickname = prompt("Введите свой ник");

class CommentList {
	constructor() {
		this.itemsArray = [];
	}

	pushNewComment() {
		this.itemsArray.push({
			name: nickname,
			content: textInput.value,
		});
	}

	deleteComment(index) {
		this.itemsArray.splice(index, 1);
	}

	generateComment(props) {
		return `
			<div class="comment-item">
				<p class="comment__name-block">Имя: <span class="name">${props.name}</span></p>
				<p class="comment__content-block">Текст: <span class="text">${props.content}</span></p>
				<div class="comment__btns">
					<button class="delete" data-index='${props.index}'>Удалить комментарий</button>
				</div>
			</div>
		`;
	}

	refreshCommentsList() {
		commentsWrapper.innerHTML = "";
		this.itemsArray.forEach((props) => {
			commentsWrapper.innerHTML += this.generateComment(props);
		});

		commentsNum.innerHTML = this.itemsArray.length;
	}
}

const commentList = new CommentList();
