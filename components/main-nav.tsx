import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/overview">GAIA Software Overview</Link></li>
        <li><Link to="/qiskit">Collaborate with Qiskit</Link></li>
        <li><Link to="/vqd">VQD</Link></li>
        <li><Link to="/docker-kubernetes">Docker and Kubernetes</Link></li>
        <li><Link to="/additional-integrations">Additional Integrations</Link></li>
      </ul>
    </nav>
  );
};

export default MainNav;
