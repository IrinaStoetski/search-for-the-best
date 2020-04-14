import React from 'react';
import EmptyState from '../EmptyState';

const CardList = ({items}) => {
    console.log(items)
    return ( items && items.length ? (
        <div className="card">
          {items && items.map(item =>(
              <div className="card">
                  <img src={item.owner.avatar_url} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
              </div>
          ))}
        </div>)
        : <EmptyState />
        )
}

export default CardList