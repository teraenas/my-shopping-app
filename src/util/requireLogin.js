function requireLogin(location, navigate) {
  return navigate('/login', {
    state: {
      from: location.pathname,
      redirectMessage: 'Please sign in before completing this request.',
    },
  });
}

export default requireLogin;
