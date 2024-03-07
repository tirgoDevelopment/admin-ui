export function removeUnselected(formData, selectedKeys) {
    for (const pair of formData.entries()) {
        const [key] = pair;
        if (!selectedKeys.includes(key)) {
            formData.delete(key);
        }
    }
    return formData
}
