import {ComponentProps} from "react";

interface NavLinkProps extends ComponentProps<'a'>{
    children: string
}
export function NavLink (props: NavLinkProps){
    return (
        <div className="flex items-center gap-5 py-2">
            <nav className="flex gap-5">
                <a {...props} className="font-medium text-sm">{props.children}</a>
            </nav>

        </div>
    )
}