const Spinner = ()=>{
    return(
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.343A8.003 8.003 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.595zM12 20a8.003 8.003 0 008-8h-4c0 2.21-1.79 4-4 4v4zm6.343-2.93A8.003 8.003 0 0020 12h4c0 3.042-1.135 5.824-3 7.938l-3.657-1.93z"></path>
        </svg>
    )
}

export default Spinner;