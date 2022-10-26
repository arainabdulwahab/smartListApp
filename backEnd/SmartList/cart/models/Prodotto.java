package cart.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="prodotto")
public class Prodotto implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="ID_prodotto")
	private Integer idProdotto;
	
	@Column(name="genere")
	private String genere;
	
	@Column(name="immagine")
	private String immagine;
	
	@OneToMany(mappedBy = "prodotto", fetch = FetchType.LAZY, cascade = CascadeType.ALL) 
	@JsonBackReference 
	private Set<Item> items = new HashSet<Item>(); 
	
	@ManyToMany(mappedBy = "prodotti") 
	@JsonManagedReference
	private Set<Ricetta> ricette = new HashSet<Ricetta>(); 
	
	public Prodotto(Integer idProdotto, String genere, String immagine) {
		this.idProdotto = idProdotto;
		this.genere = genere;
		this.immagine = immagine;
	}

	public Integer getIdProdotto() {
		return idProdotto;
	}

	public String getGenere() {
		return genere;
	}

	public String getImmagine() {
		return immagine;
	}

	public void setIdProdotto(Integer idProdotto) {
		this.idProdotto = idProdotto;
	}

	public void setGenere(String genere) {
		this.genere = genere;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}

	@Override
	public String toString() {
		return "Prodotto [idProdotto=" + idProdotto + ", genere=" + genere + ", immagine=" + immagine + "]";
	}
	

}
