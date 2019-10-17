const Node = require('./node');
	class LinkedList {
		constructor() {
			this._head = null;
			this._tail = null;
			this.length = 0;
		}

		append(data) {
			const node = new Node(data);

			if (this.length === 0) {
				this._head = node
				this._tail = node;
			} else {
				this._tail.next = node;
				node.prev = this._tail;

				this._tail = node;
			}

			this.length++;
			return this;
		}

		head() {
			return this._head ? this._head.data : null;
		}

		tail() {
			return this._tail ? this._tail.data : null;
		}

		at(index) {
			if (index < 0 || this.length <= index ) {
				return null;
			}

			let current = this._head;
			let i = 0;

			while (i < index) {
				current = current.next;
				i++;
			}

			return current.data;
		}

		insertAt(index, data) {
			if (index < 0 || this.length < index) {
				return false;
			}

			let node = new Node(data);

			if (index === 0) {
				node.next = this._head;
				// this._head.prev = node;

				this._head = node;
			} else if (index === this.length) {
				this._tail.next = node;
				node.prev = this._tail;

				this._tail = node;
			} else {
				let current = this._head;
				let prev = null;
				let i = 0;

				while (i < index) {
					prev = current;
					current = current.next;
					i++;
				}

				prev.next = node;
				node.prev = prev;

				node.next = current;
				current.prev = node;
			}

			this.length++;
			return this;
		}

		isEmpty() {
			return this.length === 0;
		}

		clear() {
			this._head = null;
			this._tail = null;

			this.length = 0;
			return this;
		}

		deleteAt(index) {
			if (index < 0 || this.length <= index ) {
				return null;
			}

			let current;

			if (index === 0) {
				current = this._head;

				this._head = this._head.next;
				// this._head.prev = null;
			} else if(index === this.length - 1) {
				current = this._tail;

				this._tail = this._tail.prev;
				// this._tail.next = null;
			} else {
				current = this._head;

				let prev = null;
				let i = 0;

				while (i < index) {
					prev = current;
					current = current.next;
					i++;
				}

				prev.next = current.next;
				current.next.prev = prev;
			}

			this.length--;
			// return current.value;
			return this;
		}

		reverse() {
			let current = this._head;
			this._tail = current;

			while (current !== null) {
				let prev = current.prev;
				current.prev = current.next;
				current.next = prev;

				if (current.prev) {
					current = current.prev;
				} else {
					this._head = current;
					break;
				}
			}

			return this;
		}

		indexOf(value) {
			let current = this._head;
			let i = 0;

			while (current) {
				if (current.data === value) {
					return i;
				}

				current = current.next;
				i++;
			}

			return -1;
		}
	}


module.exports = LinkedList;

// class LinkedList {
// 	constructor() {
// 		this._head = null;
// 		this._tail = null;
// 		this.length = 0;
// 	}

// 	append(data) {
// 		const newNode = new Node(data);

// 		if (this.length === 0) {
// 			this._head = newNode
// 			this._tail = newNode;
// 		} else {
// 			this._tail.next = newNode;
// 			newNode.prev = this._tail;

// 			this._tail = newNode;
// 		}

// 		this.length++;
// 		return this;
// 	}

// 	head() {
// 		return this._head.data;
// 	}

// 	tail() {
// 		return this._tail.data;
// 	}

// 	at(index) {
// 		if (index < 0 || this.length <= index ) {
// 			return null;
// 		}

// 		let current = this._head;
// 		let ind = 0;

// 		while (ind < index) {
// 			current = current.next;
// 			ind++;
// 		}

// 		return current.data;
// 	}

// 	insertAt(index, data) {
// 		if (index < 0 || this.length < index) {
// 			return false;
// 		}

// 		let node = new Node(data);

// 		if (index === 0) {
// 			node.next = this._head;
// 			this._head.prev = node;

// 			this._head = node;
// 		} else if (index === this.length) {
// 			this._tail.next = node;
// 			node.prev = this._tail;

// 			this._tail = node;
// 		} else {
// 			let current = this._head;
// 			let prev = null;
// 			let ind = 0;

// 			while (ind < index) {
// 				prev = current;
// 				current = current.next;
// 				ind++;
// 			}

// 			prev.next = node;
// 			node.prev = prev;

// 			node.next = current;
// 			current.prev = node;
// 		}

// 		this.length++;
// 		return this;
// 	}

// 	isEmpty() {
// 		return this.length === 0;
// 	}

// 	clear() {
// 		this._head.data = null;
// 		this._tail.data = null;

// 		this.length = 0;

// 		return this;
// 	}

// 	deleteAt(index) {
// 		if (index < 0 || this.length <= index ) {
// 			return null;
// 		}

// 		let current;

// 		if (index === 0) {
// 			current = this._head;

// 			this._head = this._head.next;
// 			this._head.prev = null;
// 		} else if(index === this.length - 1) {
// 			current = this._tail;

// 			this._tail = this._tail.prev;
// 			this._tail.next = null;
// 		} else {
// 			current = this._head;

// 			let prev = null;
// 			let ind = 0;

// 			while (ind < index) {
// 				prev = current;
// 				current = current.next;
// 				ind++;
// 			}

// 			prev.next = current.next;
// 			current.next.prev = prev;
// 		}

// 		this.length--;
// 		return this;
// 	}

// 	reverse() {
// 		let current = this._head;

// 		while (current != null) {

// 			let temp = current.prev;
// 			current.prev = current.next;
// 			current.next = temp;

// 			current = current.prev;
// 		}

// 		let tempHead = this._head;
// 		this._head = this._tail;
// 		this._tail = tempHead;

// 		return this;
// 	}

// 	indexOf(data) {
// 		let current = this._head;
// 		let index = 0;

// 		while (current) {
// 			if (current.data === data) {
// 				return index;
// 			}

// 			current = current.next;
// 			index++;
// 		}

// 		return -1;
// 	}
// }