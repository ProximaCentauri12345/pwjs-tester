function triangleArea(a, b, c){
	var p = (a + b + c) / 2;

	if ((a+b)>c && (b+c)>a && (c+a)>b) {
		if (a > 0 && b > 0 && c > 0) {
			var pole = Math.sqrt(p * (p - a) * (p - b) * (p - c));
			pole = Math.round((pole + Number.EPSILON) * 100) / 100;
			return pole;
		}
	}

	return -1;
}