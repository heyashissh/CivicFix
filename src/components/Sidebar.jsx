function Sidebar(){
    return (
        <aside className="w-64 border-r bg-white">
            <div className="p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Menu
                </p>

                <nav className="space-y-1">
                    <a
                     href="#"
                     className="block rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900"
                     >
                        Dashboard
                     </a>

                     <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
                      >
                        Map
                      </a>
                      <a
                       href="#"
                       className="black rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
                       >
                        Notifications
                       </a>
                      <a
                       href="#"
                       className="block rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
                       >
                        Profile
                       </a>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar