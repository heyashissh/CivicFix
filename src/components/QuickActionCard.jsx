import { useNavigate } from "react-router-dom"

function QuickActionCard({
  icon,
  title,
  description,
  to,
}) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(to)}
      className="w-full rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xl dark:bg-slate-800">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </button>
  )
}

export default QuickActionCard