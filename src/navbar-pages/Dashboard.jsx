import ReservedCars from "./ReservedCars";

export default function Dashboard() {
  return (
    <div className="bg-red-900 h-screen p-8 flex flex-col justify-center align-middle text-center">
      <h1 className="text-3xl font-bold text-gray-200 mb-4">Dashboard</h1>
      <p className="text-gray-300">
        Welcome to the Dashboard. Here you can manage your settings and data.
      </p>
      <ReservedCars />
    </div>
  );
}
