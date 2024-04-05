import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search} from 'lucide-react'
import {IconButton} from "./icon-button.tsx";
import {TableHeader} from "./table/table-header.tsx";
import {Tabela} from "./table/table.tsx";
import {TableCell} from "./table/table-cell.tsx";
import {TableRow} from "./table/table-row.tsx";
import {useState} from "react";
import {attendees} from "../data/attendees.ts";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/pt-br'


dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {

    const [valorInput, setInput] = useState('')
    const [page, setPage] = useState(1)

    const totalPage = Math.ceil(attendees.length / 10)

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value)
    }

    function goToNextPage() {
        setPage(page + 1)
    }

    function goToPreviwPage() {
        setPage(page - 1)
    }
    function goToFirstPage() {
        setPage(1)
    }

    function gotoLastPage() {
        setPage(totalPage)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300"/>
                    <input onChange={onInputChange}
                        className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
                        placeholder="Buscar participante..."
                    />
                </div>

                {valorInput}

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
                {attendees.slice((page - 1 ) * 10, page * 10).map((attendee) => {
                    return (
                        <TableRow key={attendee.id}>
                            <TableCell>
                                <input type="checkbox"
                                       className="size-4 bg-black/10 rounded border-white/10 accent-orange-400"/>
                            </TableCell>
                            <TableCell>{attendee.id}</TableCell>
                            <TableCell>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white font-semibold">{attendee.name}</span>
                                    <span>{attendee.email}</span>
                                </div>
                            </TableCell>
                            <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                            <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
                            <TableCell className="py-3 px-4 text-sm text-zinc-300 text-right">
                                <IconButton transparent>
                                    <MoreHorizontal className="size-4"/>
                                </IconButton>
                            </TableCell>

                        </TableRow>
                    )
                })}

                </tbody>
                <tfoot>
                <tr>
                    <TableCell colSpan={3}>
                        Mostrando 10 de {attendees.length}
                    </TableCell>
                    <TableCell className="text-right" colSpan={3}>
                        <div className="inline-flex items-center gap-8">
                            <span>Página {page} de {totalPage}</span>
                            <div className="flex gap-1.5">
                                <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                    <ChevronsLeft className="size-4"/>
                                </IconButton>
                                <IconButton onClick={goToPreviwPage} disabled={page === 1}>
                                    <ChevronLeft className="size-4"/>
                                </IconButton>
                                <IconButton onClick={goToNextPage} disabled={page === totalPage}>
                                    <ChevronRight className="size-4"/>
                                </IconButton>
                                <IconButton onClick={gotoLastPage} disabled={page === totalPage}>
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