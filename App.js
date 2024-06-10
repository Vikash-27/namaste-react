import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className = "header">
            <div className="logo-container">
            <img  className = "logo" src ="https://www.creativefabrica.com/wp-content/uploads/2022/10/27/Delivery-Logo-Graphics-43489914-1.jpg"/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            </div>
    )
}
// const ResObj = {
//     resName: "Alfa",
//     cuisine: "Biryanis,North Indian",
//     resLogo: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
//     rating: "4.4 stars",
//     deliveryTime: "30 minutes"
// }

const RestObjApiData = {
    "name": "Kannur food kitchen",
    "cloudinaryImageId": "a27weqanhnszqiuzsoik",
    "locality": "1st Stage",
    "areaName": "BTM Layout",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Kerala",
      "Biryani",
      "Beverages"
    ],
    "avgRating": 4,
    "parentId": "114756",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 36,
      "lastMileTravel": 2.9,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "2.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-10 23:59:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
      }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
  };
  

const RestaurantCard = (props) =>{
    const {ResObj} = props
    return(
        <div className="res-card">
            <img  className = "res-logo" alt = "res-img" src = " https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"/>
            <h3>{ResObj.name}</h3>
            <h4>{ResObj.cuisines.join(", ")}</h4>
            <h4>{ResObj.avgRating} stars </h4>
            <h4>{ResObj.sla.deliveryTime} mins</h4>
        </div>
    )
}

const Body = () =>{
    return (
        <div className = "body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
            <RestaurantCard ResObj = {RestObjApiData} />
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className = "App"> 
        <Header />
        <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);     

