import CitizenLayout from "../layouts/CitizenLayout"
import StatCard from "../components/StatCard"
import QuickActionCard from "../components/QuickActionCard"
import ComplaintCard from "../components/ComplaintCard"

function CitizenDashboard() {
  const complaints = [
    {
      id: "CIV-001",
      title: "Pothole on Main Road",
      category: "Road Damage",
      status: "In Progress",
      location: "Main Road",
      date: "Aug 28, 2026",
      priority: "High",
    },
    {
      id: "CIV-002",
      title: "Broken Streetlight",
      category: "Streetlight",
      status: "Resolved",
      location: "Park Avenue",
      date: "Aug 25, 2026",
      priority: "Medium",
    },
    {
      id: "CIV-003",
      title: "Garbage Overflow",
      category: "Waste Management",
      status: "Pending",
      location: "Green Street",
      date: "Aug 27, 2026",
      priority: "High",
    },
  ]

  return (
    <CitizenLayout>
      <div>
        {/* Dashboard Header */}
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Citizen Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Here's what's happening with your civic complaints.
        </p>

        {/* Statistics */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Complaints"
            value="12"
            description="All complaints you've reported"
          />

          <StatCard
            title="In Progress"
            value="4"
            description="Currently being worked on"
          />

          <StatCard
            title="Resolved"
            value="6"
            description="Successfully resolved"
          />

          <StatCard
            title="Pending"
            value="2"
            description="Awaiting verification"
          />
        </div>

        {/* Quick Actions */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Quick Actions
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <QuickActionCard
              icon="+"
              title="Report an Issue"
              description="Submit a new civic complaint in your area."
              to="/complaints/new"
            />

            <QuickActionCard
              icon="📍"
              title="View Nearby Issues"
              description="See reported civic issues around your location."
              to="/complaints/nearby"
            />
          </div>
        </div>

        {/* Recent Complaints */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Recent Complaints
          </h2>

          <div className="mt-4">
            {complaints.length > 0 ? (
              <div className="space-y-4">
                {complaints.map((complaint) => (
                  <ComplaintCard
                    key={complaint.id}
                    id={complaint.id}
                    title={complaint.title}
                    category={complaint.category}
                    status={complaint.status}
                    location={complaint.location}
                    date={complaint.date}
                    priority={complaint.priority}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  No complaints yet
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  You haven't reported any civic issues yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </CitizenLayout>
  )
}

export default CitizenDashboard

