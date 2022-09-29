import { injectStores } from "@mobx-devtools/tools";

import CheckBoxStore from "./CheckBoxStore";
import InputStore from "./InputStore";
import ListStore from "./listStore";

const checkBoxStore = new CheckBoxStore();
const listStore = new ListStore();

injectStores({
	checkBoxStore,
	InputStore,
	listStore,
});

export { checkBoxStore, InputStore, listStore };
