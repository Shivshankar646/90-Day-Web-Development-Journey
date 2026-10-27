import { useState } from "react";

function App() {
  const [showPassword,setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  return(
    <div>
      <input type={showPassword ? "text" : "password"} onChange={(event) => setPassword(event.target.value)} value={password}/>
      <input type={showPassword ? "text" : "password"} onChange={(event) => setConfirmPassword(event.target.value)} />
      <p>{password.trim() === "" || confirmPassword.trim() === "" ? "Please fill both fields." : password.trim() === confirmPassword.trim() ? "Passwords match!" : "Passwords do not match!" }</p>
      <p>length:{password.length}</p>
      <p>{password.trim() === "" ? "Please enter a password." : password.trim().length < 6 ? "Password is too short!" : "Password length is valid!"}</p>
      <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide Password" : "Show Password"}</button>
      <button onClick={() => {setPassword(""); setConfirmPassword("") }}>Clear Password</button>
    </div>
  )
}
export default App;