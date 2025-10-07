package com.example.demo.controller;

import com.example.demo.entity.Fabric;
import com.example.demo.repository.FabricRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/fabrics", produces = "application/json; charset=UTF-8") // ✅ 인코딩 명시 추가
@CrossOrigin(origins = "http://localhost:3000")
public class FabricController {

    private final FabricRepository repo;

    public FabricController(FabricRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Fabric> list() {
        return repo.findAll();
    }

    @PostMapping
    public Fabric create(@RequestBody Fabric f) {
        return repo.save(f);
    }
}
