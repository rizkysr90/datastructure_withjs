const scanner = require('readline-sync');
class Node {
    constructor(value) {
        this.data = value;
        this.next = null
    }
}
class MyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtNth(value,position) {
        const newNode = new Node(value);
        if (position === 1) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let temp1 = this.head;
            for (let i = 0; i < position - 2; i++) {
                temp1 = temp1.next;
            }
            newNode.next = temp1.next;
            temp1.next = newNode;
        } 

    }
    print() {
        let temp = this.head;
        let res = "";
        while (temp !== null) {
            res += `${temp.data} `
            temp = temp.next;
        }
       return res;
    }
}
function main() {
    const head = new MyLinkedList;
    // seed new linkedlist data
    head.insertAtBeginning(1); // 1
    head.insertAtBeginning(2); // 2 1 
    head.insertAtBeginning(3); // 3 2 1
    head.insertAtBeginning(4); //  4 3 2 1

    const currentValue = scanner.question(`Input nilai : `);
    head.insertAtNth(currentValue,3); // 4 3 10 2 1
    console.log(head.print());
}


main()