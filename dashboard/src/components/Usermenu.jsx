import react from "react";

function Usermenu({logout}){
    return (
        <div className="Usermenu">
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Usermenu;