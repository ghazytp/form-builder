

const reorderList = (arr: [], sourceIndex: number, destIndex: number): [][] => {
    const result = [...arr]
    const [removedData] = result.splice(sourceIndex, 1)
    result.splice(destIndex, 0, removedData)
  
    return result
  }
  
  export default reorderList