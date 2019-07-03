function f_DateCheck(aElement)
{
    var sDate=f_RemoveMask(aElement);
    //value의 -(하이픈), .(점), /(슬레시)를 제거한 후 그 값을 return 한다.

    var aDaysInMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    //[31,28,31,30,31,30,31,31,30,31,30,31]
    // 1 , 2 ,3 ,4, 5, 6, 7, 8 ,9,10,11,12
    //12개의 배열 

	if (aElement.value == null) aElement.value = "";
	if (!aElement.getAttribute("uRequired") && aElement.value == "") return SUCCESS;

	if (aElement.getAttribute("uType").toUpperCase() == "MONTH")	sDate += "01";
	if (aElement.getAttribute("uType").toUpperCase() == "YEAR")		sDate += "0101";

	//완전한 날짜의 입력이 들어온 경우이다.
	if ( sDate.length != 8 ) return ERR_DATE;

	if ( isNaN(sDate.substr(0,4)) || isNaN(sDate.substr(4,2)) || isNaN(sDate.substr(6,2)) )  return ERR_DATE;

	iYear=eval(sDate.substr(0,4));
	iMonth=eval(sDate.substr(4,2));
	iDay=eval(sDate.substr(6,2));

	// Check for leap year(윤달 유효성 검사)
	var iDaysInMonth=(iMonth!=2)?aDaysInMonth[iMonth-1]:((iYear%4==0 && iYear%100!=0 || iYear % 400==0)?29:28);

	if( (iDay!=null && iMonth!=null && iYear!=null  && iMonth<13 && iMonth>0 && iDay>0 && iDay<=iDaysInMonth) == false )  return ERR_DATE;

	return SUCCESS;
}