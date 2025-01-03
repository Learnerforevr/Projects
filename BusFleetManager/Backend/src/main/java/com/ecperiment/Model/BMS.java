package com.ecperiment.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "BusData")
public class BMS {

    @Id
    private String busNumber;
    
    @Column(name = "Name")
    private String driverName;
    
    @Column(name = "Phone_number")
    private String driverNumber;
    
    @Column(name = "Ground_name")
    private String busLocation;
    
    @Column(name = "Start_Location")
    private String startingPoint;
    
    @Column(name = "Last_Stop")
    private String destination;
    
    @Column(name = "Bus_Route")
    private String route;

	public String getBusNumber() {
		return busNumber;
	}

	public void setBusNumber(String busNumber) {
		this.busNumber = busNumber;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

	public String getDriverNumber() {
		return driverNumber;
	}

	public void setDriverNumber(String driverNumber) {
		this.driverNumber = driverNumber;
	}

	public String getBusLocation() {
		return busLocation;
	}

	public void setBusLocation(String busLocation) {
		this.busLocation = busLocation;
	}

	public String getStartingPoint() {
		return startingPoint;
	}

	public void setStartingPoint(String startingPoint) {
		this.startingPoint = startingPoint;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getRoute() {
		return route;
	}

	public void setRoute(String route) {
		this.route = route;
	}
	
}
