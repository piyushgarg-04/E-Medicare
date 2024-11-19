package com;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.bean.Login;
import com.repository.LoginRepository;
import com.service.LoginService;

public class UserSignUpTest {

    @Mock
    private LoginRepository loginRepository;

    @InjectMocks
    private LoginService loginService;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSignUpUserSuccessfully() {
        // Create a sample Login object for testing
        Login login = new Login();
        login.setEmailid("gupta12@gmail.com");
        login.setPassword("123456");
        login.setTypeOfUser("user");

        // Mock the behavior of the loginRepository
        when(loginRepository.findById("gupta12@gmail.com")).thenReturn(Optional.empty());

        // Perform the sign-up operation
        String result = loginService.signUp(login);

        // Verify that the result matches the expected message
        assertEquals("Account created successfully", result);

        // Verify that save method was called with the Login object
        verify(loginRepository, times(1)).save(login);
    }

    @Test
    public void testSignUpUserAlreadyExists() {
        // Create a sample Login object for testing
        Login login = new Login();
        login.setEmailid("gupta12@gmail.com");
        login.setPassword("123456");
        login.setTypeOfUser("user");

        // Mock the behavior of the loginRepository to return an existing user
        when(loginRepository.findById("gupta12@gmail.com")).thenReturn(Optional.of(login));

        // Perform the sign-up operation
        String result = loginService.signUp(login);

        // Verify that the result matches the expected message
        assertEquals("Email Id already exists", result);

        // Verify that save method was not called
        verify(loginRepository, never()).save(any(Login.class));
    }
}

