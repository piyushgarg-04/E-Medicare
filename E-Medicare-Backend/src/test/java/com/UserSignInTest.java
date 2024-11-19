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

public class UserSignInTest {

    @Mock
    private LoginRepository loginRepository;

    @InjectMocks
    private LoginService loginService;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSignInUserSuccessfully() {
        // Create a sample Login object for testing
        Login login = new Login();
        login.setEmailid("gupta12@gmail.com");
        login.setPassword("123456");
        login.setTypeOfUser("user");

        // Mock the behavior of the loginRepository to return the user with the provided email
        when(loginRepository.findById("gupta12@gmail.com")).thenReturn(Optional.of(login));

        // Perform the sign-in operation
        String result = loginService.signIn(login);

        // Verify that the result matches the expected message
        assertEquals("User successfully login", result);
    }

    @Test
    public void testSignInUserInvalidEmail() {
        // Create a sample Login object for testing
        Login login = new Login();
        login.setEmailid("gupta123@gmail.com");
        login.setPassword("123456");
        login.setTypeOfUser("user");

        // Mock the behavior of the loginRepository to return an empty Optional (user not found)
        when(loginRepository.findById("gupta123@gmail.com")).thenReturn(Optional.empty());

        // Perform the sign-in operation
        String result = loginService.signIn(login);

        // Verify that the result matches the expected message
        assertEquals("InValid emailId", result);
    }
}

