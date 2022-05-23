export default () => {
    return new Array(100).fill(0).map((v, index) => ({
        name: `koo${index}`
    })) 
}