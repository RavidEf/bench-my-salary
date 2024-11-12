import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';
import Chart, { CategoryScale } from 'chart.js/auto';

export default function BoxPlotGraph() {
  Chart.register(CategoryScale);

  return (
    <section className="bar-chart-section">
      <div className="bar-chart">
        <BoxPlotChart
      </div>
    </section>
  );
}
