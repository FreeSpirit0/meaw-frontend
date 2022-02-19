import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const DataTable = ({ data }) => {
  const columns = [
    { field: 'LaneNo', headerName: 'Lane No.', width: 100, flex: 1 },
    { field: 'velocity', headerName: 'Velocity [ m/s ]', width: 200, flex: 1 },
    { field: 'time', headerName: 'Time [ hh:mm:ss ]', width: 100, flex: 1 },
  ]
  return (
    <div className="data-table">
      <DataGrid
        rows={data}
        getRowId={(row) => row.time}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        {...data}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
