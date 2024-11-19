package com.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Login;
import com.service.LoginService;

@RestController
@RequestMapping("login")
@CrossOrigin
public class LoginController {

	
	@Autowired
	LoginService loginService;
	
	
	@PostMapping(value = "signIn",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signIn(@RequestBody Login login) {
		System.out.println("running successfully");
		return loginService.signIn(login);
		
	}

	@PostMapping(value = "signUp",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signUp(@RequestBody Login login) {
		System.out.println(login);
		return loginService.signUp(login);
	}
	
	
	@PostMapping(value = "changePassword",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String changePassword(@RequestBody Login login) {
		System.out.println(login);
		return loginService.changePassword(login);
	}
	
	@DeleteMapping(value="deleteUser/{emailid}")
	public String deleteUserUsingemailid(@PathVariable("emailid") String emailid) {
		return loginService.deleteusers(emailid);
	}
	
	@GetMapping(value="findAllUser")
	public List<Login> findAllUser() {
		return loginService.findAllUser();
	}

	
}