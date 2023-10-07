import { Table, StringColumn, ReferenceArrayColumn, Record, withRecordColumns, BooleanColumn, Columns } from '@proteinjs/db';

export interface Example extends Record {
	name: string;
	children: Promise<Example[]>;
	isRoot: boolean;
}

export const exampleTableName = 'example';
export const ExampleTable: Table<Example> = {
	name: exampleTableName,
	columns:  withRecordColumns<Example>({
		name: new StringColumn('name'),
		children: new ReferenceArrayColumn('children', exampleTableName),
		isRoot: new BooleanColumn('is_root'),
	})
};
