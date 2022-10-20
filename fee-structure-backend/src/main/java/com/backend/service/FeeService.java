package com.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.backend.repo.FeeStructureData;

@Service
public class FeeService {
	
	FeeStructureData feeStructureData=new FeeStructureData();
	JSONObject feeData=new JSONObject(feeStructureData.getData());
	
	public List<String> getNationalities(String feeType){
		if("examFee".equalsIgnoreCase(feeType))
			feeType="Exam Fee";
		else
			feeType="Application Fee";
		List<String> nationlitiesList=new ArrayList<>();
		JSONObject nationalitiesJSON=feeData.optJSONObject(feeType);
		Set<String> nationalities=nationalitiesJSON.keySet();
		for(String e:nationalities) {
			nationlitiesList.add(e);
			
		}
		return nationlitiesList;	
	}
	
	public List<String> getCourses(String feeType,String nation){
		if("examFee".equalsIgnoreCase(feeType))
			feeType="Exam Fee";
		else
			feeType="Application Fee";
		List<String> coursesList=new ArrayList<>();
		JSONObject coursesListJSON=feeData.optJSONObject(feeType).optJSONObject(nation);
		Set<String> courses=coursesListJSON.keySet();
		for(String e:courses) {
			coursesList.add(e);	
		}
		return coursesList;	
	}

	public List<String> getCourseTypes(String feeType, String nation, String course) {
		if("examFee".equalsIgnoreCase(feeType))
			feeType="Exam Fee";
		else
			feeType="Application Fee";
		List<String> courseTypeList=new ArrayList<>();
		JSONObject coursesTypeListJSON=feeData.optJSONObject(feeType).optJSONObject(nation).optJSONObject(course);
		Set<String> courseTypes=coursesTypeListJSON.keySet();
		for(String e:courseTypes) {
			courseTypeList.add(e);	
		}
		return courseTypeList;
		
	}

	public Integer getFeeAmount(String feeType, String nation, String course, String courseType) {
		if("examFee".equalsIgnoreCase(feeType))
			feeType="Exam Fee";
		else
			feeType="Application Fee";
		Integer feeAmount=feeData.optJSONObject(feeType).optJSONObject(nation).optJSONObject(course).optJSONObject(courseType).optInt("amount");
		
		return feeAmount;
	}
}
