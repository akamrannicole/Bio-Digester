import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGoogle, FaMicrosoft, FaApple, FaCamera } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  padding: 2rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const AuthCard = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  animation: ${slideIn} 0.5s ease-out;
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

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #FFA500;
    box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.2);
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(255, 165, 0, 0.2);

  &:hover {
    background-color: #FF8C00;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(255, 165, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(255, 165, 0, 0.2);
  }
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #555;
`;

const ToggleLink = styled.span`
  color: #004d40;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #FFA500;
    text-decoration: underline;
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
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ProfilePictureContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #FFA500;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const ProfilePictureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ProfilePictureInput = styled.input`
  display: none;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
  color: #777;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }

  &::before {
    margin-right: 0.5em;
  }

  &::after {
    margin-left: 0.5em;
  }
`;

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Here you would typically send the data to your backend
    console.log('Form submitted', { name, email, password, profilePicture });
    // Simulate successful login/signup
    alert(`${isLogin ? 'Login' : 'Signup'} successful!`);
    // Here you would update the user state in your app
    // and redirect to the appropriate page
  };

  const handleSocialLogin = (provider) => {
    // Here you would implement social login logic
    console.log(`Logging in with ${provider}`);
    // Simulate successful login
    alert(`${provider} login successful!`);
    // Here you would update the user state in your app
    // and redirect to the appropriate page
  };

  return (
    <PageContainer>
      <AuthCard>
        <Title>{isLogin ? 'Welcome Back' : 'Join Us'}</Title>
        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <ProfilePictureContainer>
                <ProfilePicture src={profilePicture || '/placeholder.svg?height=120&width=120&text=Profile+Picture'} alt="Profile" />
                <ProfilePictureOverlay>
                  <label htmlFor="profile-picture-input">
                    <FaCamera size={30} color="white" style={{ cursor: 'pointer' }} />
                  </label>
                </ProfilePictureOverlay>
                <ProfilePictureInput
                  id="profile-picture-input"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
              </ProfilePictureContainer>
              <Input 
                type="text" 
                placeholder="Full Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </>
          )}
          <Input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          {!isLogin && (
            <Input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          )}
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
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
      </AuthCard>
    </PageContainer>
  );
};

export default AuthPage;

