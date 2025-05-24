class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LindkedList {
    
    constructor(){
        this.head = null
        this.tail = null
        this.lenght = 0
    }

    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.lenght ++
    }
    
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.lenght ++
    }

    insert(value){
        console.log('value => thành thật => ', value)
    }
    
}

const myList = new LindkedList()

myList.append(10)
myList.append(20)
myList.append(30)
myList.append(40)
myList.prepend(5)
myList.append(100)

// thiếu 
console.log(JSON.stringify(myList, null, 2));