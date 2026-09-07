function Navbar(){
    return(
        <header className="h-16 border-b bg-white">
            <div className="flex h-full items-center justify-between px-6">
                <h1 className="text-xl font-bold text-slate-900">
                    CivicFix
                </h1>

                <div className="flex items-center gap-4">
                    <button className="text-slate-600">
                        🔔
                    </button>
                    
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 itens-center justify-center rounded-full bg-slate-200">A 

                        </div>

                        <span className="text-sm font-medium text-slate-700">
                            Ashish 
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar