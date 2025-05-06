function PasswordInput() {
    function handleChange(event) {
      console.log('Entering password...');
    }
  
    return (
      <input
        type="password"
        onChange={handleChange}
        aria-label="password-input" // optional but test-friendly
      />
    );
  }
  
  export default PasswordInput;  