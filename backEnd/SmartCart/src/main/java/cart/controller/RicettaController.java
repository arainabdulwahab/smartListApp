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

import cart.models.Ricetta;
import cart.service.RicettaService;

@RestController
public class RicettaController {
	
	@Autowired
	private RicettaService service;
	
	@GetMapping("/api/ricette")
	public Iterable<Ricetta> getAllRicette() {
		return service.getAllRicette();
	}

	@GetMapping("/api/ricette/{id}")
	public Ricetta getById(@PathVariable Integer id) {
		Ricetta ricetta = service.getRicettaById(id);
		if (ricetta == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ricetta non trovata");
		}
		return ricetta;
	}

	@PostMapping("/admin/api/ricetta/save") 
	public Ricetta save(@RequestBody Ricetta ricetta) {
		System.err.println(ricetta);
		service.addRicetta(ricetta);
		return ricetta;
	}
	
	@PutMapping("/admin/api/ricetta/update/{id}")
	public Ricetta update(@PathVariable Integer id, @RequestBody Ricetta ricetta) {
		Ricetta ri = service.updateRicetta(id, ricetta);
		if (ri == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ricetta non trovata");
		}
		return ri;
	}

	@DeleteMapping("/admin/api/ricetta/delete/{id}")
	public Ricetta delete(@PathVariable Integer id) {
		Ricetta ricetta = service.getRicettaById(id);
		if (ricetta == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ricetta non trovata");
		} else {
			service.deleteRicettaById(id);
			return ricetta;
		}
	}

}
