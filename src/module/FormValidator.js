module.exports ={
  isValidBirthDate: function(dateStr){
    if(!/^[0-9]*$/.test(dateStr) || dateStr.length>8){
      return false;
    }
    var yearStr = dateStr.substring(0,4);
    var monthStr = dateStr.substring(4,6);
    var dayStr = dateStr.substring(6,8);
    var year = parseInt(yearStr);
    var month = parseInt(monthStr);
    var day = parseInt(dayStr);
    var today = new Date();
    if((month<1||month>12)
    ||(day<1||day>31)
    ||((month==4||month==6||month==9||month==11) &&day==31)
    ||(month==2&&(day>29||(day==29&&!(year%4==0&&(year%100!=0||year%400==0)))))){
      return false;
    }else{
      var birth = new Date(yearStr+'-'+monthStr+'-'+dayStr);
      var minBirth = new Date('1900-01-01');
      console.log(birth);
      console.log(today);
      if(+birth>=today || +birth<minBirth){
        return false;
      }else{
        return true;
      }
    }
  }
};
