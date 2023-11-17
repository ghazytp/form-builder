const generateUid = (): string => {
  return (Date.now() * Math.floor(Math.random() * (99 - 1) + 1)).toString(36)
}

export default generateUid
