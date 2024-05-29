import { Link } from 'react-router-dom'
import './dataTable.scss'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'

type Props = {
  columns: GridColDef[],
  rows: object[],
  slug: string
}


export default function DataTable(props: Props) {

  const handleDelete = (id: number) => {
    //delete
    //axiox.delete('apiPath/${slug}/id')
    console.log(`${id} has been deleted`)
  }

  const actionColumn: GridColDef = {
    field: 'actions',
    headerName: 'Actions', 
    width: 200,
    renderCell: (params)=> {
      return <div className="actions">
        <Link to={`/${props.slug}/${params.row.id}`} className='view'>
          <img src="/view.svg" alt="View" />
        </Link>
        <div className="delete">
          <img src="/delete.svg" alt="Delete" onClick={()=>handleDelete(params.row.id)} />
        </div>
      </div>
    }, 
  };
  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar: GridToolbar}}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}
