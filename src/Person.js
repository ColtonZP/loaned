import React from 'react';
import { inject, observer } from 'mobx-react';

const Person = inject('OwedStore')(
  observer(props => {
    return (
      <div className="person">
        <span className="name">{props.person.name}</span>
        <span className="name">${props.person.amount}</span>
        <div className="history">
          {props.person.history.map(record =>
            record.change === 'increment' ? (
              <span className="inc">${record.amount}</span>
            ) : (
              <span className="dec">${record.amount}</span>
            )
          )}
        </div>
      </div>
    );
  })
);

export default Person;
