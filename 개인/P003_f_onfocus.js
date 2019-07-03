

let array = ['1','2','2','3','3','4','4','5']; 
let str=""; 

for(let i=0; i<array.length; i++){

	for(let j=0; j<array.length; j++){

			if(array[i] == array[j]){
				str = array[i]; 
				array[j]="";
				array[i]=str; 
			}

	}

}

for(let k=0; k<array.length; k++){

	if(!array[k]==""){
		console.log(array[k])
	}

}

