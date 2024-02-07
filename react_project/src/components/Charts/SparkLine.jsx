import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';


const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  // This is for some reason not currently working the way it should. It says the 'type' variable in the 'SparklineComponent' is coming in empty.
  
  if (!type) {
    console.log("Fail")
    return null;
  }
  
  // There used to be an issue with this where it was not rendering the graph. The issue was that in the 'dummy.js' file, the 'y' value was defined as 'yval' and the component here is expecting a yName of 'y'

  return (
    
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x'
      yName='y'
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${y}',
        trackLineSettings: {
          visible: true
        }
      }}
    >
      <Inject services={[SparklineTooltip]}/>

    </SparklineComponent>
  )
}

export default SparkLine