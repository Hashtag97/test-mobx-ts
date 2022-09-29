import { fetchList } from "../api/list";
import { observable, makeAutoObservable, action } from "mobx";
import { InputStore } from "../store";

export interface IListItem {
	id: string;
	name: string;
}

class ListStore {
	inputValue: string = "";
	load: Boolean = true;
	list: Array<IListItem> = [];

	setListStoreAddListItem() {
		if (this.inputValue === "") return;
		const random = Math.random() * 2000;
		this.list = [...this.list, { id: `new${random}`, name: this.inputValue }];
	}

	setListStoreAddListItemInInputStore() {
		if (InputStore.value === "") return;
		const random = Math.random() * 2000;
		this.list = [...this.list, { id: `new${random}`, name: InputStore.value }];
		InputStore.valueChange("");
	}

	removeListItem(key: string) {
		this.list = this.list.filter((item) => item.id !== key);
	}

	inputValueChange(value: string) {
		this.inputValue = value;
	}

	async loadList() {
		this.inputValueChange("");
		const list = await fetchList();
		const timer = Math.random() * 2000;
		setTimeout(() => {
			this.list = list;
			this.load = false;
		}, timer);
	}

	refreshList() {
		this.load = true;
		this.loadList();
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default ListStore;
