# React-Native-Bubble-Chart
### Uses d3 and react-native-svg

A simple bubble chart generated with d3 and react-native-svg. Motivation from https://github.com/weknowinc/react-bubble-chart-d3
Supports Android:alien: and iOS:iphone:


## How to install
> npm i --save rn-bubble-chart

> npm i --save d3

> npm i --save react-native-svg

> cd ios

> pod install


## How to use
```
import BubbleChart from 'rn-bubble-chart';

class ChartView extends React.Component {

  const data = [
    { name: "King Douchebag", color: "yellow", value: 90 },
    { name: "Princess Kenny", color: "pink", value: 60 },
    { name: "Heidi Turner", color: "red", value: 30 },
    { name: "Eric Cartman", color: "purple", value: 80 },
    { name: "Bart", color: "green", value: 40 }
  ]
  
  render() {
    return(
      <BubbleChart
        width={400}
        height={300}
        data={data}
      />
    )
  }
}
```

## Properties
| name  | description | example
| ------------- | ------------- | ------------- |
| width  | width of the chart container  | width={400}  |
| height  | height of the chart container  | height={300}  |
| data | data for the chart | data={[{name: ..., color: ..., value: ... }]} |
| textProps | properties for SVG Text component rendered in the bubble | textProps={{fontFamily: ... , fill: ...}} |
| circleProps | properties for the SVG Circle component (bubble) | circleProps={{ ... }} |
