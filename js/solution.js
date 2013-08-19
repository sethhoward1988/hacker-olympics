var a = BigInteger(0),b = BigInteger(1),f = [a,b],x = [],v = [1,'a',5,'e',9,'i',15,'o',21,'u'];
for(var i = 1;i < 499; i++){
    if(i % 2 == 0)
        v.indexOf(f[i].remainder(26)._d[0]) != -1 && x.push(v[v.indexOf(f[i].remainder(26)._d[0]) + 1])
    f.push(f[i].add(f[i-1]));
};
console.log(x.join(''));