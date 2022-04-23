import React from 'react'
import {useSelector} from 'react-redux'
import GroupCard from './GroupCard'

function Groups(){
    
    const groups = useSelector(state => state.groups)
    console.log(groups)

    return (
        <div>
            {groups.map((group)=> {
                return <GroupCard key={group.id} group={group}/>
                })
            }   
        </div>
    )
}

export default Groups