class TodoApp {
	constructor() {
		this.todos = [];
		this.addDomElements();
		this.addStylesToHead();
		this.addListeners();
	}

	addDomElements() {
		const rootDiv = document.createElement("div");
		rootDiv.setAttribute("id", "custom-todo-app");
		document.body.appendChild(rootDiv);

		const container = document.createElement("div");
		container.setAttribute("class", "container");
		rootDiv.appendChild(container);

		const title = document.createElement("h1");
		title.innerHTML = "Todo App";
		container.appendChild(title);

		const form = document.createElement("form");
		form.setAttribute("id", "todo-form");
		form.setAttribute("method", "post");

		container.appendChild(form);

		const todoInput = document.createElement("input");
		todoInput.setAttribute("type", "text");
		todoInput.setAttribute("name", "todo");
		todoInput.setAttribute("id", "todo-input");
		todoInput.setAttribute("placeholder", "New Todo");
		form.appendChild(todoInput);

		const submit = document.createElement("button");
		submit.setAttribute("type", "submit");
		submit.setAttribute("class", "btn");
		submit.innerHTML = "Add Todo";
		form.appendChild(submit);

		const ul = document.createElement("ul");
		ul.setAttribute("id", "todo-list");
		container.appendChild(ul);
	}

	addStylesToHead() {
		const styles = `
			:root {
				--container-width: 400px;
				--dark: #141414;
				--light: #f0f0f0;
				--yellow: #FFE53B;
				--btn-bg-hover: #cccccc;
				--red: #FF2525;
			}
			* {
				padding: 0;
				margin: 0;
				box-sizing: border-box;
			}
			body {
				background-color: var(--yellow);
				background-image: linear-gradient(147deg, var(--yellow) 0%, var(--red) 74%);
				height: 100vh;
				font-family: 'Sergoe UI', sans-serif;
				color: var(--text);
			}
			h1, h2, h3, h4, h5, h6 {
				font-weight: lighter;
			}
			input[type="text"] {
				display: block;
				width: 100%;
				padding: .75rem;
				border-radius: 6px;
				margin-bottom: .5rem;
				border: 1px solid var(--silver);
				outline: 0;
			}
			button {
				width: 100%;
				display: block;
				border-radius: 6px;
				border: 0;
				background: var(--light);
				cursor: pointer;
				margin-bottom: .5rem;
				padding: .75rem .75rem;
			}
			button:hover {
				background: var(--btn-bg-hover);
			}
			.container {
				width:var(--container-width);
				margin: 5rem auto 0 auto;
				h1 {
					color: white;
					text-align: center;
					margin-bottom: 2rem;
				}
				form {
					margin: auto;
					margin-bottom: 2rem;
				}

			}

		`;
		document.head.insertAdjacentHTML("beforeend", `<style id="todo-app-style-css">${styles}</style>`);
	}

	addListeners() {
		document.addEventListener("submit", e => {
			e.preventDefault();
			const item = document.getElementById("todo-input").value;
			this.addItem(item);
			this.renderTodos();
			this.resetInput();
		});
	}

	addItem(item) {
		this.todos.push(item); // Method to add items to the array
	}

	renderTodos() {
		const ul = document.getElementById("todo-list");
		ul.innerHTML = "";
		this.todos.forEach(todo => {
			let li = document.createElement("li");
			li.innerHTML = todo;

			document.getElementById("todo-list").appendChild(li);
		});
	}

	resetInput() {
		document.getElementById("todo-input").value = "";
	}
}

const myApp = new TodoApp();
