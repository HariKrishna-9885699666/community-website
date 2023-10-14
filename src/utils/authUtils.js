import Swal from 'sweetalert2';

// Function to log the user out
export function clearLocalStorage() {
  // Clear the user's session data, e.g., JWT token, from local storage
  localStorage.removeItem('tokenExpiresIn');
  localStorage.removeItem('authToken');
  // Perform any other necessary logout-related tasks
}

export function navigateToLoginPage(navigate) {
  navigate('/');
}

export function showSessionEndNotification(message) {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: message,
    showConfirmButton: false,
    timer: 3000,
  });
}
