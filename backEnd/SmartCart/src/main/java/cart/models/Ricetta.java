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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="ricetta")
public class Ricetta implements Serializable {
	
	private static final long serialVersionUID = -4899238702728228084L;

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="ID_ricetta")
	private Integer idRicetta;
	
	@Column(name="importo")
	private double importo;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="immagine")
	private String immagine;
	
	@Column(name="tipo")
	private String tipo;
	
	@Column(name="descrizione")
	private String descrizione;
	
	@Column(name="procedimento")
	private String procedimento;
	 
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE) 
	@JoinTable(name = "lista_ricetta",
	joinColumns = {@JoinColumn(name = "ID_ricetta", referencedColumnName = "ID_ricetta")},  
	inverseJoinColumns = {@JoinColumn(name = "ID_prodotto", referencedColumnName = "ID_prodotto")
	})
	@JsonManagedReference
	private Set<Prodotto> prodotti = new HashSet<Prodotto>(); 
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE) 
	@JoinTable(name = "categoria_ricetta",
	joinColumns = {@JoinColumn(name = "ID_ricetta", referencedColumnName = "ID_ricetta")},  
	inverseJoinColumns = {@JoinColumn(name = "ID_categoria", referencedColumnName = "ID_categoria")
	})
	@JsonManagedReference
	private Set<Categoria> categorie = new HashSet<Categoria>();
	
	public Ricetta() {
		
	}
	
	public Ricetta(Integer idRicetta, double importo, String nome, String immagine, String tipo, String descrizione, String procedimento) {
		this.idRicetta = idRicetta;
		this.importo = importo;
		this.nome = nome;
		this.immagine = immagine;
		this.tipo = tipo;
		this.descrizione = descrizione;
		this.procedimento = procedimento;
	}

	public Integer getIdRicetta() {
		return idRicetta;
	}

	public double getImporto() {
		return importo;
	}

	public String getNome() {
		return nome;
	}

	public String getImmagine() {
		return immagine;
	}

	public String getTipo() {
		return tipo;
	}
	
	public String getDescrizione() {
		return descrizione;
	}

	public String getProcedimento() {
		return procedimento;
	}

	public void setIdRicetta(Integer idRicetta) {
		this.idRicetta = idRicetta;
	}

	public void setImporto(double importo) {
		this.importo = importo;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public void setProcedimento(String procedimento) {
		this.procedimento = procedimento;
	}

	@Override
	public String toString() {
		return "Ricetta [idRicetta=" + idRicetta + ", importo=" + importo + ", nome=" + nome + ", immagine=" + immagine
				+ ", tipo=" + tipo + ", descrizione=" + descrizione + ", procedimento=" + procedimento + "]";
	}
	

}
