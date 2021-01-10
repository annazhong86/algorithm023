function PriorityQueue() {

    function QueueElement(element, priority){
        this.element = element;
        this.priority = priority;
    }

    this.items = []

    PriorityQueue.prototype.enqueue = (element, prrriority) => {
        let queueElement = new QueueElement(element, priority);
        
        if(this.items.length == 0){
            this.items.push(queueElement);
        }else{
            //定义一个变量记录是否成功添加了新元素
            let added = false;
            for(let i of this.items){ // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of
                //让新插入的元素与原有元素进行优先级比较(priority越小，优先级越大)
                if(queueElement.priority < i.priority){
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    //新元素已经找到插入位置了，可以使用break停止循环了
                    break;
                }
            }
            //新元素没有成功插入， 就把它放在队列的最前面
            if(!added){
                this.items.push(queueEleement);
            }
        }
    }

    PriorityQueue.prototype.dequeue = () => {
        return this.items.shift();
    }

    PriorityQueue.prototype.front = () => {
        return this.items[0];
    }

    PriorityQueue.prototype.isEmpty = () => {
        return this.items.length == 0;
    }

    PriorityQueue.prototype.size = () => {
        return this.items.length;
    }

    PriorityQueue.prototype.toString = () => {
        let resultString = '';
            for( let i of this.items){
                resultString += i.element + '-' + i.priority + ' ';
            }
        return resultString;
    }

}