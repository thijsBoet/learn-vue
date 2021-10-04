Vue.component('task-list', {
	template: `<div>
			<task v-for="task in tasks" :key="task.id">
				{{task.description}}
			</task>
		</div>`,

	data() {
		return {
			tasks: [{
					description: 'Go to the store',
					completed: false
				},
				{
					description: 'Go to the bank',
					completed: false
				},
				{
					description: 'Go to the supermarket',
					completed: false
				},
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

Vue.component('v-message', {
	props: ['title', 'body'],

	data() {
		return {
			isVisible: true
		}
	},

	template: `
			<article class="message" v-show="isVisible">
				<div class="message-header">
					<p>{{title}}</p>
					<button class="delete" aria-label="delete" @click="isVisible = false"></button>
  				</div>
				</div>
				<div class="message-body">
					{{ body }}
				</div>
			</article>
	`,

	methods: {
		hideModal() {
			this.isVisible = false
		}
	}
})

Vue.component('vue-modal', {
	template: `<div class="modal is-active" >
							<div class="modal-background"></div>
							<div class="modal-content">
								<div class="box">
									<p>Lorem</p>
								</div>
							</div>
							<button class="modal-close is-large" aria-label="close"></button>
						</div>`
});

Vue.component('tabs', {
	template: `
		<div>
			<div class="tabs">
				<ul>
					<li v-for = "tab in tabs" :class = "{ 'is-active': tab.isActive}">
						<a @click="selectTab(tab)" href="#tab">{{ tab.name }}</a>
					</li>
				</ul>
			</div>

			<div class="tab-details">
				<slot></slot>
			</div>
		</div>
	`,

	data() {
		return  {tabs:[]}
	},

	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == selectedTab.name)
			});
		}
	}
})

Vue.component('tab', {
	props: {
		name: {
			required: true
		},
		selected: {
			default: false
		}
	},
	template: `
		<div><slot></slot></div>
	`,

	data() {
		return {
			isActive: false
		}
	},

	mounted() {
		this.isActive = this.selected;
	}
})

new Vue({
	el: '#root',
	data: {
		showModal: false,
		message: 'Hello World',
		names: ['Matthijs', 'Marja', 'Kees', 'Muis', 'Assepoes'],
		newName: '',
		title: 'Now the title is being set through Vue.js',
		isLoading: false,
		tasks: [{
				description: 'Learn Vue.js',
				completed: false
			},
			{
				description: 'Do some groceries',
				completed: true
			},
			{
				description: 'Watch new episode of SNL',
				completed: false
			},
			{
				description: 'Cook some pasta for dinner',
				completed: false
			},
			{
				description: 'Learn to play some new riffs on guitar',
				completed: false,
			},
			{
				description: 'Read Hitchhikers guide to the Galaxy',
				completed: false
			},
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