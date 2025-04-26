import './signin.css'

function SignIn() {
  return (
    <div className="login-container">
      <div className="background-shapes">
        <div className="shape-top"></div>
        <div className="shape-bottom"></div>
      </div>
      <div className="login-box">
        <h2 className='text-3xl font-semibold pd-5'>Welcome Back</h2>
        <p className='text-lg pd-5'>Sign in to your EduZone account</p>
        <form>
          <label className='text-md'>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label className='text-md'>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit" className="sign-in-button">
            <span className="arrow">→</span> Sign In
          </button>
        </form>
        <p className="create-account">
          Don't have an account? <a href="/register">Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
