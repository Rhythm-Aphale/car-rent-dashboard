export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  user?: {
    id: string;
    username: string;
    role: string;
  };
  error?: string;
}

export const validateLogin = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  // Mock validation - in real app, this would validate against a database
  const { username, password } = credentials;
  
  if (username === 'admin' && password === 'admin123') {
    return {
      success: true,
      user: {
        id: '1',
        username: 'admin',
        role: 'administrator'
      }
    };
  }
  
  return {
    success: false,
    error: 'Invalid username or password'
  };
};

export const isValidSession = (token?: string): boolean => {
  // Mock session validation
  return token === 'valid-session-token';
};