//example 1 function store
//import { observable } from "mobx";

// const store = observable({
// 	checked: false,
// 	checkedChange() {
// 		this.checked = !this.checked;
// 	},
// });

// export default store;

//example 2 Class store
import { observable, makeObservable, action } from "mobx";

class CheckBoxStore {
	checked: boolean = false;

	checkedChange() {
		this.checked = !this.checked;
	}

	constructor() {
		makeObservable(this, {
			checked: observable,
			checkedChange: action,
		});
	}
}

export default CheckBoxStore;
