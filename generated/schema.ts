// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFT entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFT must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFT", id.toString(), this);
    }
  }

  static load(id: string): NFT | null {
    return changetype<NFT | null>(store.get("NFT", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collectionID(): Bytes {
    let value = this.get("collectionID");
    return value!.toBytes();
  }

  set collectionID(value: Bytes) {
    this.set("collectionID", Value.fromBytes(value));
  }

  get nftID(): BigInt {
    let value = this.get("nftID");
    return value!.toBigInt();
  }

  set nftID(value: BigInt) {
    this.set("nftID", Value.fromBigInt(value));
  }

  get mintedTimestamp(): BigInt {
    let value = this.get("mintedTimestamp");
    return value!.toBigInt();
  }

  set mintedTimestamp(value: BigInt) {
    this.set("mintedTimestamp", Value.fromBigInt(value));
  }
}

export class RandomNumber extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RandomNumber entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RandomNumber must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RandomNumber", id.toString(), this);
    }
  }

  static load(id: string): RandomNumber | null {
    return changetype<RandomNumber | null>(store.get("RandomNumber", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get generatedTimestamp(): BigInt {
    let value = this.get("generatedTimestamp");
    return value!.toBigInt();
  }

  set generatedTimestamp(value: BigInt) {
    this.set("generatedTimestamp", Value.fromBigInt(value));
  }

  get epoch(): i32 {
    let value = this.get("epoch");
    return value!.toI32();
  }

  set epoch(value: i32) {
    this.set("epoch", Value.fromI32(value));
  }
}
