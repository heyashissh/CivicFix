import { useEffect, useState } from "react"

function MyComplaints() {
  const [complaints, setComplaints] = useState([])

  useEffect(() => {
    const savedComplaints =
      JSON.parse(localStorage.getItem("complaints")) || []

    setComplaints(savedComplaints)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          My Complaints
        </h1>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          View and track the complaints you have submitted.
        </p>

        <div className="mt-8">
          {complaints.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
              <h2 className="font-semibold text-slate-800 dark:text-slate-200">
                No complaints yet
              </h2>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Your submitted complaints will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {complaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <h2 className="font-semibold text-slate-900 dark:text-white">
                    {complaint.title}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {complaint.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {complaint.category}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {complaint.priority}
                    </span>

                    <span className="text-slate-500 dark:text-slate-400">
                      {complaint.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyComplaints