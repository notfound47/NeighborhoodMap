var map;
var markers = [];
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'http://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBqaT_sOie4xGV-4dfpTtFwnQjeyKz8c4U&callback=initialize';
  document.body.appendChild(script);
}
window.onload = loadScript();

//Initialize the map and its contents
function initialize() {  
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(38.453131, -121.335495),
        mapTypeControl: false,
        disableDefaultUI: false
    };

    if($(window).width() <= 1080) {
        mapOptions.zoom = 13;
    }
    if ($(window).width() < 850 || $(window).height() < 595) {
        hideNav();
    }

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);  

    setMarkers(markers);
    setAllMap();

    //Reset map when window resize conditionals are met
    function resetZoomLevel() {
        var windowWidth = $(window).width();
        if(windowWidth <= 1080) {
            map.setZoom(13);
            map.setCenter(mapOptions.center);
        } else if(windowWidth > 1080) {
            map.setZoom(14);
            map.setCenter(mapOptions.center);   
        }
    }

   $(window).resize(function() {
        resetZoomLevel();
    }); 
}

//Determines if markers should be visible
//This function is passed in the knockout viewModel function
function setAllMap() {
  for (var i = 0; i < markers.length; i++) {
    if(markers[i].boolCheck === true) {
    markers[i].holdMarker.setMap(map);
    } else {
    markers[i].holdMarker.setMap(null);
    }
  }
}

