package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Login;
import com.repository.LoginRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository loginRepository;

	public String signIn(Login login) {
		Optional<Login> result = loginRepository.findById(login.getEmailid());
		if (result.isPresent()) {
			Login ll = result.get();
			if (ll.getPassword().equals(login.getPassword())) {

				if (login.getTypeOfUser().equals(ll.getTypeOfUser()) && login.getTypeOfUser().equals("admin")) {
					return "Admin sucessfully login";
				} else if (login.getTypeOfUser().equals(ll.getTypeOfUser()) && login.getTypeOfUser().equals("user")) {
					return "User successfully login";
				} else {
					return "Invalid details";
				}
			} else {
				return "InValid password";
			}
		} else {
			return "InValid emailId";
		}
	}

	public String signUp(Login login) {
		Optional<Login> result = loginRepository.findById(login.getEmailid());
		if (result.isPresent()) {
			return "Email Id already exists";
		} else {
			if (login.getTypeOfUser().equals("admin")) {
				return "You can't create admin account";
			} else {
				loginRepository.save(login);
				return "Account created successfully";
			}

		}
	}

	public String changePassword(Login login) {

		String email = login.getEmailid();
		String password = login.getPassword();
		if (email != null && password != null) {
			Optional<Login> result = loginRepository.findById(email);
			if (result.isPresent()) {
				Login newLogin = result.get();
				newLogin.setPassword(password);

				loginRepository.save(newLogin);

				return "password changed successfully";
			} else {
				return "user doest not exist";
			}
		}
		else {
			return "Please enter your emailId and password";
		}
	}
	
	public String deleteusers(String emailid) {
		Optional<Login> result = loginRepository.findById(emailid);
		if (result.isPresent()) {
			Login l = result.get();
			loginRepository.delete(l);
			return "User deleted successfully";
		} else {
			return "user not present";
		}
	}

	public List<Login> findAllUser() {
		List<Login> result = loginRepository.findBytypeOfUser("user");
		return result;
	}
}