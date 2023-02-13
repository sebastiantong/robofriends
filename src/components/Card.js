import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className=" tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="members" src={`https://robohash.org/${id}?200x200`}/>
            {/* <img alt="members" src={require(`${photolink}`)} height='350px' width='300px'/> */}
            <div>
                <h2 className=''>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
