package com;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.bean.Login;
import com.repository.LoginRepository;
import com.service.LoginService;

@SpringBootTest
public class changePasswordTest {

    @Mock
    private LoginRepository loginRepository;

    @InjectMocks
    private LoginService loginService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testChangePasswordValid() {
        
        Login sampleLogin = new Login();
        sampleLogin.setEmailid("vineet12@gmail.com");
        sampleLogin.setPassword("vineet");

      
        when(loginRepository.findById(sampleLogin.getEmailid())).thenReturn(Optional.of(sampleLogin));

      
        String result = loginService.changePassword(sampleLogin);

      
        assertEquals("password changed successfully", result);
        
      
    }

    

    }