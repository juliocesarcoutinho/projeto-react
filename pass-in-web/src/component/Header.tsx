import nlwIcon from '../assets/nlw-united-icon.svg'
export function Header (){
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwIcon} alt="Logo NLWs" />
            <nav className="flex gap-5">
                <a className="font-medium text-sm text-zinc-300" href="#" >Eventos</a>
                <a className="font-medium text-sm" href="#" >Participantes</a>
            </nav>

        </div>
    )
}