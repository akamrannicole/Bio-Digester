'use client'

import React, { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaGoogle, FaMicrosoft, FaApple } from 'react-icons/fa';
import { Eye, EyeOff } from 'lucide-react';

// Create UserContext
const UserContext = createContext();

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%);
  padding: 2rem;
`;

const AuthCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 77, 64, 0.1);
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
`;

const LeftSection = styled.div`
  flex: 1;
  background-image: url('https://i.pinimg.com/736x/99/8e/32/998e32df54aaf9785421e5a580639a10.jpg');
  background-size: cover;
  background-position: center;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 3rem;
`;

const Title = styled.h2`
  color: #004d40;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #004d40;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 600;
`;

const Required = styled.span`
  color: #f44336;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.3s ease;

  &:focus {
    border-color: #004d40;
    box-shadow: 0 0 0 2px rgba(0, 77, 64, 0.2);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    border-color: #004d40;
    box-shadow: 0 0 0 2px rgba(0, 77, 64, 0.2);
    outline: none;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #004d40;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #00695c;
  }
`;

const StrengthText = styled.div`
  font-size: 0.875rem;
  color: #004d40;
  margin-top: 0.25rem;
`;

const StrengthMeter = styled.div`
  height: 4px;
  background-color: #E0E0E0;
  border-radius: 2px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const StrengthIndicator = styled.div`
  height: 100%;
  width: ${props => props.strength}%;
  background-color: ${props => {
    if (props.strength < 33) return '#f44336';
    if (props.strength < 66) return '#ffa000';
    return '#00c853';
  }};
  transition: all 0.3s ease;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: #004d40;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 77, 64, 0.2);

  &:hover {
    background-color: #00695c;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 77, 64, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 77, 64, 0.2);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
  color: #004d40;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #004d40;
  }

  &::before {
    margin-right: 0.5em;
  }

  &::after {
    margin-left: 0.5em;
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialButton = styled.button`
  background-color: white;
  border: 2px solid #004d40;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6f7ff;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 77, 64, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 77, 64, 0.2);
  }
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #004d40;
`;

const ToggleLink = styled.span`
  color: #00695c;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #004d40;
    text-decoration: underline;
  }
`;

const WelcomeMessage = styled.div`
  font-size: 1.2rem;
  color: #004d40;
  text-align: center;
  margin-bottom: 1rem;
`;

const AuthPageContent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { login, user } = useContext(UserContext);
  const navigate = useNavigate();

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 6) strength += 20;
    if (password.length > 10) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;
    return strength;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: formData.username,
      email: formData.email,
      profilePicture: '/placeholder.svg?height=40&width=40&text=User',
      role: formData.role || 'user'
    };
    login(userData);
    if (formData.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  const handleSocialLogin = (provider) => {
    const userData = {
      name: `${provider} User`,
      email: `user@${provider.toLowerCase()}.com`,
      profilePicture: '/placeholder.svg?height=40&width=40&text=User',
      role: 'user'
    };
    login(userData);
    navigate('/');
  };

  return (
    <PageContainer>
      <AuthCard>
        <LeftSection />
        <RightSection>
          <Title>{isLogin ? 'Welcome Back' : 'Create Account'}</Title>
          {user && isLogin && (
            <WelcomeMessage>Welcome back, {user.name}!</WelcomeMessage>
          )}
          <Form onSubmit={handleSubmit}>
            {!isLogin && (
              <FormGroup>
                <Label>
                  Username
                  <Required>*</Required>
                </Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            )}

            <FormGroup>
              <Label>
                Email Address
                <Required>*</Required>
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                Password
                <Required>*</Required>
              </Label>
              <InputWrapper>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <PasswordToggle
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </PasswordToggle>
              </InputWrapper>
              {!isLogin && (
                <>
                  <StrengthText>
                    Password Strength: {
                      passwordStrength < 33 ? 'Weak' :
                        passwordStrength < 66 ? 'Medium' : 'Strong'
                    }
                  </StrengthText>
                  <StrengthMeter>
                    <StrengthIndicator strength={passwordStrength} />
                  </StrengthMeter>
                </>
              )}
            </FormGroup>

            {!isLogin && (
              <FormGroup>
                <Label>
                  Role
                  <Required>*</Required>
                </Label>
                <Select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Select>
              </FormGroup>
            )}

            <SubmitButton type="submit">
              {isLogin ? 'Login' : 'Sign Up'}
            </SubmitButton>
          </Form>

          <ToggleText>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <ToggleLink onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign Up' : 'Login'}
            </ToggleLink>
          </ToggleText>

          <Divider>Or</Divider>

          <SocialLoginContainer>
            <SocialButton onClick={() => handleSocialLogin('Google')}>
              <FaGoogle size={24} color="#DB4437" />
            </SocialButton>
            <SocialButton onClick={() => handleSocialLogin('Microsoft')}>
              <FaMicrosoft size={24} color="#00A4EF" />
            </SocialButton>
            <SocialButton onClick={() => handleSocialLogin('Apple')}>
              <FaApple size={24} color="#000000" />
            </SocialButton>
          </SocialLoginContainer>
        </RightSection>
      </AuthCard>
    </PageContainer>
  );
};

const AuthPage = () => {
  const [user, setUser] = React.useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <AuthPageContent />
    </UserContext.Provider>
  );
};

export { UserContext };
export default AuthPage;

