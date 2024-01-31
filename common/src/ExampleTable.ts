import { Table, StringColumn, ReferenceArrayColumn, Record, withRecordColumns, BooleanColumn, ReferenceArray } from '@proteinjs/db';

export interface Example extends Record {
	name: string;
	children?: ReferenceArray<Example>;
	isRoot?: boolean;
}

export class ExampleTable extends Table<Example> {
	public name = 'example';
	public columns = withRecordColumns<Example>({
		name: new StringColumn('name'),
		children: new ReferenceArrayColumn('children', this.name, true),
		isRoot: new BooleanColumn('is_root'),
	})
};
