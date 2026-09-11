import Chart from "react-apexcharts";

export default function AQIChart() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ],
    },
    colors: ["#22c55e"],
    grid: {
      borderColor: "#e5e7eb",
    },
  };

  const series = [
    {
      name: "AQI",
      data: [65, 72, 68, 80, 74, 69, 77],
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        AQI Trend Analysis
      </h2>

      <Chart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
}