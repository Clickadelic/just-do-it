class TodoApp {
	constructor(width = 380) {
		this.width = width;
		this.todos = [];
		this.loaderInit();
		this.addDomElements();
		this.addStylesToHead();
		this.addListeners();
	}

	loaderInit() {
		const loading = document.addEventListener("DOMContentLoaded", () => {
			const loader = document.getElementById("loader");
			loader.remove();
		});
		const loader = document.createElement("div");
		loader.setAttribute("id", "loader");
		loader.innerHTML = "Loading...";
		loader.setAttribute("class", "loader");
		document.body.appendChild(loader);
	}

	addDomElements() {
		const rootDiv = document.createElement("div");
		rootDiv.setAttribute("id", "just-do-it");
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

		const actions = document.createElement("div");
		actions.setAttribute("id", "actions");
		actions.innerHTML = `<button class="btn" id="delete-all">Delete All</button>`;
		container.appendChild(actions);
	}

	addStylesToHead() {
		const styles = `
			:root {
				--jdi-container-width: ${this.width}px;
				--jdi-body-bg: var(--jdi-slate-800);
				--jdi-font-family: "Sergoe UI", sans-serif;
				--jdi-text: #141414;
				--jdi-indigo-800: #3730a3;

				--jdi-white: #ffffff;
				--jdi-black: #000000;

				--jdi-slate-50: #f8fafc;
				--jdi-slate-100: #f1f5f9;
				--jdi-slate-200: #e2e8f0;
				--jdi-slate-300: #cbd5e1;
				--jdi-slate-400: #94a3b8;
				--jdi-slate-500: #64748b;
				--jdi-slate-600: #475569;
				--jdi-slate-700: #334155;
				--jdi-slate-800: #1e293b;
				--jdi-slate-900: #0f172a;

				--jdi-gray-50: #f9fafb;
				--jdi-gray-100: #f3f4f6;
				--jdi-gray-200: #e5e7eb;
				--jdi-gray-300: #d1d5db;
				--jdi-gray-400: #9ca3af;
				--jdi-gray-500: #6b7280;
				--jdi-gray-600: #4b5563;
				--jdi-gray-700: #374151;
				--jdi-gray-800: #1f2937;
				--jdi-gray-900: #111827;

				--jdi-zinc-50: #fafafa;
				--jdi-zinc-100: #f4f4f5;
				--jdi-zinc-200: #e4e4e7;
				--jdi-zinc-300: #d4d4d8;
				--jdi-zinc-400: #a1a1aa;
				--jdi-zinc-500: #71717a;
				--jdi-zinc-600: #52525b;
				--jdi-zinc-700: #3f3f46;
				--jdi-zinc-800: #27272a;
				--jdi-zinc-900: #18181b;

				--jdi-stone-50: #fafaf9;
				--jdi-stone-100: #f5f5f4;
				--jdi-stone-200: #e7e5e4;
				--jdi-stone-300: #d6d3d1;
				--jdi-stone-400: #a8a29e;
				--jdi-stone-500: #78716c;
				--jdi-stone-600: #57534e;
				--jdi-stone-700: #44403c;
				--jdi-stone-800: #292524;
				--jdi-stone-900: #1c1917;

				--jdi-amber-50: #fffbeb;
				--jdi-amber-100: #fef3c7;
				--jdi-amber-200: #fde68a;
				--jdi-amber-300: #fcd34d;
				--jdi-amber-400: #fbbf24;
				--jdi-amber-500: #f59e0b;
				--jdi-amber-600: #d97706;
				--jdi-amber-700: #b45309;
				--jdi-amber-800: #92400e;
				--jdi-amber-900: #78350f;

				--jdi-red-50: #fef2f2;
				--jdi-red-100: #fee2e2;
				--jdi-red-200: #fecaca;
				--jdi-red-300: #fca5a5;
				--jdi-red-400: #f87171;
				--jdi-red-500: #ef4444;
				--jdi-red-600: #dc2626;
				--jdi-red-700: #b91c1c;
				--jdi-red-800: #991b1b;
				--jdi-red-900: #7f1d1d;

				--jdi-green-50: #f0fdf4;
				--jdi-green-100: #dcfce7;
				--jdi-green-200: #bbf7d0;
				--jdi-green-300: #86efac;
				--jdi-green-400: #4ade80;
				--jdi-green-500: #22c55e;
				--jdi-green-600: #16a34a;
				--jdi-green-700: #15803d;
				--jdi-green-800: #166534;
				--jdi-green-900: #14532d;

				--jdi-yellow-50: #fffbeb;
				--jdi-yellow-100: #fef3c7;
				--jdi-yellow-200: #fde68a;
				--jdi-yellow-300: #fcd34d;
				--jdi-yellow-400: #fbbf24;
				--jdi-yellow-500: #f59e0b;
				--jdi-yellow-600: #d97706;
				--jdi-yellow-700: #b45309;
				--jdi-yellow-800: #92400e;
				--jdi-yellow-900: #78350f;

				--jdi-indigo-50: #eef2ff;
				--jdi-indigo-100: #e0e7ff;
				--jdi-indigo-200: #c7d2fe;
				--jdi-indigo-300: #a5b4fc;
				--jdi-indigo-400: #818cf8;
				--jdi-indigo-500: #6366f1;
				--jdi-indigo-600: #4f46e5;
				--jdi-indigo-700: #4338ca;
				--jdi-indigo-800: #3730a3;
				--jdi-indigo-900: #312e81;

				--jdi-violet-50: #f5f3ff;
				--jdi-violet-100: #ede9fe;
				--jdi-violet-200: #ddd6fe;
				--jdi-violet-300: #c4b5fd;
				--jdi-violet-400: #a78bfa;
				--jdi-violet-500: #8b5cf6;
				--jdi-violet-600: #7c3aed;
				--jdi-violet-700: #6d28d9;
				--jdi-violet-800: #5b21b6;
				--jdi-violet-900: #4c1d95;

				--jdi-fuchsia-50: #fdf4ff;
				--jdi-fuchsia-100: #fae8ff;
				--jdi-fuchsia-200: #f5d0fe;
				--jdi-fuchsia-300: #f0abfc;
				--jdi-fuchsia-400: #e879f9;
				--jdi-fuchsia-500: #d946ef;
				--jdi-fuchsia-600: #c026d3;
				--jdi-fuchsia-700: #a21caf;
				--jdi-fuchsia-800: #86198f;
				--jdi-fuchsia-900: #701a75;

				--jdi-pink-50: #fdf2f8;
				--jdi-pink-100: #fce7f3;
				--jdi-pink-200: #fbcfe8;
				--jdi-pink-300: #f9a8d4;
				--jdi-pink-400: #f472b6;
				--jdi-pink-500: #ec4899;
				--jdi-pink-600: #db2777;
				--jdi-pink-700: #be185d;
				--jdi-pink-800: #9d174d;
				--jdi-pink-900: #831843;

				--jdi-rose-50: #fff1f2;
				--jdi-rose-100: #ffe4e6;
				--jdi-rose-200: #fecdd3;
				--jdi-rose-300: #fda4af;
				--jdi-rose-400: #fb7185;
				--jdi-rose-500: #f43f5e;
				--jdi-rose-600: #e11d48;
				--jdi-rose-700: #be123c;
				--jdi-rose-800: #9f1239;
				--jdi-rose-900: #881337;

				--jdi-sky-50: #f0f9ff;
				--jdi-sky-100: #e0f2fe;
				--jdi-sky-200: #bae6fd;
				--jdi-sky-300: #7dd3fc;
				--jdi-sky-400: #38bdf8;
				--jdi-sky-500: #0ea5e9;
				--jdi-sky-600: #0284c7;
				--jdi-sky-700: #0369a1;
				--jdi-sky-800: #075985;
				--jdi-sky-900: #0c4a6e;

				--jdi-teal-50: #f0fdfa;
				--jdi-teal-100: #ccfbf1;
				--jdi-teal-200: #99f6e4;
				--jdi-teal-300: #5eead4;
				--jdi-teal-400: #2dd4bf;
				--jdi-teal-500: #14b8a6;
				--jdi-teal-600: #0d9488;
				--jdi-teal-700: #0f766e;
				--jdi-teal-800: #115e59;
				--jdi-teal-900: #134e4a;

				--jdi-emerald-50: #ecfdf5;
				--jdi-emerald-100: #d1fae5;
				--jdi-emerald-200: #a7f3d0;
				--jdi-emerald-300: #6ee7b7;
				--jdi-emerald-400: #34d399;
				--jdi-emerald-500: #10b981;
				--jdi-emerald-600: #059669;
				--jdi-emerald-700: #047857;
				--jdi-emerald-800: #065f46;
				--jdi-emerald-900: #064e3b;

				--jdi-green-50: #f0fdf4;
				--jdi-green-100: #dcfce7;
				--jdi-green-200: #bbf7d0;
				--jdi-green-300: #86efac;
				--jdi-green-400: #4ade80;
				--jdi-green-500: #22c55e;
				--jdi-green-600: #16a34a;
				--jdi-green-700: #15803d;
				--jdi-green-800: #166534;
				--jdi-green-900: #14532d;

				--jdi-blue-50: #eff6ff;
				--jdi-blue-100: #dbeafe;
				--jdi-blue-200: #bfdbfe;
				--jdi-blue-300: #93c5fd;
				--jdi-blue-400: #60a5fa;
				--jdi-blue-500: #3b82f6;
				--jdi-blue-600: #2563eb;
				--jdi-blue-700: #1d4ed8;
				--jdi-blue-800: #1e40af;
				--jdi-blue-900: #1e3a8a;

				--jdi-cyan-50: #ecfeff;
				--jdi-cyan-100: #cffafe;
				--jdi-cyan-200: #a5f3fc;
				--jdi-cyan-300: #67e8f9;
				--jdi-cyan-400: #22d3ee;
				--jdi-cyan-500: #06b6d4;
				--jdi-cyan-600: #0891b2;
				--jdi-cyan-700: #0e749f;
				--jdi-cyan-800: #155e75;
				--jdi-cyan-900: #164e63;

				--jdi-violet-50: #f5f3ff;
				--jdi-violet-100: #ede9fe;
				--jdi-violet-200: #ddd6fe;
				--jdi-violet-300: #c4b5fd;
				--jdi-violet-400: #a78bfa;
				--jdi-violet-500: #8b5cf6;
				--jdi-violet-600: #7c3aed;
				--jdi-violet-700: #6d28d9;
				--jdi-violet-800: #5b21b6;
				--jdi-violet-900: #4c1d95;

			}
			* {
				padding: 0;
				margin: 0;
				box-sizing: border-box;
			}
			body {
				background-color: var(--jdi-body-bg);
				font-family: var(--jdi-font-family);
				color: var(--jdi-text);
				height: 100vh;
				}
				h1, h2, h3, h4, h5, h6 {
					font-weight: 300;
				}
				input[type="text"] {
				display: block;
				font-size: 1.125rem;
				width: 100%;
				padding: .75rem;
				border-radius: 4px;
				margin-bottom: .5rem;
				border: 1px solid var(--silver);
				outline: 0;
			}
			input[type="checkbox"] {
				display: inline-block;
				margin-right: 1rem;
				outline: 0;
				transform: scale(1.5);
			}
			button {
				width: 100%;
				display: block;
				border-radius: 6px;
				border: 0;
				cursor: pointer;
				margin-bottom: .5rem;
				font-size: 1.125rem;
				padding: .75rem .75rem;
				background: var(--jdi-indigo-800);
				color: var(--jdi-slate-50);
			}
			button:hover {
				background: var(--jdi-indigo-900);
			}
			.delete-btn {
				display: flex;
				background: var(--jdi-rose-500);
				color: var(--jdi-slate-50);
				border: 0;
				margin-top: .5rem;
				padding: .5rem .75rem;
				font-size: 1rem;

			}
			.delete-btn:hover {
				background: var(--jdi-rose-600);
			}
			.container {
				width:var(--jdi-container-width);
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
			#todo-list {
				list-style: none;
				padding: 0;
				li {
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: var(--jdi-text);
					background: white;
					padding: .75rem 1rem;
					border-radius: 4px;
					font-weight: 500;
					margin-bottom: .5rem;
				}
				li:has(.done-checkbox:checked) {
					text-decoration: line-through;
					font-weight: normal;
				}
			}

			#toast {
				position: fixed;
				bottom: 2rem;
				right: 2rem;
				width: 300px;
				padding: 1rem;
				background: rgba(255, 255, 255, 1);
				border: 1px solid rgba(0, 0, 0, .25);
				z-index: 1;
				font-weight: normal;
				font-size: 1rem;
				color: var(--jdi-text);
				border-radius: .25rem;
				box-shadow: 0 0 1rem rgba(0, 0, 0, .25);
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
		if (item == "") {
			this.setToaster("Please enter a todo");
			return;
		}
		this.todos.push(item);
	}

	markAsDone(item) {
		const index = this.todos.indexOf(item);
		this.todos.splice(index, 1);
	}

	deleteItem(item) {
		const index = this.todos.indexOf(item);
		this.todos.splice(index, 1);
	}

	renderTodos() {
		const localStorageTodos = localStorage.getItem("todos");
		if (localStorageTodos) {
			this.todos = JSON.parse(localStorageTodos);
		}
		const ul = document.getElementById("todo-list");
		ul.innerHTML = "";
		this.todos.forEach(todo => {
			let li = document.createElement("li");
			let itemId = window.crypto.randomUUID();
			li.setAttribute("id", itemId);
			li.innerHTML = "<div class='todo'>" + "<input type='checkbox' class='done-checkbox'>" + todo + "</div>";
			document.getElementById("todo-list").appendChild(li);

			const actions = document.createElement("div");
			actions.setAttribute("class", "actions");

			const deleteBtn = document.createElement("button");
			deleteBtn.setAttribute("class", "delete-btn");
			deleteBtn.innerHTML = "x";
			actions.appendChild(deleteBtn);

			li.appendChild(actions);

			deleteBtn.addEventListener("click", e => {
				const item = e.target.parentElement;
				this.deleteItem(item);
				this.renderTodos();
				saveToLocalStorage(this.todos);
			});
		});

		const checkboxes = document.querySelectorAll(".done-checkbox");
		checkboxes.forEach(checkbox => {
			checkbox.addEventListener("change", e => {
				const item = e.target.parentElement;
				this.markAsDone(item);
				// this.renderTodos();
				saveToLocalStorage(this.todos);
			});
		});
	}

	saveToLocalStorage() {
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}

	setToaster(message) {
		const toast = document.createElement("div");
		toast.setAttribute("id", "toast");
		toast.innerHTML = message;
		document.body.appendChild(toast);
	}

	resetInput() {
		document.getElementById("todo-input").value = "";
	}
}

const myApp = new TodoApp();
