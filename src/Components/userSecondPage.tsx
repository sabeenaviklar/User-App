import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';

// Create a TypeScript model/interface for the data
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const SecondPage: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Define columns for the data grid
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
    { field: 'userId', headerName: 'User ID', width: 120 },
  ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        // pageSize={10}
        // rowsPerPageOptions={[10]}
      />

<Button href='/thirdPage' type="submit" variant="contained" color="secondary">
          Next
        </Button>
      
    </div>
    
  );
};

export default SecondPage;
