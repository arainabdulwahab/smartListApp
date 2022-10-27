package cart.models;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="sfondo_ordine")
public class SfondoOrdine implements Serializable {

	private static final long serialVersionUID = -5516874141548515559L;

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="ID_sfondo_ordine")
	private Integer idSfondoOrdine;
	
	@Column(name="sfondo")
	private String sfondo;
	
	@Column(name="colore")
	private String colore;
	
	@OneToOne(mappedBy = "sfondoOrdine", fetch = FetchType.LAZY, cascade = CascadeType.ALL) 
	@JsonBackReference
	private Ordine ordine;
	
	public SfondoOrdine() {
		
	}
	
	public SfondoOrdine(Integer idSfondoOrdine, String sfondo, String colore) {
		this.idSfondoOrdine = idSfondoOrdine;
		this.sfondo = sfondo;
		this.colore = colore;
	}

	public Integer getIdSfondoOrdine() {
		return idSfondoOrdine;
	}

	public String getSfondo() {
		return sfondo;
	}

	public String getColore() {
		return colore;
	}

	public void setIdSfondoOrdine(Integer idSfondoOrdine) {
		this.idSfondoOrdine = idSfondoOrdine;
	}

	public void setSfondo(String sfondo) {
		this.sfondo = sfondo;
	}

	public void setColore(String colore) {
		this.colore = colore;
	}

	@Override
	public String toString() {
		return "SfondoOrdine [idSfondoOrdine=" + idSfondoOrdine + ", sfondo=" + sfondo + ", colore=" + colore + "]";
	}

}
