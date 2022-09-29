import { observer } from "mobx-react";
import { Input as AntdInput } from "antd";

import { InputStore } from "../store";

const CheckBox = () => <AntdInput value={InputStore.value} onChange={({ target }) => InputStore.valueChange(target.value)} />;

export default observer(CheckBox);
