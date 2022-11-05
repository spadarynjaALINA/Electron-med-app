import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
    {id: 'date', label: 'Дата',
        flex: 1, align: 'center',},
    {id: 'сardNumber', label: '№ карты вызова',
        flex: 1, align: 'center',},
    {
        id: 'doctorName',
        label: 'Ф.И.О. врача(фельдшера)',
        // minWidth: 170,
        flex: 4,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'diagnosis',
        label: 'Диагноз',
        // minWidth: 170,
        flex: 4,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'сoefficient',
        label: 'Коэфициент',
        // minWidth: 170,
        flex: 1,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'notes',
        label: 'Примечания',
        // minWidth: 170,
        flex: 5,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];

function createData(date, сardNumber, doctorName, diagnosis, сoefficient, notes) {
    return {date, сardNumber, doctorName, diagnosis, сoefficient, notes};
}

const rows = [
    createData('11.10.1983', '17890', 'Длиннофамильнов Длинноимен Длинноотчествович', 'Бригада СНМП: I20.0 Стенокардия нестабильная (ИБС.Прогрессирующая стенокардия от 03.11.22.); СНМП (сопутств.): I25.2 Постинфарктный кардиосклероз (ПИКС(2010)); СНМП (сопутств.): I69.4 Последствия ОНМК (Последствия перенесенного ОНМК.); СНМП (сопутств.): F10.0 Интоксикация острая, вызванная употреблением алкоголя (Алкогольная интоксикация л.ст.);\n', 0.5, 'Замечания такие-то такие-то, снижение коэффициента, то се, короче вообще лох'),
    createData('China', 'CN', 'Тут Ф И О', 1403500365, 9596961, 'Тут будут примечания'),
    createData('Italy', 'IT', 'Тут Ф И О', 60483973, 301340, 'Тут будут примечания'),
    createData('United States', 'US', 'Тут Ф И О', 327167434, 9833520, 'Тут будут примечания'),
    createData('Canada', 'CA', 'Тут Фамилия Имя Отчество', 37602103, 9984670, 'Тут будут примечания'),
    createData('Australia', 'AU', 'Тут Ф И О', 25475400, 7692024, 'Тут будут примечания'),
    createData('Germany', 'DE', 'Тут Ф И О', 83019200, 357578, 'Тут будут примечания'),
    createData('Ireland', 'IE', 'Тут Ф И О', 4857000, 70273, 'Тут будут примечания'),
    createData('Mexico', 'MX', 'Тут Ф И О', 126577691, 1972550, 'Тут будут примечания'),
    createData('Japan', 'JP', 'Тут Ф И О', 126317000, 377973, 'Тут будут примечания'),
    createData('France', 'FR', 'Тут Ф И О', 67022000, 640679, 'Тут будут примечания'),
    createData('United Kingdom', 'GB', 'Тут Ф И О', 67545757, 242495, 'Тут будут примечания'),
    createData('Russia', 'RU', 'Тут Ф И О', 146793744, 17098246, 'Тут будут примечания'),
    createData('Nigeria', 'NG', 'Тут Ф И О', 200962417, 923768, 'Тут будут примечания'),
    createData('Brazil', 'BR', 'Тут Ф И О', 210147125, 8515767, 'Тут будут примечания'),
];

const StickyHeadTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 760}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow sx={{
                            "& th": {
                                color: "#fff",
                                backgroundColor: "gray",
                                textTransform: 'uppercase',
                                padding: '5px'
                            }
                        }}>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage={"Количество карт на странице"}
            />
        </Paper>
    );
}

export default StickyHeadTable