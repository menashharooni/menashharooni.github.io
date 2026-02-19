(() => {
  const loginLink = document.querySelector(".nav-auth.secondary");
  const signupLink = document.querySelector(".nav-auth:not(.secondary)");

  const updateNav = (isLoggedIn) => {
    if (isLoggedIn) {
      if (loginLink) {
        loginLink.textContent = "Account";
        loginLink.setAttribute("href", "account.html");
      }
      if (signupLink) {
        signupLink.style.display = "none";
      }
    } else {
      if (loginLink) {
        loginLink.textContent = "Login";
        loginLink.setAttribute("href", "login.html");
      }
      if (signupLink) {
        signupLink.style.display = "inline-flex";
      }
    }
  };

  if (!window.supabaseClient) {
    updateNav(false);
    return;
  }

  window.supabaseClient.auth.getSession().then(({ data }) => {
    updateNav(Boolean(data.session));
  });
})();
