import React from 'react';
import {
  View, Text,
  AppRegistry,
  StyleSheet,
  processColor
} from 'react-native';
import strings from '../../localization/Localized';
import { BarChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import * as d3 from 'd3';
import { BubbleChart } from 'react-native-charts-wrapper';
import update from 'immutability-helper';
import _ from 'lodash';
import Svg, {
  Circle,
  G,
  Text as SVGText,
} from 'react-native-svg';

export class TestBubble extends React.Component {

  constructor() {
    super();

    this.state = {

    };
  }

  render() {

    let data = [
      {
        name: "analytics",
        title: "flare/analytics",
        group: "analytics",
        value: 0,
        color: '#42826C'
      },
      {
        name: "lorem",
        title: "flare/analytics",
        group: "analytics",
        value: 10,
        color: '#42D2C6'
      },
      {
        name: "standard",
        title: "flare/analytics",
        group: "analytics",
        value: 120,
        color: '#8AD242'
      },
      {
        name: "ipsum",
        title: "flare/analytics",
        group: "analytics",
        value: 70,
        color: '#F88888'
      },
      {
        name: "analytics",
        title: "flare/analytics",
        group: "analytics",
        value: 20,
        color: '#666699'
      },
      {
        name: "wow",
        title: "flare/analytics",
        group: "analytics",
        value: 10,
        color: '#CC5CA2'
      },
      {
        name: "great",
        title: "flare/analytics",
        group: "analytics",
        value: 56,
        color: '#609EF1'
      },
      {
        name: "analytics",
        title: "flare/analytics",
        group: "analytics",
        value: 4,
        color: '#FFBC67'
      }
    ]

    const {
      overflow,
      graph,
      height,
      width,
      padding,
      showLegend,
      legendPercentage,
    } = this.props;

    let pack = data => d3.pack()
      .size([width - 2, height - 2])
      .padding(3)
      (d3.hierarchy({ children: data })
        .sum(d => d.value))

    const root = pack(data);

    let fontSizeGenerator = (value) => {
      let size = 0
      if (value < 10) {
        size = 2
      } else if(value >= 10 && value < 50) {
        size = 6
      } else {
        size = 15
      }
      return size
    }

    let leaves = []
    for (let leaf of root.leaves()) {
      leaves.push(
        <G transform={`translate(${leaf.x + 1},${leaf.y + 1})`}>
          <Circle
            r={leaf.r}
            fill={leaf.data.color}
          />
          <SVGText
            fill="#FFFFFF"
            // stroke="purple"
            fontSize={fontSizeGenerator(leaf.data.value)}
            // fontWeight="bold"
            x="0"
            y={leaf.data.value * 0.1}
            textAnchor="middle" >{leaf.data.name}</SVGText>
        </G>
      )
    }

    console.log('leaves are', leaves)

    return (
      <View style={styles.container}>
        <Text style={styles.desctitle}>{strings.most_common_tattoo}</Text>
        <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
          <Svg style={{ overflow: overflow ? 'visible' : 'hidden' }} width={400} height={300}>
            {leaves}
          </Svg>
        </View>
      </View>
    )
  }

}

const styles = {
  container: {
    flex: 1,
  },
  title: {
    padding: 10, fontSize: 16, color: '#2F2F34', fontFamily: 'Montserrat-Regular'
  },
  descriptionview: {
    flexDirection: 'row', alignItems: 'center'
  },
  desctitle: {
    padding: 10, fontSize: 13, color: '#74787C', fontFamily: 'Montserrat-SemiBold'
  },
  weektext: {
    color: '#45454E', fontSize: 13, fontFamily: 'Montserrat-Light', paddingRight: 15
  },
  dotview: {
    height: 13, width: 13, borderRadius: 7.5, marginRight: 5
  },
  xaxistext: {
    fontSize: 11, color: '#74787C', fontFamily: 'Montserrat-Regular'
  },
  xaxisview: {
    flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  chart: {
    flex: 1
  }
}