//Crime information which provides information for the markers
var markers = [
    	{
            "OccurenceEndDate": "1/19/16 5:45",
            "ReportDate": "1/19/16 8:31",
            "Neighborhood": "Sloughhouse",
            "OccurenceCity": "Elk Grove",
            "District": "South",
            "OccurenceLocation": "12000 Block of Cresthill Dr",
            "Y_Coord": "1936428.5",
            "lng": "-121.2289337",
            "lat": "38.4767125",
            "OccurenceStartDate": "1/19/16 5:30",
            "X_Coord": "6783015.5",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0016711",
            "PrimaryViolation": "PC 459 Burglary",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "2/10/16 8:03",
            "ReportDate": "2/11/16 15:29",
            "Neighborhood": "Sloughhouse",
            "OccurenceCity": "Elk Grove",
            "District": "South",
            "OccurenceLocation": "11700 Block of Barbwire Ct",
            "Y_Coord": "1937104.25",
            "lng": "-121.2423418",
            "lat": "38.4799774",
            "OccurenceStartDate": "2/9/16 20:00",
            "X_Coord": "6779682",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-8001770",
            "PrimaryViolation": "PC 459 Theft from motor vehicle",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "2/8/16 15:00",
            "ReportDate": "2/26/16 16:08",
            "Neighborhood": "Sloughhouse",
            "OccurenceCity": "Elk Grove",
            "District": "South",
            "OccurenceLocation": "8200 Block of Sloughhouse Rd",
            "Y_Coord": "1931905.125",
            "lng": "-121.2422062",
            "lat": "38.4633574",
            "OccurenceStartDate": "2/8/16 8:00",
            "X_Coord": "6778689.5",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0057081",
            "PrimaryViolation": "PC 484 Theft",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "3/8/16 8:05",
            "ReportDate": "3/8/16 11:19",
            "Neighborhood": "Sloughhouse",
            "OccurenceCity": "Elk Grove",
            "District": "South",
            "OccurenceLocation": "8100 Block of Sloughhouse Rd",
            "Y_Coord": "1931213",
            "lng": "-121.2377051",
            "lat": "38.4627707",
            "OccurenceStartDate": "3/7/16 15:40",
            "X_Coord": "6780560.5",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0067700",
            "PrimaryViolation": "PC 459 Burglary",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "5/11/16 19:00",
            "ReportDate": "5/25/16 8:28",
            "Neighborhood": "EGPD",
            "OccurenceCity": "Elk Grove",
            "District": "EDPD",
            "OccurenceLocation": "Wilton Rd & Grant Line Rd",
            "Y_Coord": "1919530.875",
            "lng": "-121.3025613",
            "lat": "38.4312209",
            "OccurenceStartDate": "5/11/16 18:45",
            "X_Coord": "6762009.5",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0151600",
            "PrimaryViolation": "PC 245(A)(1) Force/Assault With A Deadly Weapon-Not Firearm:Gbi Likely",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "7/30/16 12:00",
            "ReportDate": "8/2/16 18:43",
            "Neighborhood": "Sloughhouse",
            "OccurenceCity": "Elk Grove",
            "District": "South",
            "OccurenceLocation": "7500 Block of Sloughhouse Rd",
            "Y_Coord": "1939327.25",
            "lng": "-121.2291057",
            "lat": "38.4747192",
            "OccurenceStartDate": "7/30/16 10:05",
            "X_Coord": "6785552.5",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-8009200",
            "PrimaryViolation": "PC 459 Theft from motor vehicle",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "8/12/16 22:44",
            "ReportDate": "8/13/16 13:40",
            "Neighborhood": "",
            "OccurenceCity": "Elk Grove",
            "District": "",
            "OccurenceLocation": "Stockton Blvd & Jansen Dr",
            "Y_Coord": "0",
            "lng": "-121.4431617",
            "lat": "38.5214582",
            "OccurenceStartDate": "8/12/16 22:44",
            "X_Coord": "0",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0238822",
            "PrimaryViolation": "PC 25400(A)(3) Concealed F/Arm Veh Occupant",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "8/29/16 18:40",
            "ReportDate": "8/30/16 11:04",
            "Neighborhood": "EGPD",
            "OccurenceCity": "Elk Grove",
            "District": "EDPD",
            "OccurenceLocation": "8600 Block of Power Inn Rd",
            "Y_Coord": "1925450",
            "lng": "-121.4245909",
            "lat": "38.4730787",
            "OccurenceStartDate": "8/29/16 18:10",
            "X_Coord": "6735005",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0258178",
            "PrimaryViolation": "PC 459 Burglary",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "9/6/16 11:18",
            "ReportDate": "9/6/16 12:30",
            "Neighborhood": "EGPD",
            "OccurenceCity": "Elk Grove",
            "District": "EDPD",
            "OccurenceLocation": "8600 Block of Power Inn Rd",
            "Y_Coord": "1925594",
            "lng": "-121.4245909",
            "lat": "38.4730787",
            "OccurenceStartDate": "9/6/16 9:43",
            "X_Coord": "6734353.5",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0266257",
            "PrimaryViolation": "PC 484 Theft",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "9/18/16 14:10",
            "ReportDate": "9/19/16 16:43",
            "Neighborhood": "EGPD",
            "OccurenceCity": "Sacramento",
            "District": "EDPD",
            "OccurenceLocation": "8600 Block of Calvine Rd",
            "Y_Coord": "1927207.625",
            "lng": "-121.3972707",
            "lat": "38.4527113",
            "OccurenceStartDate": "9/18/16 14:00",
            "X_Coord": "6737991",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-8009885",
            "PrimaryViolation": "PC 484 Theft from vehicle < $950",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "9/23/16 15:05",
            "ReportDate": "9/23/16 21:15",
            "Neighborhood": "Wilton",
            "OccurenceCity": "Elk Grove",
            "District": "South",
            "OccurenceLocation": "10100 Block of Freeman Rd",
            "Y_Coord": "1911755",
            "lng": "-121.3225577",
            "lat": "38.4131882",
            "OccurenceStartDate": "9/23/16 14:00",
            "X_Coord": "6757838",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0286189",
            "PrimaryViolation": "PC 417(A)(2) Exhibit Firearm",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "9/23/16 17:00",
            "ReportDate": "9/26/16 14:27",
            "Neighborhood": "Countryside Central",
            "OccurenceCity": "Elk Grove",
            "District": "Central",
            "OccurenceLocation": "E Stockton Blvd & Geneva Pointe Dr",
            "Y_Coord": "1927202.75",
            "lng": "-121.4095688",
            "lat": "38.4525553",
            "OccurenceStartDate": "9/23/16 7:00",
            "X_Coord": "6731416",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-8010350",
            "PrimaryViolation": "PC 487 Theft from vehicle > $950",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "9/2/16 13:11",
            "ReportDate": "9/29/16 10:03",
            "Neighborhood": "EGPD",
            "OccurenceCity": "Elk Grove",
            "District": "EDPD",
            "OccurenceLocation": "8800 Block of Elk Grove Blvd",
            "Y_Coord": "1911416.125",
            "lng": "-121.3772617",
            "lat": "38.4075172",
            "OccurenceStartDate": "9/2/16 13:11",
            "X_Coord": "6741251",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0261769",
            "PrimaryViolation": "PC 243.5 Assault/Battery On School Property",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "12/26/16 17:15",
            "ReportDate": "12/26/16 18:07",
            "Neighborhood": "",
            "OccurenceCity": "ELK GROVE",
            "District": "",
            "OccurenceLocation": "CALVINE RD & ELK GROVE FLORIN RD",
            "Y_Coord": "0",
            "lng": "-121.3738017",
            "lat": "38.4525274",
            "OccurenceStartDate": "12/26/16 17:00",
            "X_Coord": "0",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2017-8000728",
            "PrimaryViolation": "PC 487 Theft from building > $950",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "12/27/16 13:50",
            "ReportDate": "12/27/16 18:15",
            "Neighborhood": "EGPD",
            "OccurenceCity": "Elk Grove",
            "District": "EDPD",
            "OccurenceLocation": "9300 Block of Feickert Dr",
            "Y_Coord": "1914395",
            "lng": "-121.388941",
            "lat": "38.419340",
            "OccurenceStartDate": "12/27/16 13:45",
            "X_Coord": "6737106.5",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0389560",
            "PrimaryViolation": "PC 594(A) Vandalism",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "12/29/16 6:25",
            "ReportDate": "12/29/16 6:43",
            "Neighborhood": "Sloughhouse",
            "OccurenceCity": "Elk Grove",
            "District": "South",
            "OccurenceLocation": "12200 Block of Vineyard Hills Dr",
            "Y_Coord": "1939263.25",
            "lng": "-121.2189847",
            "lat": "38.4853032",
            "OccurenceStartDate": "12/29/16 6:20",
            "X_Coord": "6786569.5",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0391528",
            "PrimaryViolation": "PC 459 Burglary",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "12/29/16 6:50",
            "ReportDate": "12/29/16 7:06",
            "Neighborhood": "Sloughhouse",
            "OccurenceCity": "Elk Grove",
            "District": "South",
            "OccurenceLocation": "12300 Block of Vineyard Hills Dr",
            "Y_Coord": "1938913.375",
            "lng": "-121.2153703",
            "lat": "38.4829933",
            "OccurenceStartDate": "12/29/16 6:50",
            "X_Coord": "6786755.5",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0391380",
            "PrimaryViolation": "PC 212.5(A) Robbery:First Degree:Cab/Etc/Inhabited Dwelling",
            visible: ko.observable(true),
            boolCheck: true
        },
        {
            "OccurenceEndDate": "12/30/16 17:30",
            "ReportDate": "12/30/16 22:20",
            "Neighborhood": "Wilton",
            "OccurenceCity": "Elk Grove",
            "District": "South",
            "OccurenceLocation": "9700 Block of Grant Line Rd",
            "Y_Coord": "1909532.125",
            "lng": "-121.2554151",
            "lat": "38.4752927",
            "OccurenceStartDate": "12/30/16 7:00",
            "X_Coord": "6753642",
            "OccurenceZipCode": "95624",
            "ActivityNumber": "2016-0393247",
            "PrimaryViolation": "PC 459 Burglary",
            visible: ko.observable(true),
            boolCheck: true
        }
];
		
