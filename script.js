 function getarray(){
	 return new Promise((resolve) => {
		       setTimeOut(()=>{
				     let arr = [1,2,3,4,5,6];
				      resolve(arr);
			   });
	 } );
 }
 getarray().then((arr){
	 return new Promise((resolve) =>{
		 setTimeOut(()=>{
			 const evens = arr.filter(num => num%2===0);
			 document.getElementById("output").textContent = evens;
			 resolve(evens);
		 }, 1000);
	 });
 }).then((evens) =>{
	   return new Promise((resolve) =>{
		   setTimeOut(() =>{
			   const doubled = evens.map(num => num*2);
			   document.getElementById("output").textContent = doubled;
		   },2000)
	   });
 });
