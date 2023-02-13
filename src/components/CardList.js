import React from 'react';
import Card from './Card'

const CardList = ({ members }) => {
    return(
        <div>
            {members.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={members[i].id} 
                name={members[i].name} 
                email={members[i].email} 
                username={members[i].username}
            />
            )
    })}
        </div>
    )
}


export default CardList;
