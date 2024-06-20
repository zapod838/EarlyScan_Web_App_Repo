import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import './PieChart.css'; // Import the CSS file

const DiagnosisPieChart = ({ data }) => (
  <div className="pie-chart-container">
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]]
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]]
      }}
      tooltip={({ datum }) => (
        <div
          style={{
            background: 'white',
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '3px',
          }}
        >
          <strong>{datum.label}</strong>
          <br />
          {datum.value} cases ({datum.data.percentage}%)
        </div>
      )}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.2)',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.1)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        },
        {
          id: 'solid',
          type: 'patternSolid',
          background: 'inherit',
          color: 'inherit',
        }
      ]}
      fill={[
        {
          match: {
            id: '20-40'
          },
          id: 'dots'
        },
        {
          match: {
            id: '40-50'
          },
          id: 'lines'
        },
        {
          match: {
            id: '50-60'
          },
          id: 'dots'
        },
        {
          match: {
            id: '60-70'
          },
          id: 'lines'
        },
        {
          match: {
            id: '70+'
          },
          id: 'solid'
        }
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  </div>
);

export default DiagnosisPieChart;
