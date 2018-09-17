package com.example.whiteboardlectureserverjava.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.whiteboardlectureserverjava.models.Course;
import com.example.whiteboardlectureserverjava.repositories.CourseRepository;

@RestController
@CrossOrigin("*")
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	@GetMapping("/api/course")
	public List<Course> findAllCourse() {
		return (List<Course>) courseRepository.findAll();
	}
}
