
/* This file uses javascript code to detect browser (chrome, safari, firefox etc.)
and inserts corresponding css file. Different browsers may have different 
different relative positions. So, this file is necessary to use the right css 
file to get the right view. */


/* js function to add a css file to the header */

function addCss(fileName) 
{
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}


/* function to choose to css file matching with browser type */

var isMobile = 
{
  Android: function() 
  {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() 
  {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() 
  {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() 
  {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() 
  {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() 
  {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

function myFunction() 
{ 
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
  {
      addCss("../StyleSubSafari.css");
  }
  else if(navigator.userAgent.indexOf("Chrome") != -1 )
  {
      addCss("../StyleSubSafari.css");
  }
  else if(navigator.userAgent.indexOf("Safari") != -1)
  {
      addCss("../StyleSubSafari.css");
  }
  else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
  {
       addCss("../StyleSubSafari.css");
  }
  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
  {
    addCss("../StyleSubSafari.css"); 
  }
  else if(isMobile) 
  {
    addCss("../StyleSubMobileTablet.css");
  }  
  else 
  {
    addCss("../StyleSubMobileTablet.css");
  }
}


/* js script to execute the above functions */

myFunction();






