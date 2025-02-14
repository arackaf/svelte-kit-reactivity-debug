const defultItems = [
	{ id: 1, name: 'Item 1' },
	{ id: 2, name: 'Item 1 a', parent: 1 }
	//{ id: 5, name: 'aa i', parent: 2 },

	//{ id: 3, name: 'b' },
	//{ id: 4, name: 'c' }
];

let loadCount = 0;
let nextId = -1;

export const load = async () => {
	if (loadCount++ > 0) {
		defultItems.push({ id: nextId--, name: 'new ', parent: 2 });
	}

	return {
		payload: await Promise.resolve(defultItems)
	};
};
