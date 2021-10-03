Vue.component('task-list', {
	template:
		`<div>
			<task v-for="task in tasks">
				{{task.description}}
			</task>
		</div>`,

	data() {
		return {
			tasks: [
				{ description: 'Go to the store', completed: false },
				{ description: 'Go to the bank', completed: false },
				{ description: 'Go to the supermarket', completed: false },
			],
		};
	},
});
Vue.component('task', {
	template: `	<li class="list-group-item">
					<slot></slot>
				</li>`,

	data() {
		return {
			store: 'Go to the store',
		};
	}
});

new Vue({
	el: '#root',
	data: {
		message: 'Hello World',
		names: ['Matthijs', 'Marja', 'Kees', 'Muis', 'Assepoes'],
		newName: '',
		title: 'Now the title is being set through Vue.js',
		isLoading: false,
		tasks: [
			{ description: 'Learn Vue.js', completed: false },
			{ description: 'Do some groceries', completed: true },
			{ description: 'Watch new episode of SNL', completed: false },
			{ description: 'Cook some pasta for dinner', completed: false },
			{
				description: 'Learn to play some new riffs on guitar',
				completed: false,
			},
			{ description: 'Read Hitchhikers guide to the Galaxy', completed: false },
		],
	},

	methods: {
		addName() {
			this.names.push(this.newName);
			this.newName = '';
		},
		toggleClass() {
			this.isLoading = !this.isLoading;
		},
	},

	computed: {
		reversedMessage() {
			return this.message.split('').reverse().join('');
		},
		incompleteTasks() {
			return this.tasks.filter(task => !task.completed);
		},
	},
});
