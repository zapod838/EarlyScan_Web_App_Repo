import React from 'react';
import { ResponsiveStream } from '@nivo/stream';
import './GraphStyles.css';

const StreamGraph = ({ data }) => {
  // Transform the data into the format required by ResponsiveStream
  const chartData = data.map(d => ({
    week: d.week,
    Total: d.total,
    Normal: d.normal,
    Cancer: d.cancer,
  }));

  const CustomTooltip = ({ layer }) => {
    if (!layer) {
      return null;
    }

    const { id, data: layerData } = layer;

    const colors = {
      Total: '#f47560',
      Normal: '#61cdbb',
      Cancer: '#e8c1a0',
    };

    return (
      <div
        style={{
          background: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        <strong style={{ color: colors[id] }}>{id}</strong>
        <br />
        Week: {layerData.x}
        <br />
        Count: {layerData.y}
      </div>
    );
  };

  return (
    <div className="graph-container">
      <ResponsiveStream
        data={chartData}
        keys={['Total', 'Normal', 'Cancer']}
        margin={{ top: 60, right: 20, bottom: 50, left: 50 }} // Adjusted bottom margin for better fit
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Week',
          legendPosition: 'middle',
          legendOffset: 36,
          legendText: {
            fontSize: '16px',
            fontWeight: 'bold',
          },
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          legendPosition: 'middle',
          legendOffset: -40,
          legendText: {
            fontSize: '14px',
            fontWeight: 'bold',
            fill: '#333',
          },
        }}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.85}
        borderColor={{ theme: 'background' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: '#4eb1a8', // Green background color with transparency
            color: '#61ded3',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: 'totalLines',
            type: 'patternLines',
            background: 'inherit',
            color: '#f47560', // Red color for the lines
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'Normal',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'Cancer',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'Total',
            },
            id: 'totalLines',
          },
        ]}
        legends={[
          {
            anchor: 'top-left',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: -50,
            itemsSpacing: 20,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            className: 'custom-legend',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
            textStyle: {
              fontWeight: 'bold', // Make legend text bold
            },
          },
        ]}
        className="area-bump-graph"
        tooltip={({ layer }) => <CustomTooltip layer={layer} />}
      />
    </div>
  );
};

export default StreamGraph;
