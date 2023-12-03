import React, { FC, memo } from 'react'
import { IconContext } from 'react-icons'

type IconProps = {
    icon: React.ReactNode;
    size?: string;
    color?: string;
}

const Icon: FC<IconProps> = memo(({ icon, size = '15px', color = '#000000' }) => {
    return (
        <IconContext.Provider value={{ color: color, size: size }}>
            {icon}
        </IconContext.Provider>
    )
})

Icon.displayName = "Icon"

export default Icon