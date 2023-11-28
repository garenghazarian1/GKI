import ProductSidebar from "../dashboardComponents/DashboardSideBar";

export default function Dashboard() {
  return (
    <div className="bg-red-900 h-screen p-8 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold text-gray-200 mb-4">Welcome to Your Car Rental Dashboard!</h1>
      <p className="text-gray-300 mb-4"> Ready to hit the road? Your journey starts here! Explore our diverse range of vehicles and find the perfect ride for your next adventure. Whether you're planning a business trip, a family vacation, or just a weekend getaway, we've got you covered. Easy booking, transparent policies, and top-notch customer service await you. Let's get you behind the wheel – your perfect rental is just a few clicks away.</p>
      <div className="flex justify-center items-center w-full">
        <ProductSidebar />
      </div>
    </div>
  )
}
