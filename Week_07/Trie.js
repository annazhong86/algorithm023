var TreeNode = function() {
    this.next = {};
    this.isEnd = false;
};

var Trie = function() {
    this.root = new TreeNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!word) return false;
    let head = this.root;
    for (let s of word) {
        if (!head.next[s]) head.next[s] = new TreeNode();
        head = head.next[s];
    }
    head.isEnd = true;
    return true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (!word) return false;
    let head = this.root;
    for (let s of word) {
        if (!head.next[s]) return false;
        head = head.next[s];
    }
    return head.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if (!prefix) return false;
    let head = this.root;
    for (let s of prefix) {
        if (!head.next[s]) return false;
        head = head.next[s];
    }
    return true;
};