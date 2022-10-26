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

import cart.models.SfondoOrdine;
import cart.service.SfondoOrdineService;

@RestController
public class SfondoOrdineController {
	
	@Autowired
	private SfondoOrdineService service;
	
	@GetMapping("/api/sfondo_ordini")
	public Iterable<SfondoOrdine> getAllSfondiOrdine() {
		return service.getAllSfondiOrdine();
	}

	@GetMapping("/api/sfondo_ordini/{id}")
	public SfondoOrdine getById(@PathVariable Integer id) {
		SfondoOrdine sfondoOrdine = service.getSfondoOrdineById(id);
		if (sfondoOrdine == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Sfondo ordine non trovato");
		}
		return sfondoOrdine;
	}

	@PostMapping("/admin/api/sfondo_ordine/save") 
	public SfondoOrdine save(@RequestBody SfondoOrdine sfondoOrdine) {
		System.err.println(sfondoOrdine);
		service.addSfondoOrdine(sfondoOrdine);
		return sfondoOrdine;
	}
	
	@PutMapping("/admin/api/sfondo_ordine/update/{id}")
	public SfondoOrdine update(@PathVariable Integer id, @RequestBody SfondoOrdine sfondoOrdine) {
		SfondoOrdine sfor = service.updateSfondoOrdine(id, sfondoOrdine);
		if (sfor == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Sfondo ordine non trovato");
		}
		return sfor;
	}

	@DeleteMapping("/admin/api/sfondo_ordine/delete/{id}")
	public SfondoOrdine delete(@PathVariable Integer id) {
		SfondoOrdine sfondoOrdine = service.getSfondoOrdineById(id);
		if (sfondoOrdine == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Sfondo ordine non trovato");
		} else {
			service.deleteSfondoOrdineById(id);
			return sfondoOrdine;
		}
	}

}
