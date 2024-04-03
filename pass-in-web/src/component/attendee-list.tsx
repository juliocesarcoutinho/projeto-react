import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search} from 'lucide-react'
import {IconButton} from "./icon-button.tsx";
import {TableHeader} from "./table/table-header.tsx";
import {Tabela} from "./table/table.tsx";
import {TableCell} from "./table/table-cell.tsx";

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300"/>
                    <input
                        className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
                        placeholder="Buscar participante..."
                    />
                </div>
            </div>

            <Tabela>
                <thead>
                <tr className="border-b border-white/10">
                    <TableHeader style={{width: 48}} className="py3- px-4 text-sm font-semibold text-left">
                        <input type="checkbox"
                               className="size-4 bg-black/10 rounded border-white/10 accent-orange-400"/>
                    </TableHeader>
                    <TableHeader>Código</TableHeader>
                    <TableHeader>Participante</TableHeader>
                    <TableHeader>Data de Inscrição</TableHeader>
                    <TableHeader>Data de check-in</TableHeader>
                    <TableHeader style={{width: 64}}
                                 className="py-3 px-4 text-sm font-semibold text-left"></TableHeader>
                </tr>
                </thead>
                <tbody>
                {Array.from({length: 8}).map((_, index) => {
                    return (
                        <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                            <TableCell>
                                <input type="checkbox"
                                       className="size-4 bg-black/10 rounded border-white/10 accent-orange-400"/>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-semibold">Julio Cesar Coutinho</span>
                                    <span>juliocesar.coutinho@outlook.com</span>
                                </div>
                            </TableCell>
                            <TableCell>7 dias atrás</TableCell>
                            <TableCell>3 dias atrás</TableCell>
                            <TableCell className="py-3 px-4 text-sm text-zinc-300 text-right">
                                <IconButton transparent>
                                    <MoreHorizontal className="size-4"/>
                                </IconButton>
                            </TableCell>

                        </tr>
                    )
                })}

                </tbody>
                <tfoot>
                <tr>
                    <TableCell colSpan={3}>
                        Mostrando 10 de 228 Itens
                    </TableCell>
                    <TableCell className="text-right" colSpan={3}>
                        <div className="inline-flex items-center gap-8">
                            <span>Página 1 de 23</span>
                            <div className="flex gap-1.5">
                                <IconButton>
                                    <ChevronsLeft className="size-4"/>
                                </IconButton>
                                <IconButton>
                                    <ChevronLeft className="size-4"/>
                                </IconButton>
                                <IconButton>
                                    <ChevronRight className="size-4"/>
                                </IconButton>
                                <IconButton>
                                    <ChevronsRight className="size-4"/>
                                </IconButton>

                            </div>
                        </div>
                    </TableCell>
                </tr>
                </tfoot>
            </Tabela>
        </div>
    )
}