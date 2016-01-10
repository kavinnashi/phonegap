
var BaseUrl="http://api.experiture.com/rest/v1/json/";

var app={};

var Spinneroptions = {
	customSpinner : false,
	position : "middle",
	label : "Please Wait ...",
	bgColor: "#000",
	opacity:0.5,
	color: "#fff"
};


function showLoder()
{
	try{
	window.wizSpinner.show(Spinneroptions);
	}catch(e){}
}

function  hideLoder()
{
	try{
	window.wizSpinner.hide(Spinneroptions);
	}catch(e){}
}


function showAlert(msgText,msgTitle,btnText) 
{
	try{
	navigator.notification.alert(
		msgTitle,  
		alertDismissed,        
		msgText,           
		btnText              
	);
	}catch(e){}
}

function alertDismissed() {
       
    }
	
	function featchPushId()
	{
	
		   if(window.localStorage.getItem("push_id")!= undefined  && window.localStorage.getItem("push_id") != "")
		  {
					  
		  }
		  else
		  {
			  var pushNotification ;
			  pushNotification = window.plugins.pushNotification;
			  window.onNotificationGCM = onNotificationGCM;
				if(device.platform == 'android' || device.platform == 'Android')
				{					  
					  pushNotification.register(
						successHandler,
						errorHandler,
						{
							"senderID":"520670310527",
							"ecb":"onNotificationGCM"
						});                                              
				}
				else
				{								   
					pushNotification.register(
						tokenHandler,
						errorHandler,
						{
							"badge":"true",
							"sound":"true",
							"alert":"true",
							"ecb":"onNotificationAPN"
						});
	
				}
			function successHandler(e)
			{
			
			}
			function tokenHandler(e)
			{
				
			
				window.localStorage.setItem("push_id", e);
				window.localStorage.setItem("os_type", "1");
			
			}
			function errorHandler(e)
			{
			}
		
			
			function onNotificationGCM(e) 
			{
				console.log(JSON.stringify(e));
				if( e.event=="message")
				{
					 
				}
				else if(e.event=="registered")
				{
					console.log(e.regid);
					
					window.localStorage.setItem("push_id", e.regid);
					window.localStorage.setItem("os_type", "0");	
				}
			}
		}
	
	}
				
				
	document.addEventListener("deviceready", function() {
		
		var myVar = setInterval(featchLocation, 5000);
		
	});
	
	function featchLocation(){
		
		if(window.localStorage.getItem("XgoldUserDetails")!= undefined  && window.localStorage.getItem("XgoldUserDetails") != "")
		{
				function getLocation()
				{
					if (navigator.geolocation)
					{
						navigator.geolocation.getCurrentPosition(showPosition,onError, {enableHighAccuracy: true});
					}
				}
				function onError()
				{
					
					
				}
				function showPosition(position)
				{
					
						var Latitude=position.coords.latitude;
						var Longitude=position.coords.longitude;
						updateLocation(Latitude,Longitude);
						window.localStorage.setItem("Latitude",Latitude);
						window.localStorage.setItem("Longitude",Longitude);
						
						
				}
				getLocation();	
			
		}
		
	}
	
	function updateLocation(Latitude,Longitude)
	{
		//alert("Latitude"+Latitude+"   Longitude"+Longitude);
		
		var objDate=new Date();
		var date=objDate.getDate();
		var month=objDate.getMonth();
		month=month+1;
		var year = objDate.getFullYear();
		var hours=objDate.getHours();
		var minits=objDate.getMinutes();
		var second=objDate.getSeconds();
		
		
		if(date<10){
			date="0"+date;
		}
		if(month<10){
			month="0"+month;
		}
		if(hours<10){
			hours="0"+hours;
		}
		if(minits<10){
			minits="0"+minits;
		}
		if(second<10){
			second="0"+second;
		}
		
		var serverDate=year+"-"+month+"-"+date;
		
		var timeStamp=new Date(serverDate);
			timeStamp=timeStamp+"";
		
		
		var objUser=JSON.parse(window.localStorage.getItem("XgoldUserDetails"));
		var objPostData={
			"UserAPIKey":window.localStorage.getItem("XgoldUserAPIKey"),
			"DeviceId":window.localStorage.getItem("push_id"),
			"Latitude":Latitude,
			"Longitude":Longitude,
			"OSType":window.localStorage.getItem("os_type"),
			"Targetid":objUser.TargetId,
			"timestamp":timeStamp
		}
			$.ajax({
				type:"POST",
				async: false,
				url: BaseUrl+"getGeoLocationData",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(objPostData),
				dataType: "json",
				xhrFields:
				{
				'Access-Control-Allow-Credentials': true,
				 withCredentials: false
				},
				headers: {
	
				},
				success: function(obj) 
				{
				
				},
				error: function(obj) {
					
					
				}
			});
		
	}
		
		