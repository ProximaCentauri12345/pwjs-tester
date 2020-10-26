function parametricSort(a, b) {
    if (b == "asc") {
        return a.sort();
    }
    else if (b == "desc") {
        return a.sort(function (a, b) { return b - a });
    }

    return false;
}