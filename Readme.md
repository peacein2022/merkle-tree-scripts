# Scripts with Merkle tree

## 1 Install dependencies 
```
npm i
```

## 2 Create Merkle tree run the command
```
npm run gen-tree
```
after run
created file tree.json with Merkle tree from array in gen-tree.ts to see line 5 
in console of the terminal we can see root hash like as 
```
Merkle Root: 0x11c179e99cd8b868bd74ddfd76138dec9b4cdf7a2bf3da312bf3d65f86dbda42
```


## 3 Create proof 
```
npm run get-proof 
```
returns in console of the terminal proof data like as for passed address in line 24 of get-proof.ts file 
```
proofData {
  address: '0x1111111111111111111111111111111111111111',
  amount: '5000000000000000000',
  proof: [
    '0xc3ced4ae0a24b99403a32792b51461b70306c82f3a42027072347c519adc3460',
    '0x2c9d8ea5680b59d353cf8efbae0b99e91a5949c73d75677f950021beeeb68c10'
  ]
}
```