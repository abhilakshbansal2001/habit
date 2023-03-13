import moment from 'moment';

export const habitsOrder = {
	'a-z' : {
		name: 'a-z',
		orderFunction: (a, b) => {
			const first = a.name.toLowerCase()
			const second = b.name.toLowerCase()
			if (first < second) {
				return -1;
			} else {
				return 1;
			}
		},
	},
	'z-a' : {
		name: 'z-a',
		orderFunction: (a, b) => {
			const first = a.name.toLowerCase()
			const second = b.name.toLowerCase()
			if (first > second) {
				return -1;
			} else {
				return 1;
			}
		},
	},
	'my habits order' : {
		name: 'my habits order',
		orderFunction: (a, b) => {
			const first = moment(a.date);
			const second = moment(b.date);

			if (first < second) {
				return -1;
			} else {
				return 1;
			}
		},
	},
};


export const habitsOrderArray = Object.values(habitsOrder)