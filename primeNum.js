let primeNumStart = 3;
let primeNumNext = 0;
let flag = 0;
let primeCount = 0;
let primeArray = [2];

//素数の数が[2]と49個追加まで繰り返す
while(primeCount < 49){
primeNumNext = primeNumStart - 1;
	//割る数が１になったかどうか判定
	while(primeNumNext != 1){
		//割り切れたらflag+1
		if(primeNumStart % primeNumNext === 0){
			flag++;
		};
	primeNumNext--;
	};
	//割り切れなかったらカウントして配列に追加
	if(flag === 0){
		primeCount++;
		primeArray.push(primeNumStart);
	};
primeNumStart++;
flag = 0;
};

console.log(primeArray);
document.getElementById("btn").innerText = primeArray