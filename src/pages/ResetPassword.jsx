import React from 'react'

function ResetPassword() {
  return (
    <div>
         
        <div className="container" id="login-container">
            <h2 className="text-center mb-4">Reset Password</h2>
            <form id="login-form" onSubmit={validateLogin}>
                <div className="mb-3">
                    <label htmlFor="login-email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="login-email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="login-password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="login-password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                    />
                    <div className="invalid-feedback">
                        Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div>{response}</div>
        </div>
        </div>
  )
}

export default ResetPassword