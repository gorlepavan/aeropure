const steps = [
  "Enter Location",
  "Analyze AQI",
  "Identify Sources",
  "Predict Trends",
  "Generate Report",
];

export default function Workflow() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          How AeroPure Works
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>

              <h3 className="font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}