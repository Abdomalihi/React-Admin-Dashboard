import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable'
import './users.scss'
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/add/Add';



const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 50 
  },
  {
    field: 'img',
    headerName: 'Avatar', 
    width: 100,
    renderCell: (params)=> {
      return <img src={params.row.img || '/noavatar.png'}/>
    }, 
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: true,
    type: 'string',
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    editable: true,
    type: 'string',
  },
  {
    field: 'email',
    headerName: 'Email Adress',
    width: 200,
    type: 'string',
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 100,
    type: 'string',
  },
  {
    field: 'createdAt',
    headerName: 'Creation At',
    width: 100,
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Status',
    width: 100,
    type: 'boolean',
  },
];

export default function Users() {

  const [open, setOpen] = useState(false)

  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add new users</button>
      </div>
      <DataTable slug={'users'} columns={columns} rows={userRows} />
      {open && <Add slug='user' setOpen={setOpen} columns={columns}/>}

    </div>
  )
}
