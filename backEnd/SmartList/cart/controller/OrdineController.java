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

import cart.models.Ordine;
import cart.service.OrdineService;

@RestController
public class OrdineController {
	
	@Autowired
	private OrdineService service;
	
	@GetMapping("/api/ordini")
	public Iterable<Ordine> getAllOrdini() {
		return service.getAllOrdini();
	}

	@GetMapping("/api/ordini/{id}")
	public Ordine getById(@PathVariable Integer id) {
		Ordine ordine = service.getOrdineById(id);
		if (ordine == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ordine non trovato");
		}
		return ordine;
	}

	@PostMapping("/admin/api/ordine/save") 
	public Ordine save(@RequestBody Ordine ordine) {
		System.err.println(ordine);
		service.addOrdine(ordine);
		return ordine;
	}
	
	@PutMapping("/admin/api/ordine/update/{id}")
	public Ordine update(@PathVariable Integer id, @RequestBody Ordine ordine) {
		Ordine or = service.updateOrdine(id, ordine);
		if (or == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ordine non trovato");
		}
		return or;
	}

	@DeleteMapping("/admin/api/ordine/delete/{id}")
	public Ordine delete(@PathVariable Integer id) {
		Ordine ordine = service.getOrdineById(id);
		if (ordine == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ordine non trovato");
		} else {
			service.deleteOrdineById(id);
			return ordine;
		}
	}

}
