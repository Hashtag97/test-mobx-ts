import { observer } from "mobx-react";
import { List as AntdList } from "antd";
import { Input as AntdInput } from "antd";
import { Button } from "antd";
import { Col, Row } from "antd";

import { listStore } from "../store";
import { useEffect } from "react";

const List = () => {
	useEffect(() => {
		listStore.loadList();
	}, []);

	if (!listStore.load) {
		return (
			<div>
				<p>List: </p>
				<span>
					<Button
						onClick={() => {
							listStore.refreshList();
						}}
					>
						Refresh
					</Button>
				</span>
				<Row>
					<Col span={4}>
						<Button
							onClick={() => {
								listStore.setListStoreAddListItem();
							}}
						>
							Add
						</Button>
						<Button
							onClick={(e) => {
								listStore.setListStoreAddListItemInInputStore();
							}}
						>
							Add In InputStore
						</Button>
					</Col>
					<Col span={20}>
						<AntdInput
							value={listStore.inputValue}
							onChange={({ target }) => {
								listStore.inputValueChange(target.value);
							}}
						/>
					</Col>
				</Row>
				<AntdList
					bordered
					dataSource={listStore.list}
					renderItem={({ id, name }) => (
						<AntdList.Item key={id}>
							<p>{name} </p>
							<span>
								<Button
									onClick={() => {
										listStore.removeListItem(id);
									}}
								>
									Remove
								</Button>
							</span>
						</AntdList.Item>
					)}
				></AntdList>
			</div>
		);
	}

	return (
		<>
			<p>List: </p>
			<Button loading={true}>Refresh</Button>
		</>
	);
};

export default observer(List);
