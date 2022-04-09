

export type btnTypes = {
	title: string;
	onPress: () => void;
	enabled?: boolean;
}

export type inputTypes = {
	value: string;
	onChangeText: (txt : string) => void;
	placeholder: string;
	testID?: string;
}