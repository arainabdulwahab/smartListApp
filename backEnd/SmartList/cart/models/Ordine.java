package cart.models;

import java.io.Serializable;
import java.sql.Date;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="ordine")
public class Ordine implements Serializable {
	
	private static final long serialVersionUID = -9152233391313935693L;

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="ID_ordine")
	private Integer idOrdine;
	
	@Column(name="importo")
	private double importo;
	
	@Column(name="budget")
	private double budget;
	
	@Column(name="data")
	private Date data;
	
	@OneToOne(fetch = FetchType.LAZY) 
	@JoinColumn(name = "ID_sfondo_ordine") 
	@JsonIgnore
	private SfondoOrdine sfondoOrdine;  
	
	@ManyToOne(fetch = FetchType.LAZY) 
	@JoinColumn(name = "ID_utente") 
	@JsonIgnore 
	private Utente utente; 
	
	@OneToMany(mappedBy = "ordine", fetch = FetchType.LAZY, cascade = CascadeType.ALL) 
	@JsonBackReference
	private Set<Item> items = new HashSet<Item>(); 
	
	public Ordine(Integer idOrdine, double importo, double budget, Date data) {
		this.idOrdine = idOrdine;
		this.importo = importo;
		this.budget = budget;
		this.data = data;
	}

	public Integer getIdOrdine() {
		return idOrdine;
	}

	public double getImporto() {
		return importo;
	}

	public double getBudget() {
		return budget;
	}

	public Date getData() {
		return data;
	}

	public void setIdOrdine(Integer idOrdine) {
		this.idOrdine = idOrdine;
	}

	public void setImporto(double importo) {
		this.importo = importo;
	}

	public void setBudget(double budget) {
		this.budget = budget;
	}

	public void setData(Date data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "Ordine [idOrdine=" + idOrdine + ", importo=" + importo + ", budget=" + budget + ", data=" + data + "]";
	}
	

}