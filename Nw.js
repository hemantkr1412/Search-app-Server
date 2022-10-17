const keywordWithComapanyID={
    1:["Jeans","T-Shirt","Shoes","Shirt","Pants","Sweater","Sweatshirt","Jacket","Men Wears","Men Cloths"],
    2:["Sports","Shoes","Sports Shoes"],
    3:["Visualforce","Apex","Salesforce","Lightning","Salesforce Developer","Salesforce Admin","Salesforce Consultant","Salesforce Developer","Salesforce Admin","Salesforce Consultant"],
    4:["Sports","Shoes","Sports Shoes","Sports Wear","Sports Cloths"],
    5:["Sports","Shoes","Sports Shoes","Sports Wear","Sports Cloths"],
    6:["Bags","Adventure","Backpacks","Trekking","Hiking","Camping","Travel","Luggage","Travel Accessories","Travel Bags","Travel Backpacks","Travel Luggage","Travel Bags","Travel Backpacks","Travel Luggage"],
    7:["Movie","Drama","Web Series","TV Series","TV Shows","TV Serials","TV Programs","TV Episodes","TV Shows","TV Serials","TV Programs","TV Episodes","Netflx"],
    8:["Tooth","Tooth Paste","Dental","Dentist","Dental Care","Dental Health","Dental Hygiene","Dental Care","Dental Health","Dental Hygiene","Dental Care","Dental Health","Dental Hygiene"],
    9:[],
    10:[],
    11:[],

  }


function searchKeyword(keyWord){
    let matchedCompanyID=[];
    for(let i=1;i<=Object.keys(keywordWithComapanyID).length;i++){
        for(let j=0;j<keywordWithComapanyID[i].length;j++){
          if(keywordWithComapanyID[i][j].toLowerCase().includes((keyWord).toLowerCase())){
            matchedCompanyID.push(i);
          }
        }
        // console.log(keywordWithComapanyID[i]);
      }
      return matchedCompanyID;
}

let matchedCompanyID=searchKeyword("Sports");
const matchedCompanyIDWithoutDuplicates=[...new Set(matchedCompanyID)];
console.log(matchedCompanyIDWithoutDuplicates);



    