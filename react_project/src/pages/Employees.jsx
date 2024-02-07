import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'

// Data
import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

// SAME AS THE ORDERS PAGE

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        // These are nice additions
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {/* This iterates through the 'ordersGrid' using 'map' to expect a value for 'item' and 'index' coming from an arrow function. 
          NOTE: "..." is used to 'spead the data'. Creates all the headers in the table and organizes the data coming in from the 'ordersData' below them */}
          {employeesGrid.map(( item, index ) => (
            <ColumnDirective key={index} { ...item } />
          ))}
        </ColumnsDirective>
        {/* This Inject right here allows for the Paging to actually work by adding the features mentioned below which are coming from Syncfusion. */}
        <Inject services={[ Search, Page, Toolbar ]}/>

      </GridComponent>

    </div>
  )
}

export default Employees