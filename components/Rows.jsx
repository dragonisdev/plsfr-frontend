import React from 'react'
import styled from 'styled-components'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from 'react'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
`;

export default function Rows() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(10)

  const columns = [
    {
      name: "User ID",
      selector: (row) => row.userId,
    },

    {
      name: "Title",
      selector: (row) => row.title,
    },

    {
      name: "Completed",
      selector: (row) => row.completed ? "Yes": "No",
    },

  ]

  useEffect(() => {
    fetchTableData()
    
  }, [])



  async function fetchTableData() {
    setLoading(true)
    
    const URL = "https://jsonplaceholder.typicode.com/todos"
    const response = await fetch(URL)

    const users = await response.json()
    setData(users)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    
    
  }
  

  return (
    <Container>
       <DataTable
        title="Data"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
       />
    </Container>
  )
}
