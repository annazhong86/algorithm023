// https://www.cnblogs.com/AhuntSun-blog/p/12636714.html
// https://www.bilibili.com/video/BV1x7411L7Q7?from=search&seid=3912456004602554239
// 封装哈希表类
function HashTable() {
    // 属性
    this.storage = []
    // 计算已经存储的元素个数
    this.count = 0
    // 装填因子： loadFactor > 0.75时需要扩容； loadFactor < 0.25时需要减少容量
    // 初始长度

    this.limit = 7

    // 方法
    // 哈希函数
    HashTable.prototype.hashFunc = function(str, size) {
        // 1. 定义hashCode变量
        let hashCode = 0

        //2. 霍纳法则， 计算hashCode的值
        //cats -> Unicode编码
        for(let i = 0 ; i < str.length; i++){
            // str.chatCodeAt(i) // 获取某个字符对应的unicode编码
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }

        // 3. 取余操作
        let index = hashCode % size
        return index
    }

    //一. 插入&修改操作
    HashTable.prototype.put = function (key, value){
        // 1. 根据key获取对应的index
        let index = this.hashFunc(key, this.limit)

        // 2. 根据index取出对应的bucket
        let bucket = this.storage[index]

        // 3. 判断bucket是否为null
        if(bucket == null){
            bucket = []
            this.storage[index] = bucket
        }

        //4. 判断是否修改数据
        for(let i = 0; i < bucket.length; i++){
            let tuple = bucket[i]
            if(tuple[0] == key){
                tuple[1] = value
                return // 不用返回值
            }
        }

        //5. 进行添加操作
        bucket.push([key, value])
        this.count +=1

        //6. 判断是否需要扩容操作
        if(this.count > this.limit * 0.75){
            let newSize = this.limit * 2
            let newPrime = this.getPrime(newSize)
            this.resize(newPrime)
        }

    }

    // 二. 获取操作
    HashTable.prototype.get = function(key){
        // 1. 根据key获取对应的index
        let index = this.hashFunc(key, this.limit)

        //2. 根据index获取对应的bucket
        let bucket = this.storage[index]

        //3. 判断bucket是否等于null
        if(bucket == null){
            return null
        }

        //4. 有bucket， 那么就进行线性查找
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if(tuple[0] == key){ // tuple[0]存储Key， tuple[1]存储value
                return tuple[1]
            }
        }

        //5. 依然没有找到， 那么返回null
        return null
    }

    //三. 删除操作
    HashTable.prototype.remove = function(key){
        //1. 根据key获取对应的index
        let index = this.hashFunc(key, this.limit)

        //2. 根据index获取对应的bucket
        let bucket = this.storage[index] 

        //3. 判断bucket是否为null
        if(bucket == null){
            return null
        }

        //4. 有bucket， 那么就进行线性查找并删除
        for (let i = 0; i < bucket.length; i++){
            let tuple = bucket[i]
            if (tuple[0] == key){
                bucket.splice(i, 1)
                this.count -= 1
                return tuple[1]

                //6. 缩小容量
                if(this.limit > 7 && this.count < this.this.limit * 0.25){
                    let newSize = Math.floor(this.limit / 2)
                    let newPrime = this.getPrime(newSize)
                    this.resize(newPrime)
                }
            }
        }

        //5. 依然没有找到， 返回null
        return null
    }

    /*--------------其他方法--------------*/
    // 判断哈希表是否为null
    HashTable.prototype.isEmpty = function(){
        return this.count == 0
    }

    //获取哈希表中的元素的个数
    HashTable.prototype.size = function(){
        return this.count
    }

    //哈希表扩容
    HashTable.prototype.resize = function(newLimit){
        //1. 保存旧的storage数组内容
        let oldStorage = this.storage

        //2. 设置所有的属性
        this.storage = []
        this.count = 0
        this.limit = newLimit

        //3. 遍历oldStorage中所有的bucket
        for(let i = 0; i < oldStorage.length; i++){
            //3.1. 取出对应的bucket
            const bucket   = oldStorage[i];

            //3.2. 判断bucket是否为null
            if(bucket == null){
                continue
            }

            //3.3. bucket中有数据， 就取出数据重新插入
            for(let j = 0; j < bucket.length; j++){
                const tuple = bucket[j];
                this.put(tuple[0], tuple[1]) //插入数据的key和value
            }
        }
    }

    //判断传入的num是否质数
    HashTable.prototype.isPrime = function(num){
        if(num <= 1){
            return false
        }

        //1. 获取num的平方根： Math.sqrt(num)
        //2. 循环判断
        for(var i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }

    //获取质数的方法
    HashTable.prototype.getPrime = function(num){
        //7*2=14,+1=15,+1=16,+1=17(质数)
        while (!this.isPrime(num)){
            num++
        }
        return num
    }
}