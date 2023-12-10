import { memo, FC } from 'react'

type DataItemProps = {
    label: string;
    text: string;
};

const DataItem: FC<DataItemProps> = memo(({ label, text }) => (
    <div className='space-y-1 border-b pb-2'>
        <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>
        <p>{text}</p>
    </div>
));

DataItem.displayName = 'DataItem'

export default DataItem