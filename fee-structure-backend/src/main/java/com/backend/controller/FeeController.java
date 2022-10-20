package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.service.FeeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/fee/")
public class FeeController {
	@Autowired
	private FeeService feeService;
	
	@GetMapping(value="/get/nationalities/{feeType}")
	public List<String> getNationalities(@PathVariable String feeType){
		return feeService.getNationalities(feeType);
	}
	
	@GetMapping(value="/get/courses/{feeType}/{nation}")
	public List<String> getCourses(@PathVariable String feeType,
			@PathVariable String nation){
		return feeService.getCourses(feeType, nation);
	}
	
	@GetMapping(value="/get/courseTypes/{feeType}/{nation}/{course}")
	public List<String> getCourseType(@PathVariable String feeType,
			@PathVariable String nation,@PathVariable String course){
		return feeService.getCourseTypes(feeType, nation,course);
	}
	
	@GetMapping(value="/get/feeAmount/{feeType}/{nation}/{course}/{courseType}")
	public Integer getFeeAmount(@PathVariable String feeType,
			@PathVariable String nation,@PathVariable String course,
			@PathVariable String courseType) {
		return feeService.getFeeAmount(feeType, nation,course,courseType);
		
	}
	
	
	
	
	
	
	
	
	
	
	
	

}
