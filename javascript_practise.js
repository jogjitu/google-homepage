var problem1 = 0;
for (i = 1; i < 1000; i++) {
if (i % 3 === 0 || i % 5 === 0) {
problem1 = problem1 + i;
}
}
document.write("<div id='problem1'><span> problem1:");
document.write(problem1+"</span></div>");


var problem2=0;
var fib=0;
var fibprev=0;
var fibprevprev=0;

for (i = 1; i <= 4000000; i++) {		
	if(i === 3){
		fibprev = 2;
		fibprevprev = 1;				
	}
	else{
		
		fibprevprev=fibprev; 
		fibprev = fib;
		
	}
	fib = fibprev + fibprevprev;
	if(fib > 4000000){
		break;
	}
	else{
		if(fib%2===0){
		document.write("<div id='problem2'><span> fib:");
		document.write(fib+"</span></div>");
		problem2 += fib;
	}

		
	
	}


}
problem2=problem2+2;
document.write("<div id='problem2'><span> problem2:");
document.write(problem2+"</span></div>");


var problem3=0;
var primefactors=new Array();
var isPrime=false;
for(i=3;i<=13195;i++){
	primefactors[i]=0;
	if (13195%i === 0){

		for(j=2;j<i;j++){
			isPrime=false;
			if(i%j===0){
				break;
			}
			else{
				isPrime=true;
			}	

		}
	if (isPrime){		
		primefactors[i]=i;
		document.write("<div id='problem3'><span> problem3:");
		document.write(primefactors[i]+"</span></div>");

	}
	}

}





