let primeNumStart = 3;
let primeNumNext = 0;
let flag = 0;
let primeCount = 0;
let primeArray = [2];

//ボタンを押したら計算開始
document.getElementById("btn").addEventListener("click", () =>  {

//let startTime = new Date();

//素数の数が49個追加まで繰り返す
while(primeCount < 49){
primeNumNext = primeNumStart - 1;

	//割る数を１ずつへらしていき、１になったかどうか判定
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

//計算した素数を書き換える
document.getElementById("prime").innerText = primeArray
});