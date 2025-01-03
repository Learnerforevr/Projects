package com.ecperiment.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecperiment.Model.BMS;
import com.ecperiment.Service.BMService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/bms")
@CrossOrigin("*")
public class BMSController {

	@Autowired
	private BMService bmService;
	
	@PostMapping("/add")
	public ResponseEntity<String> adata(@RequestBody BMS bms) {
		
		ResponseEntity<String> responseEntity = new ResponseEntity<>(bmService.Adata(bms), HttpStatus.OK);		
		
		return responseEntity;
	}
	
	@GetMapping("/get")
	public ResponseEntity<BMS> getdata(@RequestParam String busNumber)
	{
		ResponseEntity<BMS> responseEntity = new ResponseEntity<>(bmService.gtdata(busNumber), HttpStatus.OK);		
		return responseEntity;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<Object> getalldata()
	{
		ResponseEntity<Object> responseEntity = new ResponseEntity<>(bmService.getalldetails(), HttpStatus.OK);		
		return responseEntity;
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updatedetails(@RequestParam String busNumber, @RequestBody BMS bms ) 
	{
		
		ResponseEntity<String> responseEntity = new ResponseEntity<>(bmService.updatedetails(busNumber, bms), HttpStatus.OK);		

		return responseEntity;
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteDetails(@RequestParam String busNumber)
	{
		ResponseEntity<String> responseEntity = new ResponseEntity<>(bmService.deleteBybusNumber(busNumber), HttpStatus.OK);		
		
		return responseEntity;
	}
	
}
