let primeNumStart = 3;
let primeNumNext = 0;
let flag = 0;
let primeCount = 0;

//primeCount
while(primeNumStart < 10){
primeNumNext = primeNumStart - 1;
	while(primeNumNext != 1){
		if(primeNumStart % primeNumNext === 0){
			flag++;
		};
	primeNumNext--;
	};
	if(flag <1){
		primeCount++;
	};
primeNumStart++;
};
