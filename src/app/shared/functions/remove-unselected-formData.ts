export function removeUnselected(formData, selectedKeys) {
    for (const pair of formData.entries()) {
        const [key] = pair;
        if (!selectedKeys.includes(key)) {
            console.log(key);
            
            formData.delete(key);
        }
    }
    return formData
}
