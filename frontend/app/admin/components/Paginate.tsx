import React, { FC, memo } from 'react';
import Pagination from '@mui/material/Pagination';

type Props = {
    count: number;
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

const Paginate: FC<Props> = memo(({ count, page, onChange }) => (
    <div className="flex justify-center mt-7 items-center">
        <Pagination
            count={count}
            page={page}
            onChange={onChange}
            showFirstButton
            showLastButton />
    </div>
));

export default Paginate;