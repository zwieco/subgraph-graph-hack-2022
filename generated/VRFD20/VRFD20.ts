// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NumberGenerated extends ethereum.Event {
  get params(): NumberGenerated__Params {
    return new NumberGenerated__Params(this);
  }
}

export class NumberGenerated__Params {
  _event: NumberGenerated;

  constructor(event: NumberGenerated) {
    this._event = event;
  }

  get requestId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class nftUpdated extends ethereum.Event {
  get params(): nftUpdated__Params {
    return new nftUpdated__Params(this);
  }
}

export class nftUpdated__Params {
  _event: nftUpdated;

  constructor(event: nftUpdated) {
    this._event = event;
  }

  get newNft(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VRFD20 extends ethereum.SmartContract {
  static bind(address: Address): VRFD20 {
    return new VRFD20("VRFD20", address);
  }

  arr(param0: BigInt): Address {
    let result = super.call("arr", "arr(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_arr(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("arr", "arr(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getBalance(): BigInt {
    let result = super.call("getBalance", "getBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getBalance", "getBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getId(index: BigInt): BigInt {
    let result = super.call("getId", "getId(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_getId(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getId", "getId(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRandomNumber(): Bytes {
    let result = super.call(
      "getRandomNumber",
      "getRandomNumber():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_getRandomNumber(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRandomNumber",
      "getRandomNumber():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  ids(param0: BigInt): BigInt {
    let result = super.call("ids", "ids(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_ids(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ids", "ids(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftAmount(): BigInt {
    let result = super.call("nftAmount", "nftAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nftAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nftAmount", "nftAmount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nfts(param0: Address): Address {
    let result = super.call("nfts", "nfts(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_nfts(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("nfts", "nfts(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  porque(): BigInt {
    let result = super.call("porque", "porque():(uint256)", []);

    return result[0].toBigInt();
  }

  try_porque(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("porque", "porque():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  randomResult(): BigInt {
    let result = super.call("randomResult", "randomResult():(uint256)", []);

    return result[0].toBigInt();
  }

  try_randomResult(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("randomResult", "randomResult():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updateNft(): Address {
    let result = super.call("updateNft", "updateNft():(address)", []);

    return result[0].toAddress();
  }

  try_updateNft(): ethereum.CallResult<Address> {
    let result = super.tryCall("updateNft", "updateNft():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get vrfCoordinator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get linkToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddNftCall extends ethereum.Call {
  get inputs(): AddNftCall__Inputs {
    return new AddNftCall__Inputs(this);
  }

  get outputs(): AddNftCall__Outputs {
    return new AddNftCall__Outputs(this);
  }
}

export class AddNftCall__Inputs {
  _call: AddNftCall;

  constructor(call: AddNftCall) {
    this._call = call;
  }

  get newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nftAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddNftCall__Outputs {
  _call: AddNftCall;

  constructor(call: AddNftCall) {
    this._call = call;
  }
}

export class GetBalanceCall extends ethereum.Call {
  get inputs(): GetBalanceCall__Inputs {
    return new GetBalanceCall__Inputs(this);
  }

  get outputs(): GetBalanceCall__Outputs {
    return new GetBalanceCall__Outputs(this);
  }
}

export class GetBalanceCall__Inputs {
  _call: GetBalanceCall;

  constructor(call: GetBalanceCall) {
    this._call = call;
  }
}

export class GetBalanceCall__Outputs {
  _call: GetBalanceCall;

  constructor(call: GetBalanceCall) {
    this._call = call;
  }

  get output(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class GetRandomNumberCall extends ethereum.Call {
  get inputs(): GetRandomNumberCall__Inputs {
    return new GetRandomNumberCall__Inputs(this);
  }

  get outputs(): GetRandomNumberCall__Outputs {
    return new GetRandomNumberCall__Outputs(this);
  }
}

export class GetRandomNumberCall__Inputs {
  _call: GetRandomNumberCall;

  constructor(call: GetRandomNumberCall) {
    this._call = call;
  }
}

export class GetRandomNumberCall__Outputs {
  _call: GetRandomNumberCall;

  constructor(call: GetRandomNumberCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RawFulfillRandomnessCall extends ethereum.Call {
  get inputs(): RawFulfillRandomnessCall__Inputs {
    return new RawFulfillRandomnessCall__Inputs(this);
  }

  get outputs(): RawFulfillRandomnessCall__Outputs {
    return new RawFulfillRandomnessCall__Outputs(this);
  }
}

export class RawFulfillRandomnessCall__Inputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get randomness(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RawFulfillRandomnessCall__Outputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }
}

export class UpdateNftCall extends ethereum.Call {
  get inputs(): UpdateNftCall__Inputs {
    return new UpdateNftCall__Inputs(this);
  }

  get outputs(): UpdateNftCall__Outputs {
    return new UpdateNftCall__Outputs(this);
  }
}

export class UpdateNftCall__Inputs {
  _call: UpdateNftCall;

  constructor(call: UpdateNftCall) {
    this._call = call;
  }
}

export class UpdateNftCall__Outputs {
  _call: UpdateNftCall;

  constructor(call: UpdateNftCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
