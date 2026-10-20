/**
 * Login & Register — redirect to dashboard after submit
 */
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const next = params.get('next');
  const dashboardBase = 'User_Dashboard/user-dashboard.html';
  const redirectUrl = next === 'motion'
    ? `${dashboardBase}#motion`
    : dashboardBase;

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail');
      const password = document.getElementById('loginPassword');

      if (!email.value || !password.value) return;

      window.location.href = redirectUrl;
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = registerForm.querySelector('[name="name"]');
      const email = registerForm.querySelector('[name="email"]');
      const password = registerForm.querySelector('[name="password"]');
      const confirm = registerForm.querySelector('[name="confirm"]');
      const terms = registerForm.querySelector('[name="terms"]');

      if (!name.value || !email.value || !password.value) return;
      if (password.value !== confirm.value) {
        alert('Passwords do not match.');
        return;
      }
      if (!terms.checked) {
        alert('Please agree to the Terms & Conditions.');
        return;
      }

      window.location.href = redirectUrl;
    });
  }
});
