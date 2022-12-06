import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import * as fs from 'fs';

type ProofProps = {
    address: string,
    amount: string,
    proof: string[]
}
 
const tree = StandardMerkleTree.load(JSON.parse(`${fs.readFileSync("tree.json")}`));

const getProof = (address: string) => {
    let proofData = {} as ProofProps;
    for (const [i, v] of tree.entries()) {
      if (v[0] === address) {  
        const [address, amount] = v;
        const proof = tree.getProof(i);
        proofData = {address, amount, proof}
      }
    }
    console.log('proofData', proofData)
    return proofData;
} 
getProof('0x1111111111111111111111111111111111111111');
export {}