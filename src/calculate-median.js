function calculate_median(arr) {
       var m='0';
       for (var i = 0; i < arr.length; i++) {
      	    if((i+1)%2===0)
              m++;
       };
      if(m%2===0 && m!=0){    
            var arra = new Array();
            var j='0';
            for (var i = 0; i < arr.length; i++) {
            	if ((i+1)%2===0){
            	    arra[j] = arr[i];
            	    j++;
                  }
            };
            var n = arra[arra.length/2-1];
            var m = arra[arra.length/2];
            var number = (Number(n)+Number(m))/2;
        };
        if (m%2!=0) {
        	 var arrb =new Array();
        	 var j = '0';
        	 for (var i = 0; i < arr.length; i++) {
            	if ((i+1)%2===0){
            	    arrb[j] = arr[i];
            	    j++;
                  }
            };
            if(arrb.length === 1){
                 var number=arrb[0];
            }
            else
            {
               var x = Math.trunc(arrb.length/2);
               console.log(x);
               var number = Number(arrb[x]);
             }           
        };
        return number;
}

module.exports = calculate_median;
