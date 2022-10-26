package cart.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="item")
public class Item implements Serializable {
	
	private static final long serialVersionUID = 2104368555842375604L;

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="ID_item")
	private Integer idItem;
	
	@Column(name="prezzo")
	private double prezzo;
	
	@Column(name="quantità")
	private double quantità;
	
	@Column(name="spunta")
	private boolean spunta;
	
	@ManyToOne(fetch = FetchType.LAZY) 
	@JoinColumn(name = "ID_ordine") 
	@JsonIgnore 
	private Ordine ordine;
	
	@ManyToOne(fetch = FetchType.LAZY) 
	@JoinColumn(name = "ID_prodotto") 
	@JsonIgnore 
	private Prodotto prodotto;
	
	public Item(Integer idItem, double prezzo, double quantità, boolean spunta) {
		this.idItem = idItem;
		this.prezzo = prezzo;
		this.quantità = quantità;
		this.spunta = spunta;
	}

	public Integer getIdItem() {
		return idItem;
	}
	
	public double getPrezzo() {
		return prezzo;
	}

	public double getQuantità() {
		return quantità;
	}

	public boolean isSpunta() {
		return spunta;
	}

	public void setIdItem(Integer idItem) {
		this.idItem = idItem;
	}
	
	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}

	public void setQuantità(double quantità) {
		this.quantità = quantità;
	}

	public void setSpunta(boolean spunta) {
		this.spunta = spunta;
	}

	@Override
	public String toString() {
		return "Item [idItem=" + idItem + ", prezzo=" + prezzo + ", quantità=" + quantità + ", spunta=" + spunta + "]";
	}

}
