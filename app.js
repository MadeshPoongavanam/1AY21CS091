const axios = require('axios');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNjk0NTU4LCJpYXQiOjE3MjA2OTQyNTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImIyNDAwMDIwLTU0OTEtNGZmOS05OWYzLTNkYzI0MWI3MjM1OCIsInN1YiI6ImtvZGlkZWxhay4yMS5iZWNzQGFjaGFyeWEuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJBQ0hBUllBIElOU1RJVFVURSBPRiBURUNITk9MT0dZIiwiY2xpZW50SUQiOiJiMjQwMDAyMC01NDkxLTRmZjktOTlmMy0zZGMyNDFiNzIzNTgiLCJjbGllbnRTZWNyZXQiOiJWaUhHYXNaSklmQ0R6S0FwIiwib3duZXJOYW1lIjoiay5BamF5IEt1bWFyIFJlZGR5Iiwib3duZXJFbWFpbCI6ImtvZGlkZWxhay4yMS5iZWNzQGFjaGFyeWEuYWMuaW4iLCJyb2xsTm8iOiIxQVkyMUNTMDgwIn0.EPZq8InOUout5IjROP0GTrEu05s0O-yxD9wBlSACnNg";

axios.get('https://api.example.com/users/profile', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(response => {
  console.log('Response:', response.data);
})
.catch(error => {
  console.error('Error:', error.message);
});
// /{
//     "token_type": "Bearer",
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNjkzMzgwLCJpYXQiOjE3MjA2OTMwODAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImIyNDAwMDIwLTU0OTEtNGZmOS05OWYzLTNkYzI0MWI3MjM1OCIsInN1YiI6ImtvZGlkZWxhay4yMS5iZWNzQGFjaGFyeWEuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJBQ0hBUllBIElOU1RJVFVURSBPRiBURUNITk9MT0dZIiwiY2xpZW50SUQiOiJiMjQwMDAyMC01NDkxLTRmZjktOTlmMy0zZGMyNDFiNzIzNTgiLCJjbGllbnRTZWNyZXQiOiJWaUhHYXNaSklmQ0R6S0FwIiwib3duZXJOYW1lIjoiay5BamF5IEt1bWFyIFJlZGR5Iiwib3duZXJFbWFpbCI6ImtvZGlkZWxhay4yMS5iZWNzQGFjaGFyeWEuYWMuaW4iLCJyb2xsTm8iOiIxQVkyMUNTMDgwIn0.KwgxtMHaiV8K_1Ujxalii1R0IFoguxzMwmBbrT2fDqQ",
//     "expires_in": 1720693380
// }