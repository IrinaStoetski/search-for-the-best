import React from 'react';
//Components
import EmptyState from '../EmptyState';
import Card from '../Card';
//Styles
import './style.scss';

const CardList = ({items}) => {
    console.log(items)
    return ( items && items.length ? (
        <div className="card-list">
          {items && items.map(item =>(
              <Card 
                avatar={item.owner.avatar_url}
                name={item.name}
                description={item.description}
                link={item.html_url}
              />
          ))}
        </div>)
        : <EmptyState />
        )
}

export default CardList