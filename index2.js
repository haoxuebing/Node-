let http = require('http'); 

http.createServer((req, res) =>  {
    if(req.url!='/favicon.ico'){
        let t1 = (new Date()).toLocaleString(); 
        console.log(req.url + '进入' + t1)
        res.write(t1 + '\n'); 

        //模拟异步请求
        setTimeout(() =>  {
            res.write(`Request Method:${req.method}\n`)
            res.write(`Request URL:${req.url}\n`); 
            let t2 = (new Date()).toLocaleString(); 
            console.log(req.url + '离开' + t2)
            res.write(t2)
            res.end(); 
        }, 5000);
         
    }else{
        res.end()
    }

}).listen(80); 

console.log('server start'); 


