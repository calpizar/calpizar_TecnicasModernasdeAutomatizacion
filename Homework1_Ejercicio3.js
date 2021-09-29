// Javascript program to check if a string
// can be formed by concatenating two words
 
// Alphabet size
let SIZE = 26;
 
// Trie Node
class TrieNode
{
    constructor()
    {
        this.isLeaf = false;
        this.children = new Array(SIZE);
         
        for(let i = 0 ; i < SIZE; i++)
            this.children[i] = null;
    }
}
 
let root;
 
// If not present, inserts key into Trie
// If the key is prefix of trie node, just
// mark leaf node
function insert(root, Key)
{
    let n = Key.length;
    let pCrawl = root;
   
    for(let i = 0; i < n; i++)
    {
        let index = Key[i].charCodeAt(0) -
                       'a'.charCodeAt(0);
   
        if (pCrawl.children[index] == null)
            pCrawl.children[index] = new TrieNode();
   
        pCrawl = pCrawl.children[index];
    }
   
    // Make last node as leaf node
    pCrawl.isLeaf = true;
}
 
// Searches a prefix of key. If prefix
// is present, returns its ending
// position in string. Else returns -1.
function findPrefix(root, key)
{
    let prefixPositions = [];
    let level;
    let pCrawl = root;
   
    for(level = 0; level < key.length; level++)
    {
        let index = key[level].charCodeAt(0) -
                           'a'.charCodeAt(0);
        if (pCrawl.isLeaf == true)
            prefixPositions.push(level);
        if (pCrawl.children[index] == null)
            return prefixPositions;
   
        pCrawl = pCrawl.children[index];
    }
    if (pCrawl != null && pCrawl.isLeaf)
        prefixPositions.push(level); 
       
    return prefixPositions; 
}
 
// Function to check if word formation
// is possible or not
function isPossible(root, word)
{
     
    // Search for the word in the trie and
    // get its prefix positions upto which
    // there is matched
    let prefixPositions1 = findPrefix(root, word);
   
    // Word formation is not possible if
    // the word did not have at least one
    // prefix match
    if (prefixPositions1.length == 0)
        return false;
   
    // Search for rest of substring for
    // each prefix match
    for(let len1 = 0;
            len1 < prefixPositions1.length;
            len1++)
    {
        let restOfSubstring = word.substring(
            prefixPositions1[len1], word.length);
        let prefixPositions2 = findPrefix(
            root, restOfSubstring);
             
        for(let len2 = 0;
                len2 < prefixPositions2.length;
                len2++)
        {
             
            // Check if word formation is possible
            if (prefixPositions1[len1] +
                prefixPositions2[len2] == word.length)
                return true;
        }
    }
    return false;
}
 
// Driver code
let dictionary = ["bow", "crystal","organic","ally","rain","line"];
let word = "rainbow";
 
// Root Node of trie
root = new TrieNode();
 
// Insert all words of dictionary into trie
for(let i = 0; i < dictionary.length; i++)
    insert(root, dictionary[i]);
 
if (isPossible(root, word))
    console.log("Yes");
else
    console.log("No");
 