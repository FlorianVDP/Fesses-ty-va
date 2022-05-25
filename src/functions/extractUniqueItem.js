export default function extractUniqueItem(data, key){
    const deeptypes = data.map(item => item[key]);
    const flatTypes = deeptypes.flat();
    const dataTypes = [...new Set(flatTypes)].sort();
    return dataTypes
}