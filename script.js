// Cesium Token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNjU2NjRlMi01MWIzLTRmYTAtYTIzZS0yMDk1MjU0OGYxZmYiLCJpZCI6Mzg4MDgwLCJpYXQiOjE3NzQxMDUyNDh9.J20aoeuHB9GJnk05q9_l-X-xFGPc1ilA7Ft6PR27fjQ';

// City Data
const citiesData = [
{ city: "New Delhi", lat: 28.6139, lng: 77.2090, firCount: 1500, pendingFIR: 320 },
{ city: "Mumbai", lat: 19.0760, lng: 72.8777, firCount: 1450, pendingFIR: 310 },
{ city: "Kolkata", lat: 22.5726, lng: 88.3639, firCount: 1380, pendingFIR: 295 },
{ city: "Bangalore", lat: 12.9716, lng: 77.5946, firCount: 1320, pendingFIR: 280 },
{ city: "Chennai", lat: 13.0827, lng: 80.2707, firCount: 1250, pendingFIR: 265 },
{ city: "Hyderabad", lat: 17.3850, lng: 78.4867, firCount: 1180, pendingFIR: 250 },
{ city: "Pune", lat: 18.5204, lng: 73.8567, firCount: 1120, pendingFIR: 240 },
{ city: "Ahmedabad", lat: 23.0225, lng: 72.5714, firCount: 1080, pendingFIR: 230 },
{ city: "Surat", lat: 21.1702, lng: 72.8311, firCount: 1050, pendingFIR: 220 },
{ city: "Jaipur", lat: 26.9124, lng: 75.7873, firCount: 1020, pendingFIR: 215 },
{ city: "Lucknow", lat: 26.8467, lng: 80.9462, firCount: 980, pendingFIR: 210 },
{ city: "Kanpur", lat: 26.4499, lng: 80.3319, firCount: 950, pendingFIR: 200 },
{ city: "Nagpur", lat: 21.1458, lng: 79.0882, firCount: 920, pendingFIR: 195 },
{ city: "Indore", lat: 22.7196, lng: 75.8577, firCount: 890, pendingFIR: 185 },
{ city: "Thane", lat: 19.2183, lng: 72.9781, firCount: 860, pendingFIR: 180 },
{ city: "Bhopal", lat: 23.2599, lng: 77.4126, firCount: 830, pendingFIR: 175 },
{ city: "Patna", lat: 25.5941, lng: 85.1376, firCount: 810, pendingFIR: 170 },
{ city: "Vadodara", lat: 22.3072, lng: 73.1812, firCount: 790, pendingFIR: 165 },
{ city: "Ghaziabad", lat: 28.6692, lng: 77.4538, firCount: 770, pendingFIR: 160 },
{ city: "Ludhiana", lat: 30.9010, lng: 75.8573, firCount: 750, pendingFIR: 155 },
{ city: "Agra", lat: 27.1767, lng: 78.0081, firCount: 730, pendingFIR: 150 },
{ city: "Nashik", lat: 19.9975, lng: 73.7898, firCount: 710, pendingFIR: 145 },
{ city: "Faridabad", lat: 28.4089, lng: 77.3178, firCount: 690, pendingFIR: 140 },
{ city: "Meerut", lat: 29.0168, lng: 77.7056, firCount: 670, pendingFIR: 135 },
{ city: "Rajkot", lat: 22.3039, lng: 70.8022, firCount: 650, pendingFIR: 130 },
{ city: "Kalyan-Dombivli", lat: 19.2403, lng: 73.1305, firCount: 640, pendingFIR: 128 },
{ city: "Vasai-Virar", lat: 19.4912, lng: 72.8054, firCount: 630, pendingFIR: 126 },
{ city: "Varanasi", lat: 25.3176, lng: 82.9739, firCount: 620, pendingFIR: 124 },
{ city: "Srinagar", lat: 34.0837, lng: 74.7973, firCount: 615, pendingFIR: 123 },
{ city: "Aurangabad", lat: 19.8762, lng: 75.3433, firCount: 610, pendingFIR: 122 },
{ city: "Dhanbad", lat: 23.7957, lng: 86.4304, firCount: 605, pendingFIR: 121 },
{ city: "Amritsar", lat: 31.6340, lng: 74.8723, firCount: 590, pendingFIR: 118 },
{ city: "Navi Mumbai", lat: 19.0330, lng: 73.0297, firCount: 580, pendingFIR: 116 },
{ city: "Prayagraj", lat: 25.4358, lng: 81.8463, firCount: 570, pendingFIR: 114 },
{ city: "Ranchi", lat: 23.3441, lng: 85.3096, firCount: 560, pendingFIR: 112 },
{ city: "Howrah", lat: 22.5958, lng: 88.2636, firCount: 550, pendingFIR: 110 },
{ city: "Coimbatore", lat: 11.0168, lng: 76.9558, firCount: 540, pendingFIR: 108 },
{ city: "Jabalpur", lat: 23.1815, lng: 79.9864, firCount: 530, pendingFIR: 106 },
{ city: "Gwalior", lat: 26.2183, lng: 78.1828, firCount: 520, pendingFIR: 104 },
{ city: "Vijayawada", lat: 16.5062, lng: 80.6480, firCount: 510, pendingFIR: 102 },
{ city: "Jodhpur", lat: 26.2389, lng: 73.0243, firCount: 500, pendingFIR: 100 },
{ city: "Madurai", lat: 9.9252, lng: 78.1198, firCount: 490, pendingFIR: 98 },
{ city: "Raipur", lat: 21.2514, lng: 81.6296, firCount: 480, pendingFIR: 96 },
{ city: "Kota", lat: 25.2138, lng: 75.8648, firCount: 470, pendingFIR: 94 },
{ city: "Chandigarh", lat: 30.7333, lng: 76.7794, firCount: 460, pendingFIR: 92 },
{ city: "Guwahati", lat: 26.1445, lng: 91.7362, firCount: 450, pendingFIR: 90 },
{ city: "Solapur", lat: 17.6599, lng: 75.9064, firCount: 440, pendingFIR: 88 },
{ city: "Hubli-Dharwad", lat: 15.3647, lng: 75.1240, firCount: 430, pendingFIR: 86 },
{ city: "Mysore", lat: 12.2958, lng: 76.6394, firCount: 420, pendingFIR: 84 },
{ city: "Tiruchirappalli", lat: 10.7905, lng: 78.7047, firCount: 410, pendingFIR: 82 },
{ city: "Bareilly", lat: 28.3670, lng: 79.4304, firCount: 405, pendingFIR: 81 },
{ city: "Aligarh", lat: 27.8974, lng: 78.0880, firCount: 400, pendingFIR: 80 },
{ city: "Tiruppur", lat: 11.1085, lng: 77.3411, firCount: 395, pendingFIR: 79 },
{ city: "Moradabad", lat: 28.8386, lng: 78.7733, firCount: 390, pendingFIR: 78 },
{ city: "Jalandhar", lat: 31.3260, lng: 75.5762, firCount: 385, pendingFIR: 77 },
{ city: "Bhubaneswar", lat: 20.2961, lng: 85.8245, firCount: 380, pendingFIR: 76 },
{ city: "Dehradun", lat: 30.3165, lng: 78.0322, firCount: 375, pendingFIR: 75 },
{ city: "Siliguri", lat: 26.7271, lng: 88.3953, firCount: 370, pendingFIR: 74 },
{ city: "Jamshedpur", lat: 22.8046, lng: 86.2029, firCount: 365, pendingFIR: 73 },
{ city: "Rourkela", lat: 22.2604, lng: 84.8536, firCount: 360, pendingFIR: 72 },
{ city: "Cuttack", lat: 20.4625, lng: 85.8830, firCount: 355, pendingFIR: 71 },
{ city: "Tirupati", lat: 13.6288, lng: 79.4192, firCount: 350, pendingFIR: 70 },
{ city: "Warangal", lat: 17.9689, lng: 79.5941, firCount: 345, pendingFIR: 69 },
{ city: "Guntur", lat: 16.3067, lng: 80.4365, firCount: 340, pendingFIR: 68 },
{ city: "Mangalore", lat: 12.9141, lng: 74.8560, firCount: 335, pendingFIR: 67 },
{ city: "Belgaum", lat: 15.8497, lng: 74.4977, firCount: 330, pendingFIR: 66 },
{ city: "Udaipur", lat: 24.5854, lng: 73.7125, firCount: 325, pendingFIR: 65 },
{ city: "Ajmer", lat: 26.4499, lng: 74.6399, firCount: 320, pendingFIR: 64 },
{ city: "Jammu", lat: 32.7266, lng: 74.8570, firCount: 315, pendingFIR: 63 },
{ city: "Amravati", lat: 20.9319, lng: 77.7523, firCount: 310, pendingFIR: 62 },
{ city: "Kolhapur", lat: 16.7050, lng: 74.2433, firCount: 305, pendingFIR: 61 },
{ city: "Jalgaon", lat: 21.0077, lng: 75.5626, firCount: 300, pendingFIR: 60 },
{ city: "Nanded", lat: 19.1383, lng: 77.3210, firCount: 295, pendingFIR: 59 },
{ city: "Chandrapur", lat: 19.9552, lng: 79.3031, firCount: 290, pendingFIR: 58 },
{ city: "Asansol", lat: 23.6739, lng: 86.9524, firCount: 285, pendingFIR: 57 },
{ city: "Durgapur", lat: 23.5204, lng: 87.3119, firCount: 280, pendingFIR: 56 },
{ city: "Bokaro", lat: 23.6693, lng: 86.1511, firCount: 275, pendingFIR: 55 },
{ city: "Sambalpur", lat: 21.4669, lng: 83.9843, firCount: 270, pendingFIR: 54 },
{ city: "Kakinada", lat: 16.9891, lng: 82.2475, firCount: 265, pendingFIR: 53 },
{ city: "Karimnagar", lat: 18.4363, lng: 79.1363, firCount: 260, pendingFIR: 52 },
{ city: "Nellore", lat: 14.4426, lng: 79.9865, firCount: 255, pendingFIR: 51 },
{ city: "Kurnool", lat: 15.8281, lng: 78.0373, firCount: 250, pendingFIR: 50 },
{ city: "Rajahmundry", lat: 17.0005, lng: 81.8040, firCount: 245, pendingFIR: 49 },
{ city: "Kadapa", lat: 14.4673, lng: 78.8242, firCount: 240, pendingFIR: 48 },
{ city: "Anantapur", lat: 14.6819, lng: 77.6000, firCount: 235, pendingFIR: 47 },
{ city: "Chittoor", lat: 13.2172, lng: 79.1003, firCount: 230, pendingFIR: 46 },
{ city: "Srikakulam", lat: 18.2946, lng: 83.8935, firCount: 225, pendingFIR: 45 },
{ city: "Vizianagaram", lat: 18.1151, lng: 83.4104, firCount: 220, pendingFIR: 44 },
{ city: "Prakasam", lat: 15.5057, lng: 79.2423, firCount: 215, pendingFIR: 43 },
{ city: "East Godavari", lat: 16.9775, lng: 81.7540, firCount: 210, pendingFIR: 42 },
{ city: "West Godavari", lat: 16.7420, lng: 81.0945, firCount: 205, pendingFIR: 41 },
{ city: "Krishna", lat: 16.1316, lng: 80.9035, firCount: 200, pendingFIR: 40 },
{ city: "Gaya", lat: 24.7914, lng: 85.0002, firCount: 195, pendingFIR: 39 },
{ city: "Bhagalpur", lat: 25.2438, lng: 86.9825, firCount: 190, pendingFIR: 38 },
{ city: "Muzaffarpur", lat: 26.1225, lng: 85.3906, firCount: 185, pendingFIR: 37 },
{ city: "Darbhanga", lat: 26.1674, lng: 85.8925, firCount: 180, pendingFIR: 36 },
{ city: "Purnia", lat: 25.7769, lng: 87.4769, firCount: 175, pendingFIR: 35 },
{ city: "Katihar", lat: 25.5278, lng: 87.5852, firCount: 170, pendingFIR: 34 },
{ city: "Arrah", lat: 25.5521, lng: 84.6614, firCount: 165, pendingFIR: 33 },
{ city: "Begusarai", lat: 25.3611, lng: 86.1285, firCount: 160, pendingFIR: 32 },
{ city: "Munger", lat: 25.2024, lng: 86.4934, firCount: 155, pendingFIR: 31 },
{ city: "Saharsa", lat: 25.8846, lng: 86.6086, firCount: 150, pendingFIR: 30 },
{ city: "Samastipur", lat: 25.7663, lng: 85.7872, firCount: 145, pendingFIR: 29 },
{ city: "Hajipur", lat: 25.6920, lng: 85.2067, firCount: 140, pendingFIR: 28 },
{ city: "Chapra", lat: 25.7835, lng: 84.7425, firCount: 135, pendingFIR: 27 },
{ city: "Motihari", lat: 26.5975, lng: 84.8441, firCount: 130, pendingFIR: 26 },
{ city: "Siwan", lat: 26.2206, lng: 84.3572, firCount: 125, pendingFIR: 25 },
{ city: "Gopalganj", lat: 26.3411, lng: 84.3722, firCount: 120, pendingFIR: 24 },
{ city: "Bettiah", lat: 26.8022, lng: 84.0060, firCount: 115, pendingFIR: 23 },
{ city: "Buxar", lat: 25.5621, lng: 83.9818, firCount: 110, pendingFIR: 22 },
{ city: "Sasaram", lat: 24.9515, lng: 83.8669, firCount: 105, pendingFIR: 21 },
{ city: "Aurangabad", lat: 24.7640, lng: 84.3742, firCount: 100, pendingFIR: 20 },
{ city: "Nawada", lat: 24.7471, lng: 85.5371, firCount: 95, pendingFIR: 19 },
{ city: "Jamui", lat: 24.8573, lng: 86.1622, firCount: 90, pendingFIR: 18 },
{ city: "Lakhisarai", lat: 25.1681, lng: 86.0902, firCount: 85, pendingFIR: 17 },
{ city: "Sheikhpura", lat: 25.1414, lng: 85.8060, firCount: 80, pendingFIR: 16 },
{ city: "Nalanda", lat: 25.0741, lng: 85.5845, firCount: 75, pendingFIR: 15 },
{ city: "Vaishali", lat: 25.9276, lng: 85.1613, firCount: 70, pendingFIR: 14 },
{ city: "Madhubani", lat: 26.3117, lng: 85.9934, firCount: 65, pendingFIR: 13 },
{ city: "Supaul", lat: 26.1560, lng: 86.5057, firCount: 60, pendingFIR: 12 },
{ city: "Araria", lat: 26.1512, lng: 87.5431, firCount: 55, pendingFIR: 11 },
{ city: "Kishanganj", lat: 25.5673, lng: 87.6286, firCount: 50, pendingFIR: 10 },
{ city: "Deoghar", lat: 24.3500, lng: 86.6500, firCount: 45, pendingFIR: 9 },
{ city: "Dumka", lat: 24.2597, lng: 87.2631, firCount: 40, pendingFIR: 8 },
{ city: "Giridih", lat: 24.1907, lng: 86.2729, firCount: 35, pendingFIR: 7 },
{ city: "Hazaribagh", lat: 23.9873, lng: 85.3973, firCount: 30, pendingFIR: 6 },
{ city: "Ramgarh", lat: 23.6463, lng: 85.4210, firCount: 25, pendingFIR: 5 },
{ city: "Chatra", lat: 24.2425, lng: 84.9424, firCount: 20, pendingFIR: 4 },
{ city: "Latehar", lat: 23.6295, lng: 84.8305, firCount: 15, pendingFIR: 3 },
{ city: "Lohardaga", lat: 23.4166, lng: 84.8191, firCount: 10, pendingFIR: 2 },
{ city: "Palamu", lat: 24.0345, lng: 84.1345, firCount: 8, pendingFIR: 2 },
{ city: "Garhwa", lat: 24.1072, lng: 83.9121, firCount: 6, pendingFIR: 1 },
{ city: "Simdega", lat: 22.6095, lng: 84.3536, firCount: 5, pendingFIR: 1 },
{ city: "Gumla", lat: 23.0510, lng: 84.7005, firCount: 4, pendingFIR: 1 },
{ city: "Khunti", lat: 23.2038, lng: 85.2321, firCount: 3, pendingFIR: 1 },
{ city: "Seraikela-Kharsawan", lat: 22.8266, lng: 85.8150, firCount: 3, pendingFIR: 1 },
{ city: "East Singhbhum", lat: 22.8046, lng: 86.2029, firCount: 2, pendingFIR: 0 },
{ city: "West Singhbhum", lat: 22.3500, lng: 85.4500, firCount: 2, pendingFIR: 0 },
{ city: "Godda", lat: 24.8167, lng: 87.2500, firCount: 2, pendingFIR: 0 },
{ city: "Sahibganj", lat: 24.9000, lng: 87.6500, firCount: 1, pendingFIR: 0 },
{ city: "Pakur", lat: 24.1500, lng: 87.6000, firCount: 1, pendingFIR: 0 },
{ city: "Panaji", lat: 15.4909, lng: 73.8278, firCount: 15, pendingFIR: 3 },
{ city: "Margao", lat: 15.2786, lng: 73.9533, firCount: 12, pendingFIR: 2 },
{ city: "Vasco da Gama", lat: 15.3989, lng: 73.8181, firCount: 10, pendingFIR: 2 },
{ city: "Mapusa", lat: 15.5930, lng: 73.8010, firCount: 8, pendingFIR: 1 },
{ city: "Ponda", lat: 15.3989, lng: 73.9589, firCount: 6, pendingFIR: 1 },
{ city: "Imphal", lat: 24.8170, lng: 93.9368, firCount: 45, pendingFIR: 9 },
{ city: "Thoubal", lat: 24.6221, lng: 94.0090, firCount: 35, pendingFIR: 7 },
{ city: "Bishnupur", lat: 24.6281, lng: 93.8351, firCount: 30, pendingFIR: 6 },
{ city: "Churachandpur", lat: 24.3381, lng: 93.6953, firCount: 25, pendingFIR: 5 },
{ city: "Senapati", lat: 25.1500, lng: 94.0000, firCount: 20, pendingFIR: 4 },
{ city: "Ukhrul", lat: 25.0333, lng: 94.3667, firCount: 15, pendingFIR: 3 },
{ city: "Kohima", lat: 25.6747, lng: 94.1085, firCount: 40, pendingFIR: 8 },
{ city: "Dimapur", lat: 25.9086, lng: 93.7338, firCount: 55, pendingFIR: 11 },
{ city: "Mokokchung", lat: 26.3239, lng: 94.5184, firCount: 30, pendingFIR: 6 },
{ city: "Tuensang", lat: 26.1333, lng: 94.8333, firCount: 20, pendingFIR: 4 },
{ city: "Wokha", lat: 26.1083, lng: 94.2667, firCount: 15, pendingFIR: 3 },
{ city: "Zunheboto", lat: 26.0167, lng: 94.5167, firCount: 10, pendingFIR: 2 },
{ city: "Phek", lat: 25.6167, lng: 94.5667, firCount: 8, pendingFIR: 1 },
{ city: "Kiphire", lat: 25.9000, lng: 94.8500, firCount: 5, pendingFIR: 1 },
{ city: "Longleng", lat: 26.3500, lng: 94.9500, firCount: 3, pendingFIR: 1 },
{ city: "Mon", lat: 26.4000, lng: 95.1000, firCount: 2, pendingFIR: 0 },
{ city: "Peren", lat: 25.5833, lng: 93.9500, firCount: 4, pendingFIR: 1 },
{ city: "Aizawl", lat: 23.7271, lng: 92.7179, firCount: 60, pendingFIR: 12 },
{ city: "Lunglei", lat: 23.2167, lng: 92.8833, firCount: 35, pendingFIR: 7 },
{ city: "Champhai", lat: 23.5000, lng: 93.3167, firCount: 20, pendingFIR: 4 },
{ city: "Serchhip", lat: 23.2833, lng: 92.9000, firCount: 15, pendingFIR: 3 },
{ city: "Kolasib", lat: 23.9833, lng: 92.6833, firCount: 25, pendingFIR: 5 },
{ city: "Lawngtlai", lat: 22.5833, lng: 92.9167, firCount: 10, pendingFIR: 2 },
{ city: "Mamit", lat: 23.9000, lng: 92.4000, firCount: 8, pendingFIR: 1 },
{ city: "Saiha", lat: 22.7500, lng: 92.9667, firCount: 5, pendingFIR: 1 },
{ city: "Shillong", lat: 25.5788, lng: 91.8930, firCount: 70, pendingFIR: 14 },
{ city: "Tura", lat: 25.5000, lng: 90.2000, firCount: 40, pendingFIR: 8 },
{ city: "Jowai", lat: 25.4500, lng: 92.2000, firCount: 25, pendingFIR: 5 },
{ city: "Nongstoin", lat: 25.5167, lng: 91.2667, firCount: 15, pendingFIR: 3 },
{ city: "Williamnagar", lat: 25.4833, lng: 90.6000, firCount: 10, pendingFIR: 2 },
{ city: "Baghmara", lat: 25.2000, lng: 90.6500, firCount: 8, pendingFIR: 1 },
{ city: "Resubelpara", lat: 25.6167, lng: 90.6333, firCount: 5, pendingFIR: 1 },
{ city: "Ampati", lat: 25.3333, lng: 90.3000, firCount: 4, pendingFIR: 0 },
{ city: "Agartala", lat: 23.8315, lng: 91.2868, firCount: 85, pendingFIR: 17 },
{ city: "Udaipur", lat: 23.5333, lng: 91.4833, firCount: 45, pendingFIR: 9 },
{ city: "Dharmanagar", lat: 24.3667, lng: 91.9833, firCount: 35, pendingFIR: 7 },
{ city: "Kailashahar", lat: 24.3000, lng: 92.0000, firCount: 25, pendingFIR: 5 },
{ city: "Belonia", lat: 23.2500, lng: 91.4500, firCount: 20, pendingFIR: 4 },
{ city: "Sonamura", lat: 23.7500, lng: 91.2500, firCount: 15, pendingFIR: 3 },
{ city: "Ambassa", lat: 23.9333, lng: 91.8500, firCount: 10, pendingFIR: 2 },
{ city: "Khowai", lat: 24.1000, lng: 91.7500, firCount: 8, pendingFIR: 1 },
{ city: "Sabroom", lat: 22.8333, lng: 91.2500, firCount: 5, pendingFIR: 1 },
{ city: "Sepahijala", lat: 23.7000, lng: 91.3500, firCount: 12, pendingFIR: 2 },
{ city: "Unakoti", lat: 24.2500, lng: 91.7000, firCount: 7, pendingFIR: 1 },
{ city: "North Tripura", lat: 24.4000, lng: 91.9000, firCount: 4, pendingFIR: 1 },
{ city: "South Tripura", lat: 23.3000, lng: 91.5000, firCount: 3, pendingFIR: 0 },
{ city: "West Tripura", lat: 23.8000, lng: 91.3000, firCount: 20, pendingFIR: 4 },
{ city: "Itanagar", lat: 27.0844, lng: 93.6053, firCount: 65, pendingFIR: 13 },
{ city: "Naharlagun", lat: 27.1000, lng: 93.6833, firCount: 40, pendingFIR: 8 },
{ city: "Pasighat", lat: 28.0667, lng: 95.3333, firCount: 30, pendingFIR: 6 },
{ city: "Along", lat: 28.1667, lng: 94.7667, firCount: 25, pendingFIR: 5 },
{ city: "Tezu", lat: 27.9333, lng: 96.1167, firCount: 20, pendingFIR: 4 },
{ city: "Roing", lat: 28.1500, lng: 95.8500, firCount: 15, pendingFIR: 3 },
{ city: "Namsai", lat: 27.7000, lng: 95.8833, firCount: 10, pendingFIR: 2 },
{ city: "Changlang", lat: 27.1500, lng: 95.8500, firCount: 15, pendingFIR: 3 },
{ city: "Tawang", lat: 27.5864, lng: 91.8583, firCount: 8, pendingFIR: 1 },
{ city: "Bomdila", lat: 27.2500, lng: 92.4000, firCount: 20, pendingFIR: 4 },
{ city: "Seppa", lat: 27.2833, lng: 92.9000, firCount: 12, pendingFIR: 2 },
{ city: "Ziro", lat: 27.6000, lng: 93.8333, firCount: 18, pendingFIR: 3 },
{ city: "Daporijo", lat: 27.8500, lng: 94.2000, firCount: 10, pendingFIR: 2 },
{ city: "Aalo", lat: 28.2000, lng: 94.8000, firCount: 8, pendingFIR: 1 },
{ city: "Yingkiong", lat: 28.4500, lng: 95.5000, firCount: 5, pendingFIR: 1 },
{ city: "Khonsa", lat: 27.2333, lng: 95.5167, firCount: 12, pendingFIR: 2 },
{ city: "Namsai", lat: 27.7000, lng: 95.8833, firCount: 6, pendingFIR: 1 },
{ city: "Dibrugarh", lat: 27.4833, lng: 94.9167, firCount: 75, pendingFIR: 15 },
{ city: "Jorhat", lat: 26.7500, lng: 94.2000, firCount: 60, pendingFIR: 12 },
{ city: "Silchar", lat: 24.8333, lng: 92.8000, firCount: 55, pendingFIR: 11 },
{ city: "Tezpur", lat: 26.6333, lng: 92.8000, firCount: 45, pendingFIR: 9 },
{ city: "Nagaon", lat: 26.3333, lng: 92.6667, firCount: 40, pendingFIR: 8 },
{ city: "Tinsukia", lat: 27.4903, lng: 95.3590, firCount: 50, pendingFIR: 10 },
{ city: "Goalpara", lat: 26.1333, lng: 90.6333, firCount: 35, pendingFIR: 7 },
{ city: "Karimganj", lat: 24.8667, lng: 92.3667, firCount: 30, pendingFIR: 6 },
{ city: "Hailakandi", lat: 24.6833, lng: 92.5833, firCount: 20, pendingFIR: 4 },
{ city: "Dhubri", lat: 26.0167, lng: 90.3333, firCount: 25, pendingFIR: 5 },
{ city: "Bongaigaon", lat: 26.4833, lng: 90.5333, firCount: 22, pendingFIR: 4 },
{ city: "Kokrajhar", lat: 26.4333, lng: 90.3167, firCount: 18, pendingFIR: 3 },
{ city: "Chirang", lat: 26.5000, lng: 90.4000, firCount: 15, pendingFIR: 3 },
{ city: "Baksa", lat: 26.4500, lng: 90.4500, firCount: 12, pendingFIR: 2 },
{ city: "Udalguri", lat: 26.6667, lng: 92.0000, firCount: 20, pendingFIR: 4 },
{ city: "Darrang", lat: 26.5000, lng: 92.1000, firCount: 18, pendingFIR: 3 },
{ city: "Sonitpur", lat: 26.6000, lng: 92.8000, firCount: 35, pendingFIR: 7 },
{ city: "Lakhimpur", lat: 27.2333, lng: 94.1000, firCount: 25, pendingFIR: 5 },
{ city: "Sivasagar", lat: 26.9833, lng: 94.6333, firCount: 30, pendingFIR: 6 },
{ city: "Golaghat", lat: 26.5167, lng: 93.9667, firCount: 28, pendingFIR: 5 },
{ city: "Majuli", lat: 27.0000, lng: 94.2000, firCount: 8, pendingFIR: 1 },
{ city: "Dhemaji", lat: 27.4500, lng: 94.5500, firCount: 15, pendingFIR: 3 },
{ city: "Leh", lat: 34.1526, lng: 77.5771, firCount: 5, pendingFIR: 1 },
{ city: "Kargil", lat: 34.5533, lng: 76.1333, firCount: 3, pendingFIR: 0 },
{ city: "Udhampur", lat: 33.3264, lng: 75.1327, firCount: 18, pendingFIR: 3 },
{ city: "Katra", lat: 32.9999, lng: 74.9496, firCount: 25, pendingFIR: 5 },
{ city: "Anantnag", lat: 33.7333, lng: 75.1500, firCount: 35, pendingFIR: 7 },
{ city: "Baramulla", lat: 34.2083, lng: 74.3333, firCount: 40, pendingFIR: 8 },
{ city: "Gurgaon", lat: 28.4595, lng: 77.0266, firCount: 680, pendingFIR: 145 },
{ city: "Panipat", lat: 29.3909, lng: 76.9635, firCount: 520, pendingFIR: 110 },
{ city: "Karnal", lat: 29.6857, lng: 76.9905, firCount: 480, pendingFIR: 100 },
{ city: "Hisar", lat: 29.1492, lng: 75.7239, firCount: 450, pendingFIR: 95 },
{ city: "Rohtak", lat: 28.8955, lng: 76.6066, firCount: 420, pendingFIR: 88 },
{ city: "Sonipat", lat: 28.9931, lng: 77.0151, firCount: 390, pendingFIR: 82 },
{ city: "Ambala", lat: 30.3782, lng: 76.7794, firCount: 360, pendingFIR: 75 },
{ city: "Kurukshetra", lat: 29.9692, lng: 76.8790, firCount: 330, pendingFIR: 68 },
{ city: "Yamunanagar", lat: 30.1290, lng: 77.2683, firCount: 310, pendingFIR: 65 },
{ city: "Panchkula", lat: 30.6945, lng: 76.8600, firCount: 290, pendingFIR: 60 },
{ city: "Sirsa", lat: 29.5353, lng: 75.0225, firCount: 270, pendingFIR: 55 },
{ city: "Bhiwani", lat: 28.7931, lng: 76.1410, firCount: 250, pendingFIR: 52 },
{ city: "Rewari", lat: 28.1988, lng: 76.6186, firCount: 230, pendingFIR: 48 },
{ city: "Alwar", lat: 27.5524, lng: 76.6170, firCount: 380, pendingFIR: 80 },
{ city: "Bharatpur", lat: 27.2183, lng: 77.4905, firCount: 340, pendingFIR: 72 },
{ city: "Sikar", lat: 27.6094, lng: 75.1397, firCount: 320, pendingFIR: 68 },
{ city: "Jhunjhunu", lat: 28.1325, lng: 75.3989, firCount: 300, pendingFIR: 64 },
{ city: "Bikaner", lat: 28.0229, lng: 73.3119, firCount: 410, pendingFIR: 86 },
{ city: "Mount Abu", lat: 24.5927, lng: 72.7107, firCount: 150, pendingFIR: 30 },
{ city: "Tonk", lat: 26.1667, lng: 75.7833, firCount: 280, pendingFIR: 58 },
{ city: "Bhilwara", lat: 25.3476, lng: 74.6406, firCount: 310, pendingFIR: 65 },
{ city: "Chittorgarh", lat: 24.8872, lng: 74.6254, firCount: 290, pendingFIR: 60 },
{ city: "Shimla", lat: 31.1048, lng: 77.1734, firCount: 220, pendingFIR: 45 },
{ city: "Manali", lat: 32.2394, lng: 77.1892, firCount: 90, pendingFIR: 18 },
{ city: "Dharamshala", lat: 32.2190, lng: 76.3234, firCount: 180, pendingFIR: 36 },
{ city: "Solan", lat: 30.9052, lng: 77.0989, firCount: 240, pendingFIR: 50 },
{ city: "Mandi", lat: 31.7115, lng: 76.9259, firCount: 210, pendingFIR: 44 },
{ city: "Kullu", lat: 31.9540, lng: 77.1090, firCount: 130, pendingFIR: 26 },
{ city: "Haridwar", lat: 29.9457, lng: 78.1642, firCount: 350, pendingFIR: 74 },
{ city: "Roorkee", lat: 29.8678, lng: 77.8925, firCount: 320, pendingFIR: 68 },
{ city: "Haldwani", lat: 29.2167, lng: 79.5167, firCount: 290, pendingFIR: 60 },
{ city: "Nainital", lat: 29.3869, lng: 79.4542, firCount: 160, pendingFIR: 32 },
{ city: "Visakhapatnam", lat: 17.6868, lng: 83.2185, firCount: 580, pendingFIR: 122 },
{ city: "Vellore", lat: 12.9167, lng: 79.1333, firCount: 340, pendingFIR: 72 },
{ city: "Thoothukudi", lat: 8.7643, lng: 78.1348, firCount: 310, pendingFIR: 65 },
{ city: "Dindigul", lat: 10.3677, lng: 77.9712, firCount: 290, pendingFIR: 60 },
{ city: "Thanjavur", lat: 10.7862, lng: 79.1387, firCount: 330, pendingFIR: 70 },
{ city: "Ramanathapuram", lat: 9.3620, lng: 78.8364, firCount: 220, pendingFIR: 45 },
{ city: "Sivakasi", lat: 9.4510, lng: 77.8125, firCount: 180, pendingFIR: 36 },
{ city: "Karur", lat: 10.9603, lng: 78.0769, firCount: 250, pendingFIR: 52 },
{ city: "Nagercoil", lat: 8.1780, lng: 77.4335, firCount: 270, pendingFIR: 56 },
{ city: "Hosur", lat: 12.7419, lng: 77.8324, firCount: 240, pendingFIR: 50 },
{ city: "Krishnagiri", lat: 12.5206, lng: 78.2128, firCount: 210, pendingFIR: 44 },
{ city: "Dharmapuri", lat: 12.1286, lng: 78.1625, firCount: 190, pendingFIR: 38 },
{ city: "Pudukkottai", lat: 10.3838, lng: 78.8228, firCount: 170, pendingFIR: 34 },
{ city: "Ariyalur", lat: 11.1383, lng: 79.0773, firCount: 140, pendingFIR: 28 },
{ city: "Perambalur", lat: 11.2418, lng: 78.8771, firCount: 130, pendingFIR: 26 },
{ city: "Cuddalore", lat: 11.7444, lng: 79.7650, firCount: 200, pendingFIR: 40 },
{ city: "Villupuram", lat: 11.9422, lng: 79.5065, firCount: 180, pendingFIR: 36 },
{ city: "Kanchipuram", lat: 12.8342, lng: 79.7036, firCount: 320, pendingFIR: 68 },
{ city: "Tiruvannamalai", lat: 12.2253, lng: 79.0737, firCount: 260, pendingFIR: 54 },
{ city: "Nagapattinam", lat: 10.7557, lng: 79.8405, firCount: 150, pendingFIR: 30 },
{ city: "Mayiladuthurai", lat: 10.9631, lng: 79.6450, firCount: 120, pendingFIR: 24 },
{ city: "Tiruvarur", lat: 10.7670, lng: 79.5050, firCount: 140, pendingFIR: 28 },
{ city: "Davangere", lat: 14.4667, lng: 75.9233, firCount: 230, pendingFIR: 48 },
{ city: "Bellary", lat: 15.1394, lng: 76.9211, firCount: 280, pendingFIR: 58 },
{ city: "Shimoga", lat: 13.9294, lng: 75.5658, firCount: 250, pendingFIR: 52 },
{ city: "Tumkur", lat: 13.3392, lng: 77.1004, firCount: 300, pendingFIR: 64 },
{ city: "Bidar", lat: 17.9134, lng: 77.5335, firCount: 260, pendingFIR: 54 },
{ city: "Raichur", lat: 16.2120, lng: 77.3562, firCount: 240, pendingFIR: 50 },
{ city: "Bijapur", lat: 16.8302, lng: 75.7100, firCount: 270, pendingFIR: 56 },
{ city: "Bagalkot", lat: 16.1833, lng: 75.7000, firCount: 220, pendingFIR: 45 },
{ city: "Gadag", lat: 15.4259, lng: 75.4710, firCount: 200, pendingFIR: 40 },
{ city: "Haveri", lat: 14.7950, lng: 75.3960, firCount: 180, pendingFIR: 36 },
{ city: "Uttara Kannada", lat: 14.7500, lng: 74.5000, firCount: 150, pendingFIR: 30 },
{ city: "Udupi", lat: 13.3410, lng: 74.7425, firCount: 190, pendingFIR: 38 },
{ city: "Chikmagalur", lat: 13.3148, lng: 75.7776, firCount: 160, pendingFIR: 32 },
{ city: "Hassan", lat: 13.0048, lng: 76.1028, firCount: 210, pendingFIR: 44 },
{ city: "Kodagu", lat: 12.3333, lng: 75.7500, firCount: 110, pendingFIR: 22 },
{ city: "Mandya", lat: 12.5214, lng: 76.8950, firCount: 240, pendingFIR: 50 },
{ city: "Ramanagara", lat: 12.7176, lng: 77.2868, firCount: 180, pendingFIR: 36 },
{ city: "Bangalore Rural", lat: 13.1000, lng: 77.4000, firCount: 150, pendingFIR: 30 },
{ city: "Kolar", lat: 13.1359, lng: 78.1291, firCount: 200, pendingFIR: 40 },
{ city: "Chikkaballapura", lat: 13.3360, lng: 77.7292, firCount: 170, pendingFIR: 34 }
];
// Danger Level Calculator
function getDangerInfo(firCount) {
  if (firCount > 1000) return { level: "Critical", color: "#ff0000", height: 50000 };
  if (firCount > 600) return { level: "High Risk", color: "#ffa500", height: 40000 };
  if (firCount > 300) return { level: "Moderate", color: "#ffff00", height: 30000 };
  return { level: "Safe", color: "#00ff00", height: 20000 };
}
// Initialization Of Cesium Viewer
const viewer = new Cesium.Viewer('cesiumContainer', {
  animation: false,
  baseLayerPicker: true,
  fullscreenButton: true,
  geocoder: true,
  homeButton: true,
  infoBox: true,
  sceneModePicker: true,
  selectionIndicator: true,
  timeline: false,
  navigationHelpButton: false,
  baseLayer: Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3954))
});
viewer.cesiumWidget.creditContainer.style.display = "none";

// Update Sidebar Stats
document.getElementById('total-cities').textContent = citiesData.length;
document.getElementById('critical-cities').textContent = citiesData.filter(c => c.firCount > 1000).length;
const totalPending = citiesData.reduce((sum, c) => sum + (c.pendingFIR || 0), 0);
document.getElementById('pending-firs').textContent = totalPending;

// Add City Markers
citiesData.forEach(city => {
  const danger = getDangerInfo(city.firCount);
  
  viewer.entities.add({
    name: city.city,
    position: Cesium.Cartesian3.fromDegrees(city.lng, city.lat),
    point: {
      pixelSize: 15,
      color: Cesium.Color.fromCssColorString(danger.color),
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2,
      scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5)
    },
    label: {
      text: city.city,
      font: '14px sans-serif',
      fillColor: Cesium.Color.WHITE,
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 2,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -20),
      scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e7, 0.3)
    },
    description: `
      <div style="padding: 10px; background: rgba(0,0,0,0.9); color: white; border-radius: 8px; min-width: 200px;">
        <h3 style="margin: 0 0 10px 0; color: ${danger.color};">${city.city}</h3>
        <div><strong>Total FIR:</strong> ${city.firCount}</div>
        <div><strong>Pending FIR:</strong> ${city.pendingFIR}</div>
        <div><strong>Status:</strong> <span style="color: ${danger.color}">${danger.level}</span></div>
        <div><strong>Coordinates:</strong> ${city.lat.toFixed(4)}°, ${city.lng.toFixed(4)}°</div>
      </div>`
  });

  // Vertical pole
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(city.lng, city.lat),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        city.lng, city.lat, 0,
        city.lng, city.lat, danger.height
      ]),
      width: 3,
      material: new Cesium.PolylineGlowMaterialProperty({
        glowPower: 0.2,
        color: Cesium.Color.fromCssColorString(danger.color)
      })
    }
  });
});

// GET USER LOCATION & ADD PIN
const locationDiv = document.getElementById('location-status');
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      locationDiv.innerHTML = `<span class="success">✅ Your Location: ${lat.toFixed(4)}°, ${lng.toFixed(4)}°</span>`;
      
      // User Pin Entity
      viewer.entities.add({
        name: "Your Location",
        position: Cesium.Cartesian3.fromDegrees(lng, lat),
        billboard: {
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2IDBDNy4xNjMgMCAwIDcuMTYzIDAgMTZjMCA4LjgzNyAxNiAzMiAxNiAzMlMzMiAyNC44MzcgMzIgMTZjMC04LjgzNy03LjE2My0xNi0xNi0xNnoiIGZpbGw9IiMwMGZmZmYiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSI2IiBmaWxsPSIjMGExZjFlIi8+PC9zdmc+',
          width: 32,
          height: 48,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -10),
          scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.8)
        },
        label: {
          text: "YOU",
          font: 'bold 16px sans-serif',
          fillColor: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 3,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -55)
        },
        description: `
          <div style="padding: 10px; background: rgba(0,255,255,0.2); color: white; border-radius: 8px; min-width: 200px;">
            <strong>Your Current Location</strong><br>
            ${lat.toFixed(4)}°, ${lng.toFixed(4)}°
          </div>`
      });

      // Smooth fly to user
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lng, lat, 100000),
        duration: 3,
        orientation: { heading: Cesium.Math.toRadians(0), pitch: Cesium.Math.toRadians(-45) }
      });
    },
    (error) => {
      locationDiv.innerHTML = `<span style="color: #ff6666;">⚠️ Location access denied - Showing all cities</span>`;
      viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(78.9629, 20.5937, 4000000), duration: 3 });
    }
  );
} else {
  locationDiv.innerHTML = `<span style="color: #ff6666;">⚠️ Geolocation not supported</span>`;
}

//Initial Camera View
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(78.9629, 20.5937, 5000000),
  orientation: { heading: Cesium.Math.toRadians(0), pitch: Cesium.Math.toRadians(-45) }
});

viewer.scene.screenSpaceCameraController.enableRotate = true;

//Zoom Controls
document.getElementById('zoom-in').addEventListener('click', () => viewer.camera.zoomIn(500000, 0.5));
document.getElementById('zoom-out').addEventListener('click', () => viewer.camera.zoomOut(500000, 0.5));

viewer.scene.screenSpaceCameraController.zoomEventTypes = [Cesium.CameraEventType.WHEEL, Cesium.CameraEventType.PINCH];

document.addEventListener('keydown', (e) => {
  const cam = viewer.camera;
  if (e.key === '+' || e.key === '=') cam.zoomIn(500000, 0.3);
  if (e.key === '-') cam.zoomOut(500000, 0.3);
  if (e.key === 'Home') cam.flyTo({ destination: Cesium.Cartesian3.fromDegrees(78.9629, 20.5937, 5000000), duration: 2, orientation: { heading: 0, pitch: Cesium.Math.toRadians(-45) } });
});

viewer.screenSpaceEventHandler.setInputAction((click) => {
  const ray = viewer.camera.getPickRay(click.position);
  const cartesian = viewer.scene.globe.pick(ray, viewer.scene);
  if (cartesian) {
    viewer.camera.flyTo({ destination: cartesian, offset: new Cesium.HeadingPitchRange(viewer.camera.heading, viewer.camera.pitch, 500000), duration: 1 });
  }
}, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

//Home Button
const homeButton = document.createElement('button');
homeButton.className = 'zoom-btn';
homeButton.innerHTML = '🏠';
homeButton.title = 'Reset View';
homeButton.style.marginTop = '10px';
homeButton.onclick = () => viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(78.9629, 20.5937, 5000000), duration: 2, orientation: { heading: 0, pitch: Cesium.Math.toRadians(-45) } });
document.querySelector('.zoom-controls').appendChild(homeButton);

// Open Dashboard (Single instance)
function openDashboard() {
  localStorage.setItem("citiesData", JSON.stringify(citiesData));
  window.location.href = "dashboard.html";
}