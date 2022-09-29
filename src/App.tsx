import "./App.css";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import List from "./components/list";

function App() {
	return (
		<div className="App">
			<div>
				Test 1 CheckBox <CheckBox />
			</div>
			<div>
				Test 2 Input <Input />
			</div>
			<div>
				Test 3 list api <List />
			</div>
		</div>
	);
}

export default App;
