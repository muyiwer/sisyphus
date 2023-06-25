import anychart from "anychart";
import { State } from "../model/state";
import { useSelector } from "react-redux";

const useAnyChart = (container: string) => {
  const state = useSelector((state: any): State => {
    return state.app?.value;
  });
  const table = anychart.data.table();
  table.addData(state.apiResponse);
  const mapping = table.mapAs();
  mapping.addField("open", 1);
  mapping.addField("high", 2);
  mapping.addField("low", 3);
  mapping.addField("close", 4);
  var chart = anychart.stock();
  chart.background().fill("#262932");
  const series = chart.plot(0).candlestick(mapping);

  // set the custom colors for Globex series
  series.risingStroke("#58BD7D");
  series.risingFill("#58BD7D");
  series.fallingStroke("#FF6838");
  series.fallingFill("#FF6838");
  chart.container(container);

  return { chart };
};

export default useAnyChart;
