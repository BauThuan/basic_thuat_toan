class HashTable {
    constructor(size = 50) {
      this.table = new Array(size);
      this.size = size;
    }

      _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }

    set(key, value) {
      const index = this._hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
  
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          pair[1] = value;
          return;
        }
      }  
      this.table[index].push([key, value]);
    }
    
    get(key) {
      const index = this._hash(key);
      if (!this.table[index]) return undefined;
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
      return undefined; 
    }

    remove(key) {
      const index = this._hash(key);
      if (!this.table[index]) return false;
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1); 
          return true;
        }
      }
      return false;
    }

    display() {
      for (let i = 0; i < this.size; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }
  
  // Sử dụng HashTable
  const hashTable = new HashTable(10); // Tạo bảng băm kích thước 10
  
  hashTable.set("apple", 100);
  hashTable.set("banana", 200);
  hashTable.set("cherry", 300);
  hashTable.set("mango", 150);
  
  // Thêm key gây va chạm
  hashTable.set("peach", 400); // Giả sử hàm băm đưa "peach" và "mango" vào cùng vị trí
  
  console.log("Value of apple:", hashTable.get("apple")); // 100
  console.log("Value of banana:", hashTable.get("banana")); // 200
  
  hashTable.remove("apple"); // Xóa key 'apple'
  console.log("After removing apple:");
  hashTable.display(); // Hiển thị toàn bộ bảng băm
  