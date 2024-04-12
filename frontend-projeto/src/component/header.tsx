import nlwIcon from '../assets/nlw-united-icon.svg'
import {NavLink} from "./nav-link.tsx";
export function Header (){
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwIcon} alt="Logo NLWs" />
            <nav className="flex gap-5">
               <NavLink href="/eventos" children="Evento" />
               <NavLink href="/participantes" children="Participantes" />
            </nav>

        </div>
    )
}