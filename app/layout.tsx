import React from 'react';
import MainNav from '../components/main-nav';
import SidebarNav from '../components/sidebar-nav';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <MainNav />
      </header>
      <aside>
        <SidebarNav />
      </aside>
      <main>
        {children}
      </main>
      <footer>
        <section>
          <h2>Overview of GAIA Software's Quantum Capabilities</h2>
          <p>GAIA Software is the first Quantum Full-Stack solution, offering a unique set of features and quantum capabilities. Here are some highlights:</p>
          <ul>
            <li>Quantum Integration: Seamlessly integrates quantum computing capabilities into existing systems.</li>
            <li>Universal Genesis: Provides a universal platform for quantum application development.</li>
            <li>Invariant Service: Ensures consistency and reliability in quantum computations.</li>
            <li>Pulse Genesis: Manages quantum pulse sequences for optimal performance.</li>
            <li>Momentum Determination: Accurately determines quantum momentum for various applications.</li>
            <li>Chromatic Register: Handles quantum chromatic registers for advanced computations.</li>
            <li>Quantum Security Dashboard: Offers a comprehensive view of quantum security metrics.</li>
            <li>Domain Ecosystem Dashboard: Provides insights into the quantum domain ecosystem.</li>
            <li>Materials Dashboard: Monitors and optimizes quantum materials.</li>
            <li>Material Optimization: Enhances the performance of quantum materials.</li>
            <li>Learning Agent: Utilizes machine learning for quantum applications.</li>
            <li>TensorFlow Service: Integrates TensorFlow for quantum machine learning.</li>
            <li>ML Coordinator: Coordinates machine learning tasks in quantum environments.</li>
            <li>Scikit Service: Leverages Scikit-learn for quantum machine learning.</li>
            <li>CAD Service: Supports computer-aided design for quantum systems.</li>
            <li>LLM Service: Integrates large language models for quantum applications.</li>
          </ul>
          <p>GAIA Software is designed to revolutionize the field of quantum computing by providing a comprehensive and integrated solution for quantum application development and deployment.</p>
          <p>Be sure to collaborate with Qiskit for enhanced quantum computing capabilities.</p>
          <p>VQD (Variational Quantum Deflation) is a new feature in this release, providing advanced quantum optimization techniques.</p>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