//Sets the markers on the map within the initialize function
    //Sets the infoWindows to each individual marker
    //The markers are inidividually set using a for loop
function setMarkers(markerLocation) {
    for(i=0; i<markerLocation.length; i++) {
        markerLocation[i].holdMarker = new google.maps.Marker({
          position: new google.maps.LatLng(markerLocation[i].lat, markerLocation[i].lng),
          map: map,
          title: markerLocation[i].PrimaryViolation,
          icon: {
            url: 'img/handcuffs.png',
            size: new google.maps.Size(64, 64),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(12.5, 40)
            },
          shape: {
            coords: [1,64,-64,-64,1],
            type: 'poly'
          }  
        });

        //infoWindow content attached to each marker
        markerLocation[i].contentString = '<strong>' + 
                                    markerLocation[i].PrimaryViolation + '</strong><br><p>' + 
                                    markerLocation[i].OccurenceLocation + '<br>' + 
                                    markerLocation[i].OccurenceCity + '<br>' +
                                    'Reported: ' + markerLocation[i].ReportDate;

        var infowindow = new google.maps.InfoWindow({
            content: markerLocation[i].contentString
        });

        //Click on marker to view infoWindow and zoom in
        new google.maps.event.addListener(markerLocation[i].holdMarker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(markerLocation[i].contentString);
            infowindow.open(map,this);
            var windowWidth = $(window).width();
            if(windowWidth <= 1080) {
                map.setZoom(14);
            } else if(windowWidth > 1080) {
                map.setZoom(16);  
            }
            map.setCenter(marker.getPosition());

			if (marker.getAnimation() !== null) {
			  marker.setAnimation(null);
			} else {
		      marker.setAnimation(google.maps.Animation.BOUNCE);
		      setTimeout(function(){ marker.setAnimation(null); }, 1450);

		  	}

          }; 
        })(markerLocation[i].holdMarker, i));
        
        //Click nav element to view infoWindow, zoom in and center location on click
        var searchNav = $('#' + markerLocation[i].ActivityNumber);
        searchNav.click((function(marker, i) {
          return function() {
            infowindow.setContent(markerLocation[i].contentString);
            infowindow.open(map,marker);
            map.setZoom(16);
            map.setCenter(marker.getPosition());
          }; 
        })(markerLocation[i].holdMarker, i));
    }
}

