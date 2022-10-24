import { Dispatch } from "react";
export interface ActionType {
	type: string;
	field?: string | Array<string>;
	payload: any;
}
export type GlobalStateType = { username: string; password: string };
export type GlobalContextType = {
	userState: GlobalStateType;
	dispatch: Dispatch<ActionType>;
};

export type ItemType = {
	key: string;
	type: string;
	title: string;
	description: string;
	alt: string;
	src: string;
};
