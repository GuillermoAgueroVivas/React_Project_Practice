import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

// Data
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* This hearder is one of the componets that was created in the components folder. It simply creates two 'p' tags with different classNames and uses the title and Category Provided. The good thing about doing things this was is that the 'Header' Component can be used whenever needed. */}
      <Header category="Page" title="Orders" />
      {/* Creating Grid. This right below in the 'dataSource' field is the most important since this is where the data comes from. */}
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        // These two are nice additions
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {/* This iterates through the 'ordersGrid' using 'map' to expect a value for 'item' and 'index' coming from an arrow function. 
          NOTE: "..." is used to 'spead the data'. Creates all the headers in the table and organizes the data coming in from the 'ordersData' below them */}
          {ordersGrid.map(( item, index ) => (
            <ColumnDirective key={index} { ...item } />
          ))}
        </ColumnsDirective>
        {/* This Inject right here allows for the Paging to actually work by adding the features mentioned below which are coming from Syncfusion. */}
        <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]}/>

      </GridComponent>
    </div>
  )
}

export default Orders