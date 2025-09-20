import './Carts.scss';

export default function WhatYouWillLearn({ title, description }) {
  return (
    <>
      <li>
        <p>
          <strong>{title}</strong> {description}
        </p>
      </li>
    </>
  )
}