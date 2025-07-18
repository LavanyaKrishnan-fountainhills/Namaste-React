const resList = [
  {
    "type": "restaurant",
    "data": {
      "id": "101",
      "name": "Burger King",
      "cloudinaryImageId": "burger_king_image",
      "cuisines": ["Burgers", "American"],
      "avgRating": "4.1",
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 2.5,
      "area": "Indiranagar",
      "city": "Bangalore",
      "feeDetails": {
        "fees": [{"name": "distance", "fee": 2000}],
        "totalFees": 2000
      },
      "aggregatedDiscountInfo": {
        "header": "40% OFF",
        "shortDescriptionList": [{
          "meta": "40% off up to ₹80",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }]
      },
      "veg": false,
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2.5
      }
    }
  },
  {
    "type": "restaurant",
    "data": {
      "id": "102",
      "name": "Subway",
      "cloudinaryImageId": "subway_image",
      "cuisines": ["Healthy Food", "Sandwiches"],
      "avgRating": "3.9",
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 1.8,
      "area": "Koramangala",
      "city": "Bangalore",
      "feeDetails": {
        "fees": [{"name": "distance", "fee": 1500}],
        "totalFees": 1500
      },
      "aggregatedDiscountInfo": {
        "header": "30% OFF",
        "shortDescriptionList": [{
          "meta": "30% off up to ₹60",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }]
      },
      "veg": true,
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.8
      }
    }
  },
  {
    "type": "restaurant",
    "data": {
      "id": "103",
      "name": "KFC",
      "cloudinaryImageId": "kfc_image",
      "cuisines": ["Chicken", "Fast Food"],
      "avgRating": "4.3",
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 3.5,
      "area": "BTM Layout",
      "city": "Bangalore",
      "feeDetails": {
        "fees": [{"name": "distance", "fee": 2500}],
        "totalFees": 2500
      },
      "aggregatedDiscountInfo": {
        "header": "20% OFF",
        "shortDescriptionList": [{
          "meta": "20% off up to ₹100",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }]
      },
      "veg": false,
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3.5
      }
    }
  },
  {
    "type": "restaurant",
    "data": {
      "id": "104",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "a2b_image",
      "cuisines": ["South Indian", "Sweets", "Veg"],
      "avgRating": "4.5",
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 2.2,
      "area": "Jayanagar",
      "city": "Bangalore",
      "feeDetails": {
        "fees": [{"name": "distance", "fee": 1800}],
        "totalFees": 1800
      },
      "aggregatedDiscountInfo": {
        "header": "15% OFF",
        "shortDescriptionList": [{
          "meta": "15% off up to ₹50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }]
      },
      "veg": true,
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.2
      }
    }
  },
  {
    "type": "restaurant",
    "data": {
      "id": "105",
      "name": "Behrouz Biryani",
      "cloudinaryImageId": "behrouz_image",
      "cuisines": ["Biryani", "Mughlai"],
      "avgRating": "4.4",
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 4.0,
      "area": "HSR Layout",
      "city": "Bangalore",
      "feeDetails": {
        "fees": [{"name": "distance", "fee": 3000}],
        "totalFees": 3000
      },
      "aggregatedDiscountInfo": {
        "header": "60% OFF",
        "shortDescriptionList": [{
          "meta": "60% off up to ₹120",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }]
      },
      "veg": false,
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.0
      }
    }
  }
];

export default resList