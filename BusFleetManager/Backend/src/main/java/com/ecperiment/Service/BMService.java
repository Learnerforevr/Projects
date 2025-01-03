package com.ecperiment.Service;

import java.util.List;

import com.ecperiment.Model.BMS;

public interface BMService {
	
	public String Adata(BMS bms);
	
	public BMS gtdata(String busNumber);
	
	public List<BMS> getalldetails();
	
	public String updatedetails(String busNumber, BMS kBms);
	 
	public String deleteBybusNumber(String busNumber);
}
