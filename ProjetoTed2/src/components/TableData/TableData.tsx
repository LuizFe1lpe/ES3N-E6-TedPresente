import MaterialTable, { MaterialTableProps } from "material-table";

export default function TableData(props: MaterialTableProps<any>) {
	const {
		data,
		title,
		columns,
		actions,
		options,
		onSelectionChange,
		onRowClick,
	} = props;

	return (
		<MaterialTable
			data={data}
			columns={columns}
			title={title || ""}
			actions={actions}
			options={{
				...options,
				exportButton: true,
				sorting: true,
				pageSizeOptions: [5, 10, 15],
				pageSize: options?.pageSize ? options.pageSize : 10,
				actionsColumnIndex: -1,
			}}
			localization={{
				body: {
					emptyDataSourceMessage: "Carregando Possíveis Registros...",
				},
				header: {
					actions: "",
				},
				pagination: {
					labelRowsSelect: "Linhas",
					labelDisplayedRows: "{count} de {from}-{to}",
					firstTooltip: "Primeira Página",
					previousTooltip: "Página Anterior",
					nextTooltip: "Próxima Página",
					lastTooltip: "Última Página",
				},
				toolbar: {
					exportTitle: "Exportar",
					exportAriaLabel: "Exportar",
					exportCSVName: "Exportar Excel",
					exportPDFName: "Exportar PDF",
					nRowsSelected: "{0} Linhas(s) Selecionadas",
				},
			}}
			style={{
				boxShadow: "none",
				width: "100%",
			}}
			onRowClick={onRowClick}
			onSelectionChange={onSelectionChange}
		/>
	);
}
