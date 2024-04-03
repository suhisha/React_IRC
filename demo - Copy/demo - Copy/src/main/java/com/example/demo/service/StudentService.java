package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepo;


@Service
public class StudentService {

    @Autowired
    private final StudentRepo studentRepo;

    public StudentService(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    public ResponseEntity<?> saveStudent(Student student) {
        Optional<Student> studentExists = studentRepo.findByEmail(student.getEmail());
        if (!studentExists.isPresent()) {
            studentRepo.save(student);
            return new ResponseEntity<>("User created successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("User with email already exists", HttpStatus.CONFLICT);
        }
    }

    public ResponseEntity<?> updateStudent(String email, Student student) {
        Optional<Student> studentExists = studentRepo.findByEmail(email);
        if (studentExists.isPresent()) {
            Student existingStudent = studentExists.get();
            existingStudent.setUsername(student.getUsername());
            existingStudent.setPassword(student.getPassword());
            // existingUser.setEmail(user.getEmail());
            // existingUser.setPhone(user.getPhone());
            studentRepo.save(existingStudent);
            return new ResponseEntity<>(existingStudent, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User with email " + email + " not found", HttpStatus.NOT_FOUND);
        }
    }
    public List<Student> getAllUsers() {
        return studentRepo.findAll();
    }

    public boolean deleteStudent(Long id)
    {
        Optional<Student>studentExists=studentRepo.findById(id);
        if(studentExists.isPresent())
        {
            studentRepo.deleteById(id);
        }
        return false;
    }
    public ResponseEntity<?> patchStudent(String email, Student student) {
        Optional<Student> studentExists = studentRepo.findByEmail(email);
        if (studentExists.isPresent()) {
            Student existingStudent = studentExists.get();
            
            // Update only the fields that are not null in the request
            if (student.getUsername() != null) {
                existingStudent.setUsername(student.getUsername());
            }
            if (student.getPassword() != null) {
                existingStudent.setPassword(student.getPassword());
            }
            if (student.getEmail() != null) {
                existingStudent.setEmail(student.getEmail());
            }
            if (student.getPhone() != null) {
                existingStudent.setPhone(student.getPhone());
            }

            // Save the updated user
            studentRepo.save(existingStudent);
            
            return new ResponseEntity<>(existingStudent, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User with email " + email + " not found", HttpStatus.NOT_FOUND);
        }
    }

}