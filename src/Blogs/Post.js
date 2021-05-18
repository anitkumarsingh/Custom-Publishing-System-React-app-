import React from 'react';

const post = (props) => (
  <article className="Post" onClick={props.clicked}>
    <h3>{props.title}</h3>
    <div className="Info">
      <span
        style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}
      >
        Posted on{' '}
        <span style={{ paddingLeft: '5px', fontWeight: 'bold' }}>
          {props.date}
        </span>{' '}
        <span style={{ color: 'grey', paddingLeft: '50px' }}>By</span> -{' '}
        <b>{props.author}</b>
      </span>
    </div>
  </article>
);

export default post;
