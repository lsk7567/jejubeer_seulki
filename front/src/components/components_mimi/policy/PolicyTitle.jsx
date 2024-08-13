import React from 'react';

export default function PolicyTitle({ptitle}) {
  return (
    <span className='policy-title'>
        <strong>{ptitle}</strong>
    </span>
  );
}