import { FileEdit, Undo2 } from 'lucide-react';
import { memo, FC } from 'react'

type ToggleLinkProps = {
    handleOnClick: () => void;
    isEditFormOpen: boolean | undefined;
};

const ToggleLink: FC<ToggleLinkProps> = memo(({ handleOnClick, isEditFormOpen }) => (
    <div
        onClick={handleOnClick}
        className="w-full flex justify-end hover:text-blue-800 transition duration-300 cursor-pointer"
    >
        <p>
            {isEditFormOpen ? <Undo2 className="mr-2 h-5 w-5" /> : <FileEdit className="mr-2 h-5 w-5" />}
        </p>
    </div>
));

ToggleLink.displayName = 'ToggleLink'

export default ToggleLink