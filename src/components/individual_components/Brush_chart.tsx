import React, { useRef, useState, useMemo } from "react";
import { scaleTime, scaleLinear } from "@visx/scale";
import { Brush } from "@visx/brush";
import { Bounds } from "@visx/brush/lib/types";
import AreaChart from "./Area_Chart";

const recent_data = [
  { Date: "01-03-2024", value: 30 },
  { Date: "02-03-2024", value: 34 },
  { Date: "03-03-2024", value: 42 },
  { Date: "04-03-2024", value: 41 },
  { Date: "05-03-2024", value: 4 },
  { Date: "06-03-2024", value: 4 },
  { Date: "07-03-2024", value: 4 },
  { Date: "08-03-2024", value: 25 },
  { Date: "09-03-2024", value: 26 },
  { Date: "10-03-2024", value: 32 },
  { Date: "11-03-2024", value: 12 },
  { Date: "12-03-2024", value: 66 },
  { Date: "13-03-2024", value: 12 },
  { Date: "14-03-2024", value: 33 },
  { Date: "15-03-2024", value: 10 },
  { Date: "16-03-2024", value: 10 },
  { Date: "17-03-2024", value: 11 },
  { Date: "18-03-2024", value: 15 },
  { Date: "19-03-2024", value: 2 },
  { Date: "20-03-2024", value: 4 },
];

const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };
const PATTERN_ID = "brush_pattern";
const GRADIENT_ID = "brush_gradient";

const BrushChart = ({ width, height }) => {
  const brushRef = useRef(null);
  const [filteredData, setFilteredData] = useState(recent_data);

  const onBrushChange = (domain) => {
    if (!domain) return;
    const { x0, x1 } = domain;
    const newData = recent_data.filter((d) => {
      const date = new Date(d.Date);
      return date >= x0 && date <= x1;
    });
    setFilteredData(newData);
  };

  const xMax = Math.max(width - brushMargin.left - brushMargin.right, 0);
  const yMax = Math.max(height - brushMargin.top - brushMargin.bottom, 0);

  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [0, xMax],
        domain: [
          new Date(recent_data[0].Date),
          new Date(recent_data[recent_data.length - 1].Date),
        ],
      }),
    [xMax]
  );

  const valueScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        domain: [0, Math.max(...recent_data.map((d) => d.value))],
        nice: true,
      }),
    [yMax]
  );

  const initialBrushPosition = useMemo(
    () => ({
      start: { x: dateScale(new Date(recent_data[5].Date)) },
      end: { x: dateScale(new Date(recent_data[10].Date)) },
    }),
    [dateScale]
  );
  const xScale = scaleTime({
    range: [0, width],
    domain: [new Date(data[0].Date), new Date(data[data.length - 1].Date)],
  });

  const yScale = scaleLinear({
    range: [height, 0],
    domain: [0, Math.max(...data.map((d) => d.value))],
  });

  return (
    <svg width={width} height={height}>
      <AreaChart data={filteredData} width={width} height={height} />
      <linearGradient id={GRADIENT_ID} from="#ffffff" to="#fafafa" />
      <Brush
        xScale={dateScale}
        yScale={valueScale}
        width={xMax}
        height={yMax}
        margin={brushMargin}
        handleSize={8}
        innerRef={brushRef}
        resizeTriggerAreas={["left", "right"]}
        brushDirection="horizontal"
        initialBrushPosition={initialBrushPosition}
        onChange={onBrushChange}
        onClick={() => setFilteredData(recent_data)}
        selectedBoxStyle={{ fill: `url(#${PATTERN_ID})`, stroke: "white" }}
      />
    </svg>
  );
};

export default BrushChart;