//Query through the locations in nav bar with knockoutJS
//displays only markers and navigation results that match query result
var viewModel = {
    query: ko.observable(''),
};

viewModel.markers = ko.dependentObservable(function() {
    var self = this;
    var search = self.query().toLowerCase();
    return ko.utils.arrayFilter(markers, function(marker) {
    if (marker.PrimaryViolation.toLowerCase().indexOf(search) >= 0) {
            marker.boolCheck = true;
            return marker.visible(true);
        } else {
            marker.boolCheck = false;
            setAllMap();
            return marker.visible(false);
        }
    });       
}, viewModel);

ko.applyBindings(viewModel);

//show or hide markers in sync with nav
$("#input").keyup(function() {
	setAllMap();
});

//Hide and Show entire Nav/Search Bar on click
    // Hide/Show Bound to the arrow button
    //Nav is repsonsive to smaller screen sizes
var isNavOpen = true;
function hideNav() {
    $("#search-nav").animate({
                height: 0, 
            }, 500);
            setTimeout(function() {
                $("#search-nav").hide();
            }, 500);    
            $("#arrow").attr("src", "img/down-arrow.png");
            isNavOpen = false;
}
function showNav() {
    $("#search-nav").show();
            var scrollerHeight = $("#scroller").height() + 55;
            if($(window).height() < 600) {
                $("#search-nav").animate({
                    height: scrollerHeight - 100,
                }, 500, function() {
                    $(this).css('height','auto').css("max-height", 439);
                });  
            } else {
            $("#search-nav").animate({
                height: scrollerHeight,
            }, 500, function() {
                $(this).css('height','auto').css("max-height", 549);
            });
            }
            $("#arrow").attr("src", "img/up-arrow.png");
            isNavOpen = true;
}

function hideNav() {
    if(isNavOpen === true) {
            hideNav();
            
    } else {
            showNav();  
    }
}
$("#arrow").click(hideNav);

//Hide Nav if screen width is resized to < 850 or height < 595
//Show Nav if screen is resized to >= 850 or height is >= 595
    //Function is run when window is resized
$(window).resize(function() {
    var windowWidth = $(window).width();
    if ($(window).width() < 850 && isNavOpen === true) {
            hideNav();
        } else if($(window).height() < 595 && isNavOpen === true) {
            hideNav();
        }
    if ($(window).width() >= 850 && isNavOpen === false) {
            if($(window).height() > 595) {
                showNav();
            }
        } else if($(window).height() >= 595 && isNavOpen === false) {
            if($(window).width() > 850) {
                showNav();
            }     
        }    
});

//Expand .forecast div on click to see Weather Underground forecast
//and shrink back when additionally clicked
    //size is repsonsive to smaller screens
var weatherContainer = $("#weather-image-container");
var isWeatherVisible = false;
weatherContainer.click(function() {
    if(isWeatherVisible === false) {
        if($(window).width() < 670) {
            $(".forecast li").css("display", "block");
            weatherContainer.animate({
                width: "245"
            }, 500);
        } else {
            $(".forecast li").css("display", "inline-block");
            weatherContainer.animate({
                width: "380"
            }, 500);
        }
        isWeatherVisible = true;
    } else {
        weatherContainer.animate({
        width: "80"
    }, 500);
        isWeatherVisible = false;
    }
});

weatherContainer.click();

//GET Weather Underground JSON
//If error on GET JSON, display message
var weatherUgUrl = "http://api.wunderground.com/api/67b2781c84afc2c3/conditions/q/CA/Sacramento.json";

$.getJSON(weatherUgUrl, function(data) {
    var list = $(".forecast ul");
    detail = data.current_observation;
    list.append('<li>Temp: ' + detail.temp_f + '° F</li>');
    list.append('<li><img style="width: 25px" src="' + detail.icon_url + '">  ' + detail.icon + '</li>');
}).error(function(e){
        $(".forecast").append('<p style="text-align: center;">Sorry! Weather Underground</p><p style="text-align: center;">Could Not Be Loaded</p>');
    });

//Hide and show Weather forecast div from screen on click
var isWeatherImageVisible = true;
var hideWeatherArrow = $("#hide-weather").find("img");
function hideWeather() {
    if(isWeatherImageVisible === true) {
            $("#weather-image-container").animate({
                height: 0,
                paddingTop: 0
            }, 300);
        isWeatherImageVisible = false;
        hideWeatherArrow.attr("src", "img/small-down-arrow.png"); 
    } else {
            $("#weather-image-container").animate({
                height: 60,
                paddingTop: 5
            }, 300);
        isWeatherImageVisible = true;
        hideWeatherArrow.attr("src", "img/small-up-arrow.png");
    }
}

$("#hide-weather").click(hideWeather);
