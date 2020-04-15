// @flow
import React from 'react';
// Components
import EmptyState from '../EmptyState';
import Card from '../Card';
// Styles
import './style.scss';

type Props = {
  items: Array<Object>,
  itemsCount: number,
}
const CardList = ({
  items,
  itemsCount,
}: Props) => (
  <>
    {items && items.length !== 0 && (
    <div className="card-list">
      {items && items.map((item) => (
        <Card
          avatar={item.owner.avatar_url}
          name={item.name}
          description={item.description}
          link={item.html_url}
        />
      ))}
    </div>
    )}
    {!items && !itemsCount && <EmptyState title="Let's start! Type something!" /> }
    {itemsCount === 0 && <EmptyState title="Nothing was founded :( Try another query" />}
  </>
);

export default CardList;
