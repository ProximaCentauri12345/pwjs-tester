function stringRotate(a, b){
    if ((typeof a=='string') && (typeof b=='number') && b>=0) {
        a = a.substr(b) + a.substr(0, b);
        return a;
    }
	
	return "";
}