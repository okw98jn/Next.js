import React, { FC, memo } from 'react'

type Props = {
    id: number;
}

const EditForm: FC<Props> = memo(({ id }) => {
    return (
        <span>
            {id}
        </span>
    )
})

EditForm.displayName = 'EditForm'

export default EditForm