import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
// import Web3 from 'web3';

function App(): JSX.Element {
  const [trnxValue, setTrnxValue] = useState<string>('');
  const [toAddress, setToAddress] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  // const web3 = new Web3('https://ropsten.infura.io/v3/'+ process.env.INFURA_PROJECT_ID );

  async function handleSubmit(): Promise<void> {
    setToAddress('');
    setTrnxValue('');
    // const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    // const tx = {
    //   from: account.address,
    //   to: toAddress,
    //   value: web3.utils.toWei(trnxValue, 'ether'),
    //   gas: 21000,
    //   gasPrice: web3.utils.toWei('10', 'gwei'),
    // };
    // try {
    //   const signedTx = await account.signTransaction(tx);
    //   const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    //   setStatus(`Transaction completed with hash: ${receipt.transactionHash}`);
    // } catch (err) {
    //   setStatus(`Transaction failed with error: ${err}`);
    // }
    setStatus('Transaction completed');
  }

  return (
    <View style={tw`flex-1 justify-center items-center mx-8`}>
      <View style={tw`w-full`}>
        <Text style={tw`font-bold text-lg mb-4`}>Send ETH</Text>
        <TextInput
          style={tw`border border-gray-400 rounded-md px-4 py-2 mb-4`}
          placeholder="Enter trnx value"
          onChangeText={text => setTrnxValue(text)}
          value={trnxValue}
        />
        <TextInput
          style={tw`border border-gray-400 rounded-md px-4 py-2 mb-4`}
          placeholder="Enter recipient address"
          onChangeText={text => setToAddress(text)}
          value={toAddress}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 rounded-md px-4 py-2`}
          onPress={handleSubmit}>
          <Text style={tw`text-white font-bold text-center py-1`}>Submit</Text>
        </TouchableOpacity>
        {status && <Text style={tw`text-center mt-4 text-base`}>{status}</Text>}
      </View>
    </View>
  );
}

export default App;
