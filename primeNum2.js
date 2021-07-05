let primeNumStart = 3;
let primeNumNext = 0;
let flag = 0;
let primeCount = 0;

while(primeCount < 50){
//flag = 2;
primeNumNext = primeNumStart - 1;
	if(primeNumNext === 1){
		flag = 0;
		//while(primeNumStart > 3 && primeNumNext >= 2){
				if(primeNumStart % primeNumNext === 0){
					flag++;
				};
		//};
		primeNumNext--;
	};
	if(flag > 1){
		//array = primeNumStart;
		primeCount++;
	};
	primeNumStart++;
};