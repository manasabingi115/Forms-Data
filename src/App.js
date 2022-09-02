import React from 'react';
import './style.css';

export default function App() {
  fetch('https://jsonkeeper.com/b/HV04', {
    method: 'GET',
    credentials: 'same-origin', //include, same-origin
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then((data) => data.json())
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));

  // async function Test() {
  //   let response = await fetch('https://jsonkeeper.com/b/HV04', {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then((response) => response.json());
  //   console.log(response);
  // }
  // Test();

  // fetch('https://jsonkeeper.com/b/HV04')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
