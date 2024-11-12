function huffmanEncoding(str) {
  const freqMap = new Map();
  for (let char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  let nodes = Array.from(freqMap.entries()).map(([char, freq])=>({char, freq}));
  while(nodes.length > 1){
    nodes.sort((a,b)=> a.freq - b.freq);
    const [left, right] = nodes.splice(0,2);
    nodes.push({char: null, freq: left.freq + right.freq, left, right});
  }

  const codes = new Map();
  (function generateCode(node, code=''){
    if(node.char) codes.set(node.char, code);
    if(node.left) generateCode(node.left, code+'0');
    if(node.right) generateCode(node.right, code+'1');
  })(nodes[0]);

  return{
    encodedString: [...str].map(char=> codes.get(char)).join(''),
    codes: Object.fromEntries(codes)
  };

}

const input = "This is Huffman encoding";

const {encodedString, codes} = huffmanEncoding(input);

console.log("Huffman codes:", codes);

console.log("Encoded string:", encodedString);
