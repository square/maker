export default {
	storeName: 'Goodfellas Pizzeria',
	categories: [
		'Most Popular',
		'Pizza',
		'Specialty Pies',
		'Sides',
		'Desserts',
	],
	items: [
		{
			name: 'Breadstick',
			description: 'A single breadstick the size of your arm',
			photo: 'https://picsum.photos/900/600?Breadstick',
			cost: 300,
			quantity: 1,
			categories: [
				'Most Popular',
				'Sides',
			],
			oneOf: [
				{
					name: 'Souffle Cups',
					selected: '',
					options: [
						{
							name: 'Italian',
							cost: 0,
						},
						{
							name: 'Balsamic',
							cost: 0,
						},
						{
							name: 'Garlic Butter',
							cost: 0,
						},
					],
				},
			],
		},
		{
			name: 'Extra Sauce',
			description: 'When you wanna be the sauce boss',
			photo: 'https://picsum.photos/900/600?ExtraSauce',
			cost: 75,
			quantity: 1,
			categories: [
				'Most Popular',
				'Sides',
			],
			oneOf: [
				{
					name: 'Souffle Cups',
					selected: '',
					options: [
						{
							name: 'Marinara',
							cost: 0,
						},
						{
							name: 'Ranch',
							cost: 0,
						},
						{
							name: 'Nacho Cheese',
							cost: 0,
						},
					],
				},
			],
		},
		{
			name: '16" Pie',
			description: 'Build your own 16" pizza pie',
			photo: 'https://picsum.photos/900/600?16Pie',
			cost: 1400,
			quantity: 1,
			categories: [
				'Most Popular',
				'Pizza',
			],
			anyOf: [
				{
					name: 'Add Meat Toppings',
					selected: [],
					options: [
						{
							name: 'Pepperoni',
							cost: 200,
						},
						{
							name: 'Italian Sausage',
							cost: 200,
						},
						{
							name: 'Bacon',
							cost: 200,
						},
					],
				},
				{
					name: 'Add Veggie Toppings',
					selected: [],
					options: [
						{
							name: 'Mushrooms',
							cost: 200,
						},
						{
							name: 'Onions',
							cost: 200,
						},
						{
							name: 'Black Olives',
							cost: 200,
						},
					],
				},
			],
		},
		{
			name: '22" Pie',
			description: 'Build your own 22" pizza pie',
			photo: 'https://picsum.photos/900/600?22Pie',
			cost: 2000,
			quantity: 1,
			categories: [
				'Most Popular',
				'Pizza',
			],
			anyOf: [
				{
					name: 'Add Meat Toppings',
					selected: [],
					options: [
						{
							name: 'Pepperoni',
							cost: 300,
						},
						{
							name: 'Italian Sausage',
							cost: 300,
						},
						{
							name: 'Bacon',
							cost: 300,
						},
					],
				},
				{
					name: 'Add Veggie Toppings',
					selected: [],
					options: [
						{
							name: 'Mushrooms',
							cost: 300,
						},
						{
							name: 'Onions',
							cost: 300,
						},
						{
							name: 'Black Olives',
							cost: 300,
						},
					],
				},
			],
		},
		{
			name: 'Wiseguy',
			description: 'Straight from the garden',
			photo: 'https://picsum.photos/900/600?Wiseguy',
			quantity: 1,
			categories: [
				'Specialty Pies',
			],
			oneOf: [
				{
					name: 'Choose size',
					selected: '',
					options: [
						{
							name: '12"',
							cost: 1300,
						},
						{
							name: '16"',
							cost: 2100,
						},
						{
							name: '22"',
							cost: 2900,
						},
					],
				},
			],
		},
		{
			name: 'The Vinny',
			description: 'A friend of the family',
			photo: 'https://picsum.photos/900/600?TheVinny',
			quantity: 1,
			categories: [
				'Specialty Pies',
			],
			oneOf: [
				{
					name: 'Choose size',
					selected: '',
					options: [
						{
							name: '12"',
							cost: 1400,
						},
						{
							name: '16"',
							cost: 2250,
						},
						{
							name: '22"',
							cost: 3100,
						},
					],
				},
			],
		},
		{
			name: 'Cannoli',
			description: 'Pastry filled with sweet ricotta & chocolate chips',
			photo: 'https://picsum.photos/900/600?Cannoli',
			cost: 300,
			quantity: 1,
			categories: [
				'Desserts',
			],
		},
		{
			name: 'Chocolate Chip Cookie',
			description: 'Extra large chocolate filled chocolate chip cookie',
			photo: 'https://picsum.photos/900/600?ChocolateChipCookie',
			cost: 200,
			quantity: 1,
			categories: [
				'Desserts',
			],
		},
	],
};
