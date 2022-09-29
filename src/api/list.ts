export const fetchList = async () => {
	try {
		//const response = await fetch("");
		//return response.json();

		const list = [
			{
				id: "qq1",
				name: "Test 1",
			},
			{
				id: "rr2",
				name: "test 2",
			},
		];

		return list;
	} catch (e) {
		console.error(e);
		return [];
	}
};
