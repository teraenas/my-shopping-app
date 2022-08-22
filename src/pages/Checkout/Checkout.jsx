import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const state = location.state;

  useEffect(() => history.replaceState(null, ''), []);

  if (!location.state) return <Navigate to="/" replace />;
  return (
    <section className="checkout-page">
      <div className="container">
        <div>
          Checkout {state.success ? 'completed successfully' : 'failed'}
        </div>
      </div>
    </section>
  );
}

export default Checkout;
