export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-3xl font-bold text-blue-600">
              AEROPURE
            </h2>

            <p className="mt-4 text-gray-600">
              Clean Air Intelligence Platform
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Platform
            </h3>

            <p>Dashboard</p>
            <p>Maps</p>
            <p>Reports</p>
            <p>Forecasts</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Contact
            </h3>

            <p>support@aeropure.com</p>
            <p>India</p>
          </div>

        </div>

        <div className="border-t mt-8 pt-6 text-center text-gray-500">
          © 2026 AeroPure. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}