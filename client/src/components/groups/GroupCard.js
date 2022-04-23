import React from "react";



function GroupCard({group}){

    return (
        <div>
            <p>Group Name: {group.name}</p>
            <p>Location: {group.location}</p>
        </div>
    )
}

export default GroupCard