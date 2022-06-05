import { NumberGenerated, nftUpdated } from "../generated/VRFD20/VRFD20"
import { NFT, RandomNumber } from "../generated/schema"

export function handleNumberGenerated(event: NumberGenerated): void {
  let number = new RandomNumber(event.transaction.hash.toHex())
  number.value = event.params.requestId
  number.generatedTimestamp = event.block.timestamp
  number.save()
}

export function handlenftUpdated(event: nftUpdated): void {
  let nft = new NFT(event.transaction.hash.toHex())
  nft.collectionID = event.params.newNft
  nft.nftID = event.params.id
  nft.mintedTimestamp = event.block.timestamp
  nft.save()
}
