import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

// This is the creation of the stacked graph used in the Ecommerce page in the website. In this case, when using the 'Inject' keyword, we pass on some services which pretty much refer to what sort of stuff we want our stacked graph (ex. Legend, Categories, etc.)

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      // THIS ID HERE IS NOT WORKING AT THE MOMENT MAKING THE PAGE CRASH WHEN YOU HOVER OVER THE GRAPH
      id='charts'
      // This is how to show the data
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={ { border: { width: 0 }}}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white"}}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map(( item, index ) => 
        <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked