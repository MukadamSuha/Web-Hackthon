var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.orderByField = 'rollno';
  $scope.reverseSort = false;

$scope.data={
        students:[
{


 	"rollno": 1,
 	"name": " ANERAO AMOGH HEMANT",
 	"mcq":  7 
 	
 }, {
 	"rollno": 2,
 	"name": " ARONDEKAR GANESH CHANDRAKANT",
 	"mcq": 10 
 	
 }, {
 	"rollno": 3,
 	"name": " BAGAVE RENUKA RAVINDRA",
 	"mcq": 10 
 	
 }, {
 	"rollno": 4,
 	"name": " BHAGWAT ATHARVA SANTOSH",
 	"mcq": 10 
 	
 }, {
 	"rollno": 5,
 	"name": " BIRJE AAKANKSHA ANIL",
 	"mcq":  9 
 	
 }, {
 	"rollno": 6,
 	"name": " BORKAR AFIYA AYUB",
 	"mcq": 10
 	
 }, {
 	"rollno": 7,
 	"name": " CHOUDHARY AJIT CHANDRAPAL",
 	"mcq": 8 
 }, {
 	"rollno": 8,
 	"name": " DANGE AARYA SANJAY",
 	"mcq": 10 
 }, {
 	"rollno": 9,
 	"name": " DESAI SHRUTI SANTOSH",
 	"mcq":  10 
 }, {
 	"rollno": 10,
 	"name": " DHANGAT PRIYANKA RAMESH",
 	"mcq": 10 
 }, {
 	"rollno": 11,
 	"name": " DHURI NEHAL VASANT",
 	"mcq":  9 
 }, {
 	"rollno": 12,
 	"name": " GARDE TANMAY PRAMOD",
 	"mcq": 10 
 }, {
 	"rollno": 13,
 	"name": " GURAV PRANALI GAJANAN",
 	"mcq": 9 
 }, {
 	"rollno": 14,
 	"name": " JADHAV PRAJAKTA DATTARAM",
 	"mcq": 9 
 }, {
 	"rollno":15,
 	"name": " JADHAV PRATIK JIVAN",
 	"mcq": 8 
 }, {
 	"rollno": 16,
 	"name": " JANGLE SUSHAMA DEOO",
 	"mcq": 10
 }, {
 	"rollno": 17,
 	"name": " JAYGADE JANHAVI JEEVAN",
 	"mcq": 8
 }, {
 	"rollno": 18,
 	"name": " JOSHI MADHURA AVINASH",
 	"mcq": 9
 }, {
 	"rollno": 19,
 	"name": " KADAM RUSHIKESH DATTATRAY",
 	"mcq": 10
 }, {
 	"rollno": 20,
 	"name": " KAMBALE ASHISH ANIL",
 	"mcq": 10
 }, {
 	"rollno": 21,
 	"name": " KHAN TAUZ TANVEER",
 	"mcq": 9
 }, {
 	"rollno": 22,
 	"name": " KHEDASKAR SHREYA SANJAY",
 	"mcq": 10
 }, {
 	"rollno": 23,
 	"name": " KHEDEKAR SOHAM UDAY",
 	"mcq": 9
 }, {
 	"rollno": 24,
 	"name": " KOLHATKAR ARPITA VILAS",
 	"mcq": 10
 }, {
 	"rollno": 25,
 	"name": " KORAVI SOURABH SHIVAJI",
 	"mcq": 8
 }, {
 	"rollno": 26,
 	"name": " KUMBHAR RUTUJA RAJENDRA",
 	"mcq":10
 }, {
 	"rollno": 27,
 	"name": " LAKHAN YOGESHRI PRAKASH",
 	"mcq": 8
 }, {
 	"rollno": 28,
 	"name": " LELE JANHAVI MAHESH",
 	"mcq": 8
 }, {
 	"rollno": 29,
 	"name": " MADKAIKAR HARSH MILIND",
 	"mcq": 10
 }, {
 	"rollno": 30,
 	"name": " MALJI ATHARVA BALKRISHNA",
 	"mcq": 10
 }, {
 	"rollno": 31,
 	"name": " MANE SUPRIYA NANDKUMAR",
 	"mcq": 5
 }, {
 	"rollno": 32,
 	"name": " MARAGALE TUSHAR NARAYAN",
 	"mcq": 10
 }, {
 	"rollno": 33,
 	"name": " MATKAR SAIRAJ SANJAY",
 	"mcq": 9
 }, {
 	"rollno": 34,
 	"name": " MESTRI ATHARVA CHANDRASHEKHAR",
 	"mcq": 10
 }, {
 	"rollno": 35,
 	"name": " MHADE NEHA ASHOK",
 	"mcq": 10
 }, {
 	"rollno": 36,
 	"name": " MHADGUT ASAVARI PRADEEPKUMAR",
 	"mcq": 10
 }, {
 	"rollno": 37,
 	"name": " MIRASHI PANKAJ SANTOSH",
 	"mcq": 10
 }, {
 	"rollno": 38,
 	"name": " MUKADAM AFRAH MUSHTAQ",
 	"mcq": 9
 }, {
 	"rollno": 39,
 	"name": " MUKADAM MARUFA IRFAN",
 	"mcq": 10
 }, {
 	"rollno": 40,
 	"name": " MUKADAM SUHA MOHAMED",
 	"mcq": 10
 }, {
 	"rollno": 41,
 	"name": " MUNGEKAR MANTHAN BHALCHANDRA",
 	"mcq": 9
 }, {
 	"rollno": 42,
 	"name": " NABAR PRADNYA KISHOR",
 	"mcq": 9
 }, {
 	"rollno": 43,
 	"name": " NACHANKAR GURUPRASAD SUBHASH",
 	"mcq":9
 }, {
 	"rollno": 44,
 	"name": " NACHANKAR VAISHNAVI NILESH",
 	"mcq": 10
 }, {
 	"rollno": 45,
 	"name": " NAKHWA ARMAN ANIS",
 	"mcq": 10
 }, {
 	"rollno": 46,
 	"name": " NALAWADE SAYALI UMESH",
 	"mcq": 10
 }, {
 	"rollno": 47,
 	"name": " NARKAR RAJ VINOD",
 	"mcq": 9
 }, {
 	"rollno": 48,
 	"name": " NARVEKAR YASH NAGESH",
 	"mcq": 10
 }, {
 	"rollno": 49,
 	"name": " PALAV PRATHAMESH PRADEEP",
 	"mcq": 9
 }, {
 	"rollno": 50,
 	"name": " PANCHAL MRUNAL SANDIP",
 	"mcq": 9
 }, {
 	"rollno": 51,
 	"name": " PARAB SHANKAR SITARAM",
 	"mcq": 10
 }, {
 	"rollno": 52,
 	"name": " PARANJAPE NIVEDITA PRASHANT",
 	"mcq": 10
 }, {
 	"rollno": 53,
 	"name": " PARANJAPE PRATHAMESH VILAS",
 	"mcq": 10
 }, {
 	"rollno": 54,
 	"name": " PARDESHI ASHISH KISHORSING",
 	"mcq": 8
 }, {
 	"rollno": 55,
 	"name": " PATANKAR PRIYANKA VIJAY",
 	"mcq": 10
 }, {
 	"rollno": 56,
 	"name": " PATIL MADHURA DATTATRAY",
 	"mcq": 10
 }, {
 	"rollno": 57,
 	"name": " PAWAR SAYALI DILIP",
 	"mcq": 10
 }, {
 	"rollno": 58,
 	"name": " PHADNIS ANTARA SUNIT",
 	"mcq": 10
 }, {
 	"rollno": 59,
 	"name": " PRABHU LAKSHITA RAJENDRAKUMAR",
 	"mcq": 10
 }, {
 	"rollno": 60,
 	"name": " RAHUL KAUSHAL PRASAD",
 	"mcq": 10
 }, {
 	"rollno": 61,
 	"name": " RAIN PRANJAL PRAVIN",
 	"mcq": 7
 }, {
 	"rollno": 62,
 	"name": " RAJAM BHUSHAN RATNAKAR",
 	"mcq": 10
 }, {
 	"rollno": 63,
 	"name": " RANE PRATHAMESH VILAS",
 	"mcq": 10
 }, {
 	"rollno": 64,
 	"name": " RANSHUR PRATIKSHA DILIP",
 	"mcq": 10
 }, {
 	"rollno":65,
 	"name": " SALGAONKAR SHWETA SHARAD",
 	"mcq": 10
 }, {
 	"rollno": 66,
 	"name": " SAWANT ASAWARI SHAILENDRA",
 	"mcq": 10
 }, {
 	"rollno": 67,
 	"name": " SAWANT DNYANESH DHANANJAY",
 	"mcq": 10
 }, {
 	"rollno": 68,
 	"name": " SHINGARE PRANALI DILIP",
 	"mcq": 10
 }, {
 	"rollno": 69,
 	"name": " SHIRGAONKAR VED SAGAR",
 	"mcq": 9
 }, {
 	"rollno": 70,
 	"name": " SOLKAR RIFAH MUNAF",
 	"mcq": 10
 }, {
 	"rollno": 71,
 	"name": " SURVE SAKSHI DEEPAK",
 	"mcq": 10
 }, {
 	"rollno": 72,
 	"name": " TAMHANEKAR MAHADEV VIJAY",
 	"mcq": 10
 }, {
 	"rollno": 73,
 	"name": " TEMBE AKSHAY ANAND",
 	"mcq": 10
 }, {
 	"rollno":74,
 	"name": " UPPARA KAKULA KAVYASHREE",
 	"mcq": 9
 }, {
 	"rollno": 75,
 	"name": " VASKAR RUTIK RAVINDRA",
 	"mcq": 9
 }, {
 	"rollno": 76,
 	"name": " WANIVDEKAR TANVI PRASHANT",
 	"mcq": 9
 }
    ]
  };
});