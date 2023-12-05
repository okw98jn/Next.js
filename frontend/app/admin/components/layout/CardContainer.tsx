import React, { FC, ReactNode, memo } from "react";

type Props = {
    children: ReactNode
}

const CardContainer: FC<Props> = memo(({ children }) => {
    return (
        <div className='p-10 h-full mx-auto w-2/4'>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden pb-7">
                <div className="px-12 py-4 mb-8">
                    <div className="flex items-center flex-col pt-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
})

CardContainer.displayName = 'CardContainer'

export default CardContainer