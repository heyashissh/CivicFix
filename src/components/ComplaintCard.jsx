function ComplaintCard({
  id,
  title,
  category,
  status,
  location,
  date,
  priority,
}) {
  let statusStyle =
    "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"

  if (status === "Resolved") {
    statusStyle =
      "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
  } else if (status === "In Progress") {
    statusStyle =
      "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
  } else if (status === "Pending") {
    statusStyle =
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {category}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle}`}
        >
          {status}
        </span>
      </div>

      <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            📍 {location}
          </p>

          <p className="text-xs text-slate-400 dark:text-slate-500">
            #{id}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            📅 Reported {date}
          </p>

          <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
            Priority: {priority}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComplaintCard