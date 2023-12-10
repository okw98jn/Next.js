import { CircularProgress } from '@mui/material';
import { memo, FC } from 'react'

const Loading: FC = memo(() => (
    <div className='flex justify-center'>
        <CircularProgress color='inherit' />
    </div>
));

Loading.displayName = 'Loading'

export default Loading