import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Toolbar, Edit, Sort, Filter } from '@syncfusion/ej2-react-grids'

// Data
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

// Same as the ORDERS and EMPLOYEES pages.

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        // These are nice additions
        allowPaging
        allowSorting
        // Can Add more things to this toolbar if needed.
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {/* This iterates through the 'ordersGrid' using 'map' to expect a value for 'item' and 'index' coming from an arrow function. 
          NOTE: "..." is used to 'spead the data'. Creates all the headers in the table and organizes the data coming in from the 'ordersData' below them */}
          {customersGrid.map(( item, index ) => (
            <ColumnDirective key={index} { ...item } />
          ))}
        </ColumnsDirective>
        {/* This Inject right here allows for the Paging to actually work by adding the features mentioned below which are coming from Syncfusion. */}
        <Inject services={[ Page, Toolbar, Selection, Edit, Sort, Filter ]}/>

      </GridComponent>

    </div>
  )
}

export default Customers