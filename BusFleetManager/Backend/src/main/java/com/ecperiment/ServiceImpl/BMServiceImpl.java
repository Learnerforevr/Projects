package com.ecperiment.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecperiment.Model.BMS;
import com.ecperiment.Repository.BMSRepository;
import com.ecperiment.Service.BMService;

@Service
public class BMServiceImpl implements BMService {

	@Autowired
	private BMSRepository bmsRepository;
	
	@Override
	public String Adata(BMS bms) {
		BMS bms1 = bmsRepository.findByBusNumber(bms.getBusNumber());
		String message= "Data is already existed";
		if(bms1==null)
		{
			bmsRepository.save(bms);
			message = "Data is inserted";
		}
		return message;
	}

	@Override
	public BMS gtdata(String busNumber) {
		
		return bmsRepository.findByBusNumber(busNumber);
	}
	
	@Override
	public List<BMS> getalldetails() {
		// TODO Auto-generated method stub
		return bmsRepository.findAll();
	}

	@Override
	public String updatedetails(String busNumber, BMS kBms) {
		BMS bms = bmsRepository.findByBusNumber(busNumber);
		String message="details not updated";
		if(bms!=null)
		{
			BMS returnData = new BMS(); 
			returnData.setBusNumber(bms.getBusNumber());
			returnData.setDriverName(kBms.getDriverName());
			returnData.setDriverNumber(kBms.getDriverNumber());
			returnData.setBusLocation(kBms.getBusLocation());
			returnData.setStartingPoint(kBms.getStartingPoint());
			returnData.setDestination(kBms.getDestination());
			returnData.setRoute(kBms.getRoute());
			bmsRepository.save(returnData);
			message="details updated successfully";
		}
		return message;
	}

	@Override
	public String deleteBybusNumber(String busNumber) {
		BMS bms = bmsRepository.findByBusNumber(busNumber);
		String message="details not deleted";

		if(bms!=null)
		{
			bmsRepository.deleteByBusNumber(busNumber);
			message="details are deleted";
		}
		return message;
	}

}
