import { observer } from "mobx-react";
import { Checkbox } from "antd";

import { checkBoxStore } from "../store";

const CheckBox = () => <Checkbox checked={checkBoxStore.checked} onChange={() => checkBoxStore.checkedChange()} />;

export default observer(CheckBox);
