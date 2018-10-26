console.log('app')

var appkey = '5a42d618af297e1905da1fd7e323e88b';
var query = '제주대학교'
;var url =`https://dapi.kakao.com/v2/search/web?query=${query}`;


var myHeaders = new Headers(); 
myHeaders.append('Authorization', 'KakaoAK e4d234929bd36175a103f0bd0bca3757'); 
var options = { 
      headers: myHeaders 
  }; 
 
 
  fetch(url, options).then(function(response) { 
    response.json().then(function(data) { 
      console.log('json data:', data); 
    }); 
  }); 
