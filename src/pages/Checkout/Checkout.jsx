import React, { useEffect } from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { Done } from '@mui/icons-material';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const state = location.state;

  useEffect(() => history.replaceState(null, ''), []);

  if (!location.state) return <Navigate to="/" replace />;

  return (
    <section className="checkout-page">
      <div className="container">
        <Done color="success" sx={{ fontSize: 80 }} />
        <h2>Checkout {state.success ? 'completed successfully' : 'failed'}</h2>
        <Link to="/" className="styled-link">
          Back to Store
        </Link>
      </div>
    </section>
  );
}

export default Checkout;
