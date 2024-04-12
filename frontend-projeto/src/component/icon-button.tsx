import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function IconButton({transparent, ...props}: IconButtonProps) {
    return (
        <button
            {...props}
            // className={transparent
            //     ? "bg-black/20 border border-white/10 rounded-md p-1.5"
            //     : "bg-white/10 border border-white/10 rounded-md p-1.5"
            // }
            className={twMerge(
                'border border-white/10 rounded-md p-1.5',
                transparent ? 'bg-black/20' : 'bg-white/10',
                props.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'

            )}

        />
    )
}