import Chart from "react-apexcharts";

export default function PollutionSources() {
  const options = {
    labels: ["Traffic", "Industries", "Dust", "Others"],
    legend: {
      position: "bottom",
    },
  };

  const series = [42, 28, 20, 10];

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        Pollution Sources
      </h2>

      <Chart
        options={options}
        series={series}
        type="pie"
        height={350}
      />
    </div>
  );
}