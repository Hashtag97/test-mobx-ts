import { observable } from "mobx";

const store = observable({
	value: "",
	valueChange(value: string) {
		this.value = value;
	},
});

export default store;
