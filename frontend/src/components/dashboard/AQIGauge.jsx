import Chart from "react-apexcharts";

export default function AQIGauge() {
  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%",
        },
        dataLabels: {
          name: {
            fontSize: "18px",
          },
          value: {
            fontSize: "36px",
            fontWeight: "bold",
          },
        },
      },
    },
    labels: ["AQI"],
    colors: ["#22c55e"],
  };

  const series = [74];

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        Live AQI Gauge
      </h2>

      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={350}
      />
    </div>
  );
}