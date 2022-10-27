package cart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import cart.models.Categoria;
import cart.service.CategoriaService;

@RestController
public class CategoriaController {
	
	@Autowired
	private CategoriaService service;
	
	@GetMapping("/api/categorie")
	public Iterable<Categoria> getAllCategorie() {
		return service.getAllCategorie();
	}

	@GetMapping("/api/categorie/{id}")
	public Categoria getById(@PathVariable Integer id) {
		Categoria categoria = service.getCategoriaById(id);
		if (categoria == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria non trovata");
		}
		return categoria;
	}

	@PostMapping("/admin/api/categoria/save") 
	public Categoria save(@RequestBody Categoria categoria) {
		System.err.println(categoria);
		service.addCategoria(categoria);
		return categoria;
	}
	
	@PutMapping("/admin/api/categoria/update/{id}")
	public Categoria update(@PathVariable Integer id, @RequestBody Categoria categoria) {
		Categoria ca = service.updateCategoria(id, categoria);
		if (ca == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria non trovata");
		}
		return ca;
	}

	@DeleteMapping("/admin/api/categoria/delete/{id}")
	public Categoria delete(@PathVariable Integer id) {
		Categoria categoria = service.getCategoriaById(id);
		if (categoria == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria non trovata");
		} else {
			service.deleteCategoriaById(id);
			return categoria;
		}
	}

}
