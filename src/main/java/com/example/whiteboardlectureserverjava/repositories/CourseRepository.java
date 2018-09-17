package com.example.whiteboardlectureserverjava.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.whiteboardlectureserverjava.models.Course;

public interface CourseRepository extends CrudRepository<Course, Integer> {

}